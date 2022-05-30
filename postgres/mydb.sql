CREATE DATABASE mydb;

\connect mydb;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS employee(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(20),
    lastName VARCHAR(20),
    dateOfBirth DATE,
    afm VARCHAR(9) UNIQUE
);

CREATE TABLE IF NOT EXISTS users(
    user_id UUID DEFAULT
    uuid_generate_v4()
    PRIMARY KEY,
    user_email VARCHAR(50),
    user_password VARCHAR(200)
);

INSERT INTO users(user_email, user_password) VALUES('user@mail.com', 'user');

INSERT INTO employee(firstName, lastName, dateOfBirth, afm) VALUES('Γιώργος', 'Μαρίνος', '01-09-1999', '163694697');
INSERT INTO employee(firstName, lastName, dateOfBirth, afm) VALUES('Γρηγόρης', 'Μαρίνος', '11-14-2000', '163612096');
INSERT INTO employee(firstName, lastName, dateOfBirth, afm) VALUES('Φίλιππος', 'Μαρίνος', '11-14-2000', '163612438');
INSERT INTO employee(firstName, lastName, dateOfBirth, afm) VALUES('Παναγιώτης', 'Αντωνάκος', '11-18-1999', '163643090');
INSERT INTO employee(firstName, lastName, dateOfBirth, afm) VALUES('Νίκος', 'Παρασκευόπουλος', '12-08-1999', '163694643');
INSERT INTO employee(firstName, lastName, dateOfBirth, afm) VALUES('Στέργιος', 'Μαγγούγης', '08-01-1999', '163698065');
INSERT INTO employee(firstName, lastName, dateOfBirth, afm) VALUES('Λάμπρος', 'Παπαντωνίου', '04-14-1999', '189612767');