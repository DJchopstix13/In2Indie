--Jonathan Piatos
--In2Indie PostgreSQL Data modeling

CREATE DATABASE in2indieDB;

CREATE TABLE USER(
    user_id      varchar(36)    NOT NULL,
    username     varchar(36)    NOT NULL,
    user_type    varchar(36)    NOT NULL,
    name         varchar(36)    NOT NULL,
    email        varchar(36)    NOT NULL,
    picture      varchar(36)    NOT NULL
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

CREATE INDEX USER_ID ON USER(user_id);
CREATE INDEX PRODUCT_ID ON PRODUCT(product_id);
CREATE INDEX TRANSACTION_ID ON TRANSACTION(transaction_id);
CREATE INDEX PRODUCT_ID_FK ON INVENTORY(product_id);

