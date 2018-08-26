CREATE TABLE "movies" (
	"id" SERIAL PRIMARY KEY,
	"title" varchar (255) not null,
	"description" varchar (255) not null,
	"rating" varchar (255) not null,
	"director" varchar (255) not null,
	"writers" varchar (255) not null,
	"starring" varchar (255) not null,
	"movie_genres_id" INT REFERENCES "movie_genres",
	"image_path" varchar (255) not null,
	"runtime" INT not null,
	"budget" INT not null,
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

-- Add a movie
INSERT INTO "movies" ("title", "description", "rating", "director", "writers", "starring", "movie_genres_id", "image_path", "runtime", "budget", "release_date") VALUES ('Arrival','A linguist is recruited by the military to communicate with alien lifeforms after twelve mysterious spacecrafts land around the world.','PG-13','Denis Villeneuve','Eric Heisserer, Ted Chiang','Amy Adams, Jeremy Renner, Forest Whitaker','13','http://www.impawards.com/2016/posters/arrival.jpg','116','47000000','2016-11-11');
-- Get all movies
SELECT "movies"."id" as "id", "title", "description", "rating", "director", "writers", "starring", "genre", "image_path", "runtime", "budget", "release_date" FROM "movies" JOIN "movie_genres" ON "movies"."movie_genres_id" = "movie_genres"."id";
-- Remove a movie
DELETE FROM "movies" WHERE "id" = $1;
-- Get all genres & movie count
SELECT "genre", "movie_genres"."id" as "id", COUNT("movies"."movie_genres_id") FROM "movie_genres" LEFT JOIN "movies" ON "movie_genres"."id" = "movies"."movie_genres_id" GROUP BY "genre", "movie_genres"."id" ORDER BY "genre";
-- Get all genres for the form
SELECT * FROM "movie_genres" ORDER BY "genre";
-- Add a genre
INSERT INTO "movie_genres" ("genre") VALUES ($1);
-- Remove a genre
DELETE FROM "movie_genres" WHERE "id" = $1;