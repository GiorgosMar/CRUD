CREATE DATABASE greek WITH ENCODING 'UTF-8' LC_COLLATE='el_GR.utf8' LC_CTYPE='el_GR.utf8' TEMPLATE=template0;

CREATE TABLE employee(
    Id SERIAL PRIMARY KEY,
    Fname VARCHAR(20),
    Lname VARCHAR(20),
    Date_of_birth DATE,
    Afm VARCHAR(9)
);