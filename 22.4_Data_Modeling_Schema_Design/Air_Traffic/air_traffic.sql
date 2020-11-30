DROP DATABASE IF EXISTS air_traffic;

CREATE DATABASE air_traffic;

\c air_traffic


CREATE TABLE airlines (
  airline_id SERIAL PRIMARY KEY,
  airline_name TEXT UNIQUE NOT NULL
);

CREATE TABLE countries (
  country_id SERIAL PRIMARY KEY,
  country_name TEXT UNIQUE NOT NULL
);

CREATE TABLE cities (
  city_id SERIAL PRIMARY KEY,
  city_name TEXT UNIQUE NOT NULL
);

CREATE TABLE customers (
  customer_id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL
);

CREATE TABLE tickets (
  ticket_id SERIAL PRIMARY KEY,
  customer_id INTEGER REFERENCES customers(customer_id),
  airline_id INTEGER REFERENCES airlines(airline_id),
  from_city INTEGER REFERENCES cities(city_id),
  from_country INTEGER REFERENCES countries(country_id),
  to_city INTEGER REFERENCES cities(city_id),
  to_country INTEGER REFERENCES countries(country_id),
  seat TEXT NOT NULL,
  departure TIMESTAMP NOT NULL,
  arrival TIMESTAMP NOT NULL
);

INSERT INTO airlines (airline_name)
VALUES
('United'),
('British Airways'),
('Delta'),
('TUI Fly Belgium'),
('Air China'),
('American Airlines'),
('Avianca Brasil');

INSERT INTO cities (city_name)
VALUES
('Washington DC'),
('Tokyo'),
('Los Angeles'),
('Seattle'),
('Paris'),
('Dubai'),
('New York'),
('Cedar Rapids'),
('Charlotte'),
('Sao Paolo'),
('Las Vegas'),
('Mexico City'),
('London');

INSERT INTO countries (country_name)
VALUES
('United States'),
('Japan'),
('France'),
('UAE'),
('Brazil'),
('United Kingdom'),
('Mexico'),
('Morocco'),
('China'),
('Chile');

INSERT INTO customers (first_name, last_name)
VALUES
('Jennifer', 'Finch'),
('Thadeus', 'Gathercoal'),
('Sonja', 'Pauley'),
('Jennifer', 'Finch'),
('Waneta', 'Skeleton');

INSERT INTO tickets
  (customer_id, seat, departure, arrival, airline_id, from_city, from_country, to_city, to_country)
VALUES
  ('1', '33B', '2018-04-08 09:00:00', '2018-04-08 12:00:00', '1', '1', '1', '4', '1'),
  ('2', '8A', '2018-12-19 12:45:00', '2018-12-19 16:15:00', '2', '2', '2', '13', '6'),
  ('3', '12F', '2018-01-02 07:00:00', '2018-01-02 08:03:00', '3', '3', '1', '11', '1'),
  ('4', '20A', '2018-04-15 16:50:00', '2018-04-15 21:00:00', '3', '4', '1', '12', '7'),
  ('5', '23D', '2018-08-01 18:30:00', '2018-08-01 21:50:00', '4', '5', '3', '6', '4');
