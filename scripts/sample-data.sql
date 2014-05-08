--Sample Data for In2Indie's PostgreSQL Database--

INSERT INTO "Users" (username, password, user_id, user_type, name, email) VALUES ('jpiatos13', 'lawdome1312', 'jpiatos13131313', 'admin', 'Jonathan Piatos', 'jpiatos13@gmail.com');
INSERT INTO "Users" (username, password, user_id, user_type, name, email) VALUES ('djokernole', 'nolenole22', 'djokernole9810383', 'In2Indie Uploader', 'Novak Djokovic', 'djokernole@yahoo.com');
INSERT INTO "Users" (username, password, user_id, user_type, name, email) VALUES ('kbryant24', 'lakerlegend24', 'kbryant130919342', 'community', 'Kobe Bryant', 'kbryant24@lakers.com');
INSERT INTO "Users" (username, password, user_id, user_type, name, email) VALUES ('green-arrow', 'mynameisoliverqueen', 'green-arrow134122', 'In2Indie Uploader', 'Oliver Queen', 'green-arrow@queensconsolidated.com');
INSERT INTO "Products" (product_name, product_type, product_id, product_price, product_available) VALUES ('cubior', 'games', 'cubior02983431', 9.99, true);
INSERT INTO "Products" (product_name, product_type, product_id, product_price, product_available) VALUES ('In2Indie logo', 'movie', 'in2indie32342343', 0.99, true);
INSERT INTO "Products" (product_name, product_type, product_id, product_price, product_available) VALUES ('Radioactive by Imagine Dragons', 'music', 'radioactive130493123', 0.99, true);
INSERT INTO "Products" (product_name, product_type, product_id, product_price, product_available) VALUES ('Grand Theft Auto V', 'games', '00001', 39.99, true);
INSERT INTO "Products" (product_name, product_type, product_id, product_price, product_available) VALUES ('FIFA 14', 'games', '00002', 29.99, true);
INSERT INTO "Products" (product_name, product_type, product_id, product_price, product_available) VALUES ('Scary Monsters and Nice Sprites by Skrillex', 'music', '00011', 0.99, true);
INSERT INTO "Products" (product_name, product_type, product_id, product_price, product_available) VALUES ('I Know You Want Me by Pitbull', 'music', '00012', 0.50, true);
INSERT INTO "Products" (product_name, product_type, product_id, product_price, product_available) VALUES ('The Shawshank Redemption', 'movies', '00021', 9.99, true);
INSERT INTO "Products" (product_name, product_type, product_id, product_price, product_available) VALUES ('The Dark Knight', 'movies', '00022', 12.99, True);
INSERT INTO "Inventories" (product_id, transaction_id, product_available) VALUES ('cubior02983431', 0001, true);
INSERT INTO "Inventories" (product_id, transaction_id, product_available) VALUES ('in2indie32342343', 0002, true);
INSERT INTO "Inventories" (product_id, transaction_id, product_available) VALUES ('radioactive130493123', 0003, true);
INSERT INTO "Transactions" (transaction_id, user_id, product_id) VALUES (0001, 'djokernole9810383', 'cubior02983431');
INSERT INTO "Transactions" (transaction_id, user_id, product_id) VALUES (0002, 'jpiatos13131313', 'in2indie32342343');
INSERT INTO "Transactions" (transaction_id, user_id, product_id) VALUES (0003, 'kbryant130919342', 'radioactive130493123'); 
