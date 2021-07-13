# CryptoX

## About the Project

CryptoX is a cryptocurrency website that displays market information for cryptocurrencies. Market information can be viewed for the span of last 24 hours, 7 day and 1 year to get a better understanding of market trends. All market information is accessible to the public, however, logged in users are able to create a watchlist and a portfolio.

The main cryptocurrency table with market information for each cryptocurrency is displayed on the homepage.
  
<p align="center">
  <img src="https://raw.githubusercontent.com/alexgenc/springboard-bootcamp/master/50_Capstone_Project_2/frontend/public/Images/CurrencyTable.JPG" width=800>
</p>
  
Users can click on a specific cryptocurrency from this main cryptocurrency table to view more information on each cryptocurrency. On each cryptocurrency page, there is a chart that displays the price information for the last 24 hours, 7 days, and 1 year.

<p align="center">
  <img src="https://raw.githubusercontent.com/alexgenc/springboard-bootcamp/master/50_Capstone_Project_2/frontend/public/Images/CurrencyChart.JPG" width=800>
</p>

A summary of the most important latest market information for each currency is also displayed in a table below the price chart.

<p align="center">
  <img src="https://raw.githubusercontent.com/alexgenc/springboard-bootcamp/master/50_Capstone_Project_2/frontend/public/Images/MarketInformation.JPG" width=800>
</p>
 
Users can add cryptocurrencies to their watchlist to view prices and price changes for the last 24 hours for specific cryptocurrencies. Watchlist is used for keeping track of cryptocurrencies that are not in a user's portfolio, but maybe the user is thinking of purchasing it in the near future.
  
  <p align="center">
    <img src="https://raw.githubusercontent.com/alexgenc/springboard-bootcamp/master/50_Capstone_Project_2/frontend/public/Images/Watchlist.JPG" width=800>
  </p>
  
Users can also add cryptocurrencies to their portfolio. These cryptocurrencies should be the cryptocurrencies that are already owned by the user. As a user buys and sells the cryptocurrencies in their portfolio, they should update the quantities of each cryptocurrency to have an accurate estimate of their current portfolio value.

  <p align="center">
    <img src="https://raw.githubusercontent.com/alexgenc/springboard-bootcamp/master/50_Capstone_Project_2/frontend/public/Images/Portfolio.JPG" width=800>
  </p>
 
## Features

- Sign Up
- Sign In
- Main cryptocurrency page / Homepage
- Specific cryptocurrency page / historical data / latest market information
- Add/remove cryptocurrencies to watchlist (for logged in users)
- Add/remove cryptocurrencies and quantities to portfolio (for logged in users)
- Profile and settings page (for logged in users)

## Folder Structure 

```sh
CryptoX/
├──frontend
    ├── api            # Reusabble backend and API access methods
    ├── auth           # Authorization and authentication
    ├── chartConfigs   # Reusabble chart configurations
    ├── common         # Common app data and parts
    ├── components     # Reusabble parts
    ├── context        # Global state layer
    ├── hooks          # React custom hooks
    ├── pages          # Application views
    ├── routes-nav     # Routes and navigation setups
    ├── utils          # Utility functions
├──backend
    ├── helpers        # Reusabble helper functions
    ├── middleware     # Convenience middleware 
    ├── models         # Model setups
    ├── routes         # Route setups
    ├── schemas        # Schema configurations
```


## Built With

The coding languages, frameworks, and libraries that were used on this project:

Frontend
* [Javascript](https://www.javascript.com/)
* [React](https://reactjs.org/)
* [Material-UI](https://material-ui.com/)
* [Bootstrap](https://getbootstrap.com/)
* HTML
* CSS
* [Axios](https://www.npmjs.com/package/axios)

Backend
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [Node-PostgreSQL](https://node-postgres.com/)
* [JSON Schema](https://json-schema.org/)
* [bcrypt](https://www.npmjs.com/package/bcrypt)

## How to Run the Project

To get a local copy up and running follow these steps:

### Clone Repos

1. Clone the frontend repo repo to a separate directory by going to [https://github.com/alexgenc/cryptox-frontend](https://github.com/alexgenc/cryptox-frontend). From there, click Download Zip again from the green Code button at the top of the page or enter the following in a separate directory in your terminal:
  
   ```sh
   git clone https://github.com/alexgenc/cryptox-frontend.git
   ```
2. Clone the backend repo to a separate directory by going to [https://github.com/alexgenc/cryptox-backend](https://github.com/alexgenc/cryptox-backend). From there, click Download Zip again from the green Code button at the top of the page or enter the following in a separate directory in your terminal:
   
   ```sh
   git clone https://github.com/alexgenc/cryptox-backend.git
   ```

### Library Installations

3. After cloning each repo (and unzipping if downloaded), install the libraries in each frontend and backend repo.

    ```sh
    npm install
    ```

### Postgres Installation

4. Install [Postgres](https://www.postgresql.org/).

5. Create a database named "cryptox" in your terminal in the backend directory.
    
    ```sh
    createdb cryptox
    ```

### Seed Data to Database 

6. Run the following command in your terminal in the backend directory to create the database tables and seed products to database.
    
    ```sh
    psql -f cryptox.sql
    ```

7. Start servers in both frontend and backend directories and you are done!
    
    ```sh
    npm start
    ```

## API

Almost all cryptocurrency APIs have extremely low daily and monthly credit limits, and because of that, it's very easy to exhaust your credit supply as a developer on a free development plan. For this reason, I've used 2 different cryptocurency APIs to gather data for my project.

- CoinMarketCap - Used for main cryptocurrency table on the homepage. - https://pro.coinmarketcap.com/
- CoinGecko - Used for gathering historical data and market information on each cryptocurrency page as well as prices of cryptocurrencies on the watchlist and the portfolio. - https://www.coingecko.com/en

Since 2 different APIs are used to gather information, sometimes the prices on the cryptocurrency table displayed on the homepage and the prices of cryptocurrencies on the watchlist and portfolio might be slightly different.

## Potential Feature Ideas

- Forgot password
- Reset password
- Email verification
- Cryptocurrency Search
- Live notifications

## Contact

Alex Genc - alexgenc@gmail.com - [Linkedin](https://www.linkedin.com/in/alexgenc/)

Project Links: <br/>
[Frontend Repo](https://github.com/alexgenc/cryptox-frontend) <br/>
[Backend Repo](https://github.com/alexgenc/cryptox-backend)
