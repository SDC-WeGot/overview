DROP TABLE IF EXISTS restaurants;
CREATE TABLE restaurants (
  _id SERIAL UNIQUE PRIMARY KEY,
  name TEXT NOT NULL,
  tagline TEXT NOT NULL,
  type TEXT NOT NULL,
  vicinity TEXT NOT NULL,
  "priceLevel" NUMERIC(1, 0) NOT NULL,
  "zagatFood" NUMERIC(2, 1) NOT NULL,
  "zagatDecor" NUMERIC(2, 1) NOT NULL,
  "zagatService" NUMERIC(2, 1) NOT NULL,
  "longDescription" TEXT NOT NULL
);