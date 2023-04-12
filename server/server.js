const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ima",
});

con.connect((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Connection successful");
  }
});

const corsOptions = {
  origin: "http://localhost:3000/",
  optionsSuccessStatus: 200,
};

app.post("/addproducts", (req, res) => {
  console.log("start");
  const product_name = req.body.product_name;
  const sku = req.body.sku;
  const product_type = req.body.product_type;
  const product_description = req.body.product_description;
  const cost = req.body.cost;
  const price = req.body.price;
  const purchase = req.body.purchase;
  const sales = req.body.sales;
  console.log("start2");

  let sql =
    "INSERT INTO products (id, product_name, sku,product_type, product_description, cost, price, purchase, sales) VALUES ('" +
    "" +
    ",";
  product_name +
    "', '" +
    sku +
    "," +
    product_type +
    "', '" +
    product_description +
    "', '" +
    cost +
    "', '" +
    price +
    "', '" +
    purchase +
    "', '" +
    sales +
    "')";
  console.log("start3");

  con.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      console.log("error");
      return res.status(500).json({ error: err });
    } else {
      console.log("Added Successfully");
      return res.status(200).json({ message: "Added Successfully" });
    }
  });
});

port = 5555;
app.listen(port, () => {
  console.log("-----Server started on port " + port + "-----");
});
