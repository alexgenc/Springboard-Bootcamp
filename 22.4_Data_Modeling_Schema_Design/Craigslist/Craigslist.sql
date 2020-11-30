-- drop if database already exists
DROP DATABASE IF EXISTS craigslist;

-- create database
CREATE DATABASE craigslist;

-- connect to database
\c craigslist;

-- create regions table
CREATE TABLE regions (
  region_id SERIAL PRIMARY KEY,
  region_name TEXT NOT NULL
);

-- create categories table
CREATE TABLE categories (
  category_id SERIAL PRIMARY KEY,
  category_name TEXT NOT NULL
);

-- create users table
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  preferred_region INTEGER REFERENCES regions(region_id)
);

-- create posts table
CREATE TABLE posts (
  post_id SERIAL PRIMARY KEY,
  category_id INTEGER REFERENCES categories,
  post_title TEXT NOT NULL,
  post_body TEXT NOT NULL,
  post_owner INTEGER REFERENCES users(user_id),
  post_location TEXT NOT NULL,
  post_region INTEGER REFERENCES regions(region_id)
);

-- insert 3 regions into regions table
INSERT INTO regions (region_name)
VALUES
('Milwaukee'),
('Chicago'),
('Madison');

-- insert 3 categories into categories table
INSERT INTO categories (category_name)
VALUES
('Furniture'),
('Free'),
('Electronics');

-- insert 3 users into users table
INSERT INTO users (username, preferred_region)
VALUES
('Hithere123', '2' ),
('HandsomeBoy', '3'),
('happy444', '1');

-- insert 3 posts into posts table
INSERT INTO posts (category_id, post_title, post_body, post_owner, post_location, post_region)
VALUES
('1', 'King Size Bed Barely Used', '$499. Final Price.', '2', 'Not sure', '3'),
('3', 'iPhoneX', 'IN OK Condition. Shoot me an offer.', '1', 'Not sure', '2'),
('2', 'Free Chair', 'Free!!! Come get it quick.', '3', 'Not sure', '1');



