//create an empty array to hold the two json strings/objects
var array=[];

//load the categories.json
var categories = new XMLHttpRequest();

categories.addEventListener("load", pushCategories);

function pushCategories(){
  array.push(JSON.parse(categories.responseText));
  console.log(array);
}

categories.open("GET", "categories.json");
categories.send();

//load the products.json
var products = new XMLHttpRequest();

products.addEventListener("load", pushProducts);

function pushProducts(){
  array.push(JSON.parse(products.responseText));
  console.log(array);
}

products.open("GET", "products.json");
products.send();








