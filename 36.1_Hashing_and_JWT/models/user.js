/** User class for message.ly */
const db = require("../db");
const ExpressError = require('../expressError');
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require('../config');
const jwt = require("jsonwebtoken");
const { SECRET_KEY} = require('../config')


/** User of the site. */

class User {

  /** register new user -- returns
   *    {username, password, first_name, last_name, phone}
   */

  static async register({username, password, first_name, last_name, phone}) { 
    // Hash user's password before storing it in DB
    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR)

    // Add user to DB
    const result = await db.query(
      `INSERT INTO users 
        (username, password, first_name, last_name, phone, join_at, last_login_at )
        VALUES ($1, $2, $3, $4, $5, current_timestamp, current_timestamp)
        RETURNING username, password, first_name, last_name, phone
      `, [username, hashedPassword, first_name, last_name, phone]
    );
    
    return result.rows[0];
  }

  /** Authenticate: is this username/password valid? If so, returns JWT. */

  static async authenticate(username, password) {
    // Get user info from DB
    const result = await db.query(
      `SELECT username, password 
        FROM users 
        WHERE username = $1
      `, [username]
    );
    
    const user = result.rows[0];
      
    // Check if user exists
    if (user) {
      // Check if user info is valid
      if(await bcrypt.compare(password, user.password)) {
        // Create JWT
        const token = jwt.sign({ username }, SECRET_KEY);
        // Set user's last_login_at
        User.updateLoginTimestamp(user.username)
        // Return JWT
        return token;
      }
    }
   }

  /** Update last_login_at for user */

  static async updateLoginTimestamp(username) { 

    const results = await db.query(
      `UPDATE users 
       SET last_login_at = current_timestamp
       WHERE username = $1
       RETURNING last_login_at
      `, [username]
    );
    
    if (results.rows.length === 0) {
      throw new ExpressError("User doesn't exist", 404);
    }

  }

  /** All: basic info on all users:
   * [{username, first_name, last_name, phone}, ...] */

  static async all() { 
    const results = await db.query(
      `SELECT username, 
              first_name,  
              last_name, 
              phone
       FROM users
       ORDER BY username
      `
    );

    return results.rows;
  }

  /** Get: get user by username
   *
   * returns {username,
   *          first_name,
   *          last_name,
   *          phone,
   *          join_at,
   *          last_login_at } */

  static async get(username) {
    const result = await db.query(
      `SELECT username, 
              first_name,  
              last_name, 
              phone,
              join_at,
              last_login_at
       FROM users 
       WHERE username = $1
      `, [username]
    );

    if (!result.rows[0]) {
      throw new ExpressError("User doesn't exist", 400);
    }

    return result.rows[0];
   }

  /** Return messages from this user.
   *
   * [{id, to_user, body, sent_at, read_at}]
   *
   * where to_user is
   *   {username, first_name, last_name, phone}
   */

  static async messagesFrom(username) {
    const results = await db.query(
      `SELECT id, 
              to_username, 
              body, 
              sent_at, 
              read_at,
              first_name, 
              last_name, 
              phone 
       FROM messages AS m 
       INNER JOIN users AS u 
       ON m.to_username = u.username 
       WHERE m.from_username=$1 
      `, [username]
    );
    
    const messages = results.rows.map(result => ({
      id: result.id,
        body: result.body,
        "sent_at": result.sent_at,
        "read_at": result.read_at,
        "to_user": {
          "username": result.to_username,
          "first_name": result.first_name,
          "last_name": result.last_name,
          "phone": result.phone
        }
    }));
    
    return messages;
  }

  /** Return messages to this user.
   *
   * [{id, from_user, body, sent_at, read_at}]
   *
   * where from_user is
   *   {id, first_name, last_name, phone}
   */

  static async messagesTo(username) {
    const results = await db.query(
      `SELECT id, 
              from_username, 
              body, 
              sent_at, 
              read_at,
              first_name, 
              last_name, 
              phone 
       FROM messages AS m 
       INNER JOIN users AS u 
       ON m.from_username = u.username 
       WHERE m.to_username=$1 
      `, [username]
    );
    
    const messages = results.rows.map(result => ({
      id: result.id,
        body: result.body,
        "sent_at": result.sent_at,
        "read_at": result.read_at,
        "from_user": {
          "username": result.from_username,
          "first_name": result.first_name,
          "last_name": result.last_name,
          "phone": result.phone
        }
    }))
    
    return messages;
  }
}


module.exports = User;