DROP DATABASE IF EXISTS outer_space;

CREATE DATABASE outer_space;

\c outer_space

CREATE TABLE galaxies (
  galaxy_id SERIAL PRIMARY KEY,
  galaxy_name TEXT UNIQUE NOT NULL
);

CREATE TABLE planets (
  planet_id SERIAL PRIMARY KEY,
  planet_name TEXT UNIQUE NOT NULL
);

CREATE TABLE moons (
  moon_id SERIAL PRIMARY KEY,
  moon_name TEXT UNIQUE NOT NULL
);

CREATE TABLE orbits_around (
  orbittedaround_id SERIAL PRIMARY KEY,
  orbittedaround_name TEXT UNIQUE NOT NULL
);

CREATE TABLE planet_info (
  info_id SERIAL PRIMARY KEY,
  planet INTEGER REFERENCES planets(planet_id),
  galaxy INTEGER REFERENCES galaxies(galaxy_id),
  orbits_around INTEGER REFERENCES orbits_around(orbittedaround_id),
  orbital_period_in_years FLOAT, 
  moon1 INTEGER REFERENCES moons(moon_id),
  moon2 INTEGER REFERENCES moons(moon_id),
  moon3 INTEGER REFERENCES moons(moon_id)
);

INSERT INTO planets (planet_name)
VALUES
('Earth'),
('Mars'),
('Venus'),
('Neptune'),
('Proxima Centauri'),
('Gliese 876 b');

INSERT INTO galaxies (galaxy_name)
VALUES
('Milky Way');

INSERT INTO moons (moon_name)
VALUES
('The Moon'),
('Phobos'),
('Deimos'),
('Naiad'),
('Thalassa'),
('Despina');

INSERT INTO orbits_around (orbittedaround_name)
VALUES
('The Sun'),
('Proxima Centauri'),
('Gliese 876');

INSERT INTO planet_info (planet, galaxy, orbits_around, orbital_period_in_years, moon1, moon2, moon3)
VALUES
  ('1', '1', '1', 1.00, '1', NULL, NULL),
  ('2', '1', '1', 1.88,  '2', '3', NULL),
  ('3', '1', '1', 0.62, NULL, NULL, NULL),
  ('4', '1', '1', 164.8, '4', '5', '6'),
  ('5', '1', '2', 0.03, NULL, NULL, NULL),
  ('6', '1', '3', 0.23, NULL, NULL, NULL);