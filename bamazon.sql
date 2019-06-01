CREATE DATABASE bamazonCustomer_db;
USE bamazonCustomer_db;

-- Create a table called 'products' 
CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

-- Inserts the data into the 'products' table --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Loreal Mascara', 'Cosmetics', 5.75, 400),
		('Loreal Highlighter', 'Cosmetics', 6.25, 325),
		('Mrs. Bairds Bread', 'Grocery', 1.99, 600),
		('Charmin Toilet Paper', 'Grocery', 4.25, 400),
		('Dole Pineapples', 'Produce', 0.99, 300),
		('SunnyD Orange Juice', 'Grocery', 4.99, 200),
		('Baseball Bat', 'Sports', 19.99, 50),
		('Nike Hat', 'Clothing', 24.99, 150),
		('Tylenol', 'Pharmacy', 3.99, 700),
		('Blue Bell Ice Cream', 'Grocery', 2.99, 250);