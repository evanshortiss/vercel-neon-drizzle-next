CREATE TABLE IF NOT EXISTS "elements" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"symbol" varchar(3) NOT NULL,
	"atomic_number" integer NOT NULL
);
