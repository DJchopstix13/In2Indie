--Jonathan Piatos
--In2Indie PostgreSQL Data modeling

--Create Database
CREATE DATABASE in2indieDB;

--Create Tables
CREATE TABLE USER(
    user_id      varchar(36)    NOT NULL,
    username     varchar(36)    NOT NULL,
    user_type    varchar(36)    NOT NULL,
    name         varchar(36)    NOT NULL,
    email        varchar(36)    NOT NULL,
    picture      varchar(36)    NOT NULL
);

CREATE TABLE INDIE_UPLOADER(
    user_id      varchar(36)    NOT NULL REFERENCES USER(user_id),
    username     varchar(36)    NOT NULL REFERENCES USER(username),
    user_type    varchar(36)    NOT NULL REFERENCES USER(user_type),
    email        varchar(36)    NOT NULL REFERENCES USER(email)
);

CREATE TABLE COMMUNITY(
    user_id      varchar(36)    NOT NULL REFERENCES USER(user_id),
    username     varchar(36)    NOT NULL REFERENCES USER(username),
    user_type    varchar(36)    NOT NULL REFERENCES USER(user_type),
    email        varchar(36)    NOT NULL REFERENCES USER(email)
);

CREATE TABLE PRODUCT(
    product_id           varchar(36)    NOT NULL,
    product_name         varchar(36)    NOT NULL,
    product_type         varchar(36)    NOT NULL,
    product_price        varchar(36)    NOT NULL,
    product_available    varchar(36)    NOT NULL
);

CREATE TABLE TRANSACTION(
    transaction_id    varchar(36)    NOT NULL,
    user_id           varchar(36)    NOT NULL,
    product_id        varchar(36)    NOT NULL
);

CREATE TABLE INVENTORY(
    product_id           varchar(36)    NOT NULL,
    product_name         varchar(36)    NOT NULL,
    product_available    varchar(36)    NOT NULL
);

--Creating Indexes
CREATE INDEX USER_ID ON USER(user_id);
CREATE INDEX PRODUCT_ID ON PRODUCT(product_id);
CREATE INDEX TRANSACTION_ID ON TRANSACTION(transaction_id);
CREATE INDEX PRODUCT_ID_FK ON INVENTORY(product_id);

--Assigning Primary Keys
ALTER TABLE USER ADD
    PRIMARY KEY(user_id);
ALTER TABLE PRODUCT ADD
    PRIMARY KEY(product_id);
ALTER TABLE TRANSACTION
    PRIMARY KEY(transaction_id);
ALTER TABLE INVENTORY
    PRIMARY KEY(product_id);

--Creating Foreign key
ALTER TABLE TRANSACTION ADD CONSTRAINT 
    FOREIGN KEY(user_id) REFERENCES USER;
    FOREIGN KEY(product_id) REFERENCES PRODUCT;

ALTER TABLE INDIE_UPLOADER ADD CONSTRAINT
    FOREIGN KEY(user_id) REFERENCES USER;
    FOREIGN KEY(username) REFERENCES USER;  
    FOREIGN KEY(user_type) REFERENCES USER;
    FOREIGN KEY(email) REFERENCES USER;

ALTER TABLE COMMUNITY ADD CONSTRAINT
    FOREIGN KEY(user_id) REFERENCES USER;
    FOREIGN KEY(username) REFERENCES USER;
    FOREIGN KEY(user_type) REFERENCES USER;
    FOREIGN KEY(email) REFERENCES USER;

ALTER TABLE PRODUCT ADD CONSTRAINT
    FOREIGN KEY(product_available) REFERENCES INVENTORY;

ALTER TABLE INVENTORY ADD CONSTRAINT
    FOREIGN KEY(product_id) REFERENCES PRODUCT;
    FOREIGN KEY(transaction_id) REFERENCES TRANSACTION;

ALTER TABLE TRANSACTION ADD CONSTRAINT
    FOREIGN KEY(product_id) REFERENCES PRODUCT;
    FOREIGN KEY(user_id) REFERENCES USER;


