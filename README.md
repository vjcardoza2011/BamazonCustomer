# BamazonCustomer

## Description

An Amazon-like storefront with the MySQL skills we have learned this unit. The app will take in orders from customers and deplete stock from the store's inventory.

## MySQL Database Requirements

To be able to run this application, MySQL should already be downloaded on your machine. If you do not have my SQL, no worries! Download it here: [https://www.mysql.com/downloads/](https://www.mysql.com/downloads/). Once installed, create the database and table by copying from my file named bamazon.sql and pasting it into a new SQL tab. Then execute (lightning bolt in top left corner) inside mySQL to populate the database. You should then see the Action Output window generate the information.

## Customer Interface

The Customer View allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is able to purchase an existing item by entering the Item ID and quanity. The application will result in error messages if the quantity is out of stock, if the ID is invalid, or if the user does not enter a whole non-zero number for the ID. If the user enters proper information, this application will first display all of the items available for sale which will include the ids, names, and prices of products for sale.

<p>The app then prompts the users with two messages:</p>

- The first message asks the user the Item ID # of the product they would like to buy.
- The second message asks how many units of the product they would like to buy.

<p>Once the customer has placed the order, the application checks if the store has enough of the product to meet the customer's request. If the store has enough of the product, the customer's order is fulfilled as follows:

- The SQL database updates to reflect the remaining quantity.
- Once the update goes through, the total cost of the customer's purchase will be shown.

<p> To run this application, please follow the below steps: </p>

```
    git clone https://github.com/vjcardoza2011/BamazonCustomer.git
    cd BamazonCustomer
    npm install
    node bamazon.js
```

---

#DEMO
