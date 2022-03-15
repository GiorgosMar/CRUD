CREATE DATABASE mydb;

CREATE TABLE employee(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(20),
    lastName VARCHAR(20),
    dateOfBirth DATE,
    afm VARCHAR(9)
);