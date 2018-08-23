CREATE TABLE "movies" (
	"id" SERIAL PRIMARY KEY,
	"title" varchar (255) not null,
	"description" varchar (255) not null,
	"genres_id" INT REFERENCES "genres",
	"release_date" date not null
);

CREATE TABLE "genres" (
	"id" SERIAL PRIMARY KEY,
	"genre" varchar (255) not null
);

INSERT INTO "genres" ("genre") VALUES 
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

INSERT INTO "movies" ("title", "description", "genres_id", "release_date") VALUES ('Arrival','A story about communication and time','13','2016-11-11');