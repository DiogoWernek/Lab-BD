SQL Script (WIP)  
CREATE TABLE IF NOT EXISTS orders(  
    id INT PRIMARY KEY AUTO_INCREMENT,  
    table_session_id INT,  
    product_id INT,  
    quantity INT,  
    price FLOAT,  
    created_at DATETIME,  
    updated_at DATETIME  
);  
  
CREATE TABLE IF NOT EXISTS products(  
    id INT PRIMARY KEY AUTO_INCREMENT,  
    name INT,  
    price FLOAT,  
    created_at DATETIME,  
    updated_at DATETIME  
);  
  
CREATE TABLE IF NOT EXISTS tables(  
 id INT PRIMARY KEY AUTO_INCREMENT,  
    table_number INT  
);  
  
CREATE TABLE IF NOT EXISTS tables_sessions(  
    id INT PRIMARY KEY AUTO_INCREMENT,  
    table_id INT,  
    opened_at DATETIME,  
    closed_at TIME  
);  
  
ALTER TABLE orders ADD CONSTRAINT fk_ordr_prdct  
FOREIGN KEY (product_id) REFERENCES products(id);  
  
ALTER TABLE tables_sessions ADD CONSTRAINT fk_sess_table  
FOREIGN KEY (table_id) REFERENCES tables(id);  
  
INSERT INTO tables(table_number) VALUES (1);  
INSERT INTO tables(table_number) VALUES (2);  
INSERT INTO tables(table_number) VALUES (3);  
INSERT INTO tables(table_number) VALUES (4);  
INSERT INTO tables(table_number) VALUES (5);  
INSERT INTO tables(table_number) VALUES (6);  
INSERT INTO tables(table_number) VALUES (7);  
INSERT INTO tables(table_number) VALUES (8);  
INSERT INTO tables(table_number) VALUES (9);  
INSERT INTO tables(table_number) VALUES (10);  
