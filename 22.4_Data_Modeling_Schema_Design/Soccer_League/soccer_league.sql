-- drop if database already exists
DROP DATABASE IF EXISTS soccer_league;

-- create database
CREATE DATABASE soccer_league;

-- connect to database
\c soccer_league;

-- create teams table
CREATE TABLE teams (
  team_id SERIAL PRIMARY KEY,
  team_name TEXT NOT NULL
);

-- create players table 
CREATE TABLE players (
  player_id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  current_team INTEGER REFERENCES teams(team_id)
);

-- create referees table 
CREATE TABLE referees (
  referee_id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL
);

-- create seasons table
CREATE TABLE seasons (
  season_id SERIAL PRIMARY KEY,
  season_name TEXT NOT NULL,
  start_date TEXT NOT NULL,
  end_date TEXT NOT NULL
);

-- create matches table
CREATE TABLE matches (
  match_id SERIAL PRIMARY KEY,
  season_id INTEGER REFERENCES seasons(season_id),
  team1 INTEGER REFERENCES teams(team_id),
  team2 INTEGER REFERENCES teams(team_id),
  referee INTEGER REFERENCES referees(referee_id)
);

-- create goals table
CREATE TABLE goals (
  goal_id SERIAL PRIMARY KEY,
  match_id INTEGER REFERENCES matches(match_id),
  player_id INTEGER REFERENCES players(player_id)
);

-- create results table
CREATE TABLE results (
  result_id SERIAL PRIMARY KEY,
  team_id INTEGER REFERENCES teams(team_id),
  match_id INTEGER REFERENCES matches(match_id),
  points INTEGER NOT NULL
);

-- insert 4 teams into teams table
INSERT INTO teams (team_name)
VALUES
('Barcelona'),
('Real Madrid'),
('Manchester City'),
('Bayern Munich');

-- insert 4 Players into players table
INSERT INTO players (first_name, last_name, current_team)
VALUES
('Lionel', 'Messi', 1),
('Eden', 'Hazard', 2),
('Kevin', 'De Bruyne', 3),
('Robert', 'Lewandowski', 4);

-- insert 3 referees into referees table
INSERT INTO referees (first_name, last_name)
VALUES
('Mark', 'Geiger'),
('Felix', 'Brych'),
('Alain', 'Hamer');

-- insert 1 season into seasons table
INSERT INTO seasons (season_name, start_date, end_date)
VALUES
('Champions League', 'September-15', 'May-15');

-- insert 4 matches into matches table
INSERT INTO matches (season_id, team1, team2, referee)
VALUES
('1', '1', '2', '1'),
('1', '1', '4', '2'),
('1', '2', '3', '3'),
('1', '3', '4', '2');

-- insert goals into goals table
INSERT INTO goals (match_id, player_id)
VALUES
('1','1'),
('2','1'),
('3', '2'),
('3', '3'),
('4', '3'),
('4', '4');

-- insert match results into results table
INSERT INTO results (team_id, match_id, points)
VALUES
('1', '1', 3),
('2', '1', 0),
('1', '2', 3),
('4', '2', 0),
('2', '3', 1),
('3', '3', 1),
('3', '4', 1),
('4', '4', 1);

