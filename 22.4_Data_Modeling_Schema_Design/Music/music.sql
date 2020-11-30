-- from the terminal run:
-- psql < music.sql

DROP DATABASE IF EXISTS music;

CREATE DATABASE music;

\c music


CREATE TABLE albums (
  album_id SERIAL PRIMARY KEY,
  album_name TEXT NOT NULL
);

CREATE TABLE artists (
  artist_id SERIAL PRIMARY KEY,
  artist_name TEXT NOT NULL
);

CREATE TABLE producers (
  producer_id SERIAL PRIMARY KEY,
  producer_name TEXT NOT NULL
);

CREATE TABLE songs (
  song_id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  artist1_id INTEGER REFERENCES artists(artist_id),
  artist2_id INTEGER REFERENCES artists(artist_id),
  album_id INTEGER REFERENCES albums(album_id),
  producer1_id INTEGER REFERENCES producers(producer_id),
  producer2_id INTEGER REFERENCES producers(producer_id),
  duration_in_seconds INTEGER NOT NULL,
  release_date DATE NOT NULL
);

INSERT INTO albums (album_name)
VALUES
('Middle of Nowhere'),
('A Night at the Opera'),
('Daydream'),
('A Star Is Born'),
('Silver Side Up'),
('The Blueprint 3'),
('Prism'),
('Hands All Over'),
('Let Go'),
('The Writing''s on the Wall');

INSERT INTO artists (artist_name)
VALUES
('Hanson'),
('Queen'),
('Mariah Cary'),
('Boyz II Men'),
('Lady Gaga'),
('Bradley Cooper'),
('Nickelback'),
('Jay Z'),
('Alicia Keys'),
('Katy Perry'),
('Juicy J'),
('Maroon 5'),
('Christina Aguilera'),
('Avril Lavigne'),
('Destiny''s Child');

INSERT INTO producers (producer_name)
VALUES
('Dust Brothers'),
('Stephen Lironi'),
('Roy Thomas Baker'),
('Walter Afanasieff'),
('Benjamin Rice'),
('Rick Parashar'),
('Al Shux'),
('Max Martin'),
('Cirkut}'),
('Shellback'),
('Benny Blanco'),
('The Matrix'),
('Darkchild');


INSERT INTO songs (title, artist1_id, artist2_id, album_id, producer1_id, producer2_id, duration_in_seconds, release_date)
VALUES
('MMMBop', '1', NULL, '1', '1', '2', 238, '04-15-1997'),
('Bohemian Rhapsody', '2', NULL, '2', '3', NULL, 355, '10-31-1975');
