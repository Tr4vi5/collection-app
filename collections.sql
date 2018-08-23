CREATE TABLE "movies" (
	"id" SERIAL PRIMARY KEY,
	"title" varchar (255) not null,
	"description" varchar (255) not null,
	"movie_genres_id" INT REFERENCES "movie_genres",
	"release_date" date not null
);

CREATE TABLE "movie_genres" (
	"id" SERIAL PRIMARY KEY,
	"genre" varchar (255) not null
);

INSERT INTO "movie_genres" ("genre") VALUES 
('Action'),
('Adventure'),
('Animation'),
('Biographical'),
('Comedy'),
('Crime'),
('Documentary'),
('Drama'),
('Epic'),
('Horror'),
('Musical'),
('Mystery'),
('Science Fiction'),
('Silent'),
('Sports'),
('Spy'),
('Thriller'),
('Western'),
('Zombie');

INSERT INTO "movies" ("title", "description", "movie_genres_id", "release_date") VALUES ('Arrival','A story about communication and time','13','2016-11-11');

SELECT "title", "description", "genre", "release_date" FROM "movies" JOIN "movie_genres" ON "movies"."movie_genres_id" = "movie_genres"."id";