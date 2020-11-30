-- drop if database already exists
DROP DATABASE IF EXISTS medical_center;

-- create database
CREATE DATABASE medical_center;

-- connect to database
\c medical_center;

-- create doctors table
CREATE TABLE doctors (
  doctor_id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL
);

-- create patients table
CREATE TABLE patients (
  patient_id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL
);

-- create diseases table
CREATE TABLE diseases (
  disease_id SERIAL PRIMARY KEY,
  disease_name TEXT NOT NULL
);

-- create visits table
CREATE TABLE visits (
  visit_id SERIAL PRIMARY KEY,
  doctor_id INTEGER REFERENCES doctors,
  patient_id INTEGER REFERENCES patients
);

-- create diagnoses table
CREATE TABLE diagnoses (
  diagnoses_id SERIAL PRIMARY KEY,
  visit_id INTEGER REFERENCES visits,
  disease_id INTEGER REFERENCES diseases
);

-- insert 3 doctors into doctors table
INSERT INTO doctors (first_name, last_name)
VALUES 
('Captain', 'America'),
('Cristiano', 'Ronaldo'),
('Jack', 'Sparrow');

-- insert 3 patients into patients table
INSERT INTO patients (first_name, last_name)
VALUES 
('Thor', 'God-of-Thunder'),
('Michael', 'Jordan'),
('Amadeus', 'Mozart');

-- insert 3 diseases into diseases table
INSERT INTO diseases (disease_name)
VALUES 
('Asthma'),
('Diabetes'),
('Heart Disease');

-- insert 3 visits into visits table
INSERT INTO visits (doctor_id, patient_id)
VALUES 
('1', '3'),
('2', '1'),
('3', '2');

-- insert 3 diagnoses into diagnoses table
INSERT INTO diagnoses (visit_id, disease_id)
VALUES 
('1', '3'),
('2', '2'),
('3', '1');

