// Pull in required dependencies... must install
var inquirer = require("inquirer");
var mysql = require("mysql");

// Define the MySQL connection parameters
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Valval12!",
  database: "bamazonCustomer_db"
});

// validateInput makes sure that the user is supplying only positive integers for their inputs
function validateInput(value) {
  var integer = Number.isInteger(parseFloat(value));
  var sign = Math.sign(value);

  if (integer && sign === 1) {
    return true;
  } else {
    return "Please enter a whole non-zero number.";
  }
}

// promptUserPurchase will prompt the user for the item/quantity they want to purchase
function promptUserPurchase() {
  // Prompts the user to select an item
  inquirer
    .prompt([
      {
        type: "input",
        name: "item_id",
        message: "Please enter the Item ID which you would like to purchase.",
        validate: validateInput,
        filter: Number
      },
      {
        type: "input",
        name: "quantity",
        message: "How many do you need?",
        validate: validateInput,
        filter: Number
      }
    ])
    .then(function(input) {
      var item = input.item_id;
      var quantity = input.quantity;

      // Query db to confirm that the given item ID exists in the desired quantity
      var queryStr = "SELECT * FROM products WHERE ?";

      connection.query(queryStr, { item_id: item }, function(err, data) {
        if (err) throw err;

        // If the user has selected an invalid item ID, data will be empty

        if (data.length === 0) {
          console.log("ERROR: Invalid Item ID. Please select a valid Item ID.");
          displayInventory();
        } else {
          var productData = data[0];

          // If statement that checks if the quantity requested by the user is in stock
          if (quantity <= productData.stock_quantity) {
            console.log(
              "Congratulations, the product you requested is in stock! Placing order!"
            );

            // Construct the updating query string
            var updateQueryStr =
              "UPDATE products SET stock_quantity = " +
              (productData.stock_quantity - quantity) +
              " WHERE item_id = " +
              item;

            // Update the inventory
            connection.query(updateQueryStr, function(err, data) {
              if (err) throw err;
              // Prints to console if order has bee placed correctly
              console.log(
                "Your order has been placed! Your total is $" +
                  productData.price * quantity
              );
              console.log("Thank you for shopping with us!");
              console.log(
                "\n---------------------------------------------------------------------\n"
              );

              // Ends the database connection
              connection.end();
            });
          } else {
            // Will print to console if there isn't enough product in stock
            console.log(
              "Sorry, there is not enough product in stock, your order can not be placed as is."
            );
            console.log("Please modify your order.");
            console.log(
              "\n---------------------------------------------------------------------\n"
            );

            displayInventory();
          }
        }
      });
    });
}

// displayInventory will retrieve the current inventory from the database and output it to the console
function displayInventory() {
  // Construct the db query string
  queryStr = "SELECT * FROM products";

  // Make the db query
  connection.query(queryStr, function(err, data) {
    if (err) throw err;

    console.log("Existing Inventory: ");
    console.log("...................\n");

    var strOut = "";
    for (var i = 0; i < data.length; i++) {
      strOut = "";
      strOut += "Item ID: " + data[i].item_id + "  //  ";
      strOut += "Product Name: " + data[i].product_name + "  //  ";
      strOut += "Department: " + data[i].department_name + "  //  ";
      strOut += "Price: $" + data[i].price + "\n";

      console.log(strOut);
    }

    console.log(
      "---------------------------------------------------------------------\n"
    );

    //Prompts the user for item/quantity they would like to purchase
    promptUserPurchase();
  });
}

// runBamazon will execute the main application logic
function runBamazon() {
  // Displays the available inventory
  displayInventory();
}

// Runs the application logic
runBamazon();
