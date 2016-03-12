products.addEventListener("load", listProducts);

//loop through all the products into HTML
function listProducts(){
  var productString = "";
  for(var i=0;i<array[1].products.length;i++){
    productString+=`<p>${array[1].products[i].name}</p><p>Price: ${array[1].products[i].price}</p>`;
    
    //loop to find the corresponding department
    for(var j=0;j<array[0].categories.length;j++){
      if(array[1].products[i].category_id===array[0].categories[j].id){
        productString+=`<p>${array[0].categories[j].name}</p><br>`;
      }
    }
  }
  document.getElementById("list").innerHTML = productString;
}

//change discount according to seasons
document.getElementById("season").addEventListener("change", changePrice);

function changePrice(){
  clear();
  for(i=0;i<array[1].products.length;i++){
    for(j=0;j<array[0].categories.length;j++){
      //when input season = season_discount && category=category
      if((array[0].categories[j].season_discount.toLowerCase()===this.value)&&(array[0].categories[j].id===array[1].products[i].category_id)){
        array[1].products[i].price=(1-array[0].categories[j].discount) * array[1].products[i].price;
      }
    }  
  }
  listProducts();
}   

//This clears the previous price changing by seasons.
//Method: load the original json products file again, and loop through
function clear(){
  for(i=0;i<array[1].products.length;i++){
  array[1].products[i].price=JSON.parse(products.responseText).products[i].price;
  }
  listProducts();
}



