CREATE DATABASE mydb;

CREATE TABLE employee(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(20),
    lastName VARCHAR(20),
    dateOfBirth DATE,
    afm VARCHAR(9) UNIQUE
);

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
    user_id UUID DEFAULT
    uuid_generate_v4()
    PRIMARY KEY,
    user_email VARCHAR(50),
    user_password VARCHAR(200)
);

INSERT INTO users(user_email, user_password) VALUES('user@mail.com', '$2a$10$iOzRv4805tdFMmeMcsmrbO.1gIcYe8Z6VvyR5VVQJmNO55helPE2G');