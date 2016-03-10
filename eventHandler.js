//add these two loads to make sure when the function run, all the files are already loaded
//but there's still error message in console...
products.addEventListener("load", listProducts);
// categories.addEventListener("load", listProducts);

//loop through all the products
function listProducts(){
  var productString = "";
  for(var i=0;i<array[1].products.length;i++){
    productString+="<p>"+array[1].products[i].name+"</p>"+"<p>Price: $"+array[1].products[i].price+"</p><br>";
  }
  document.getElementById("list").innerHTML = productString;
}

//change discount according to seasons
document.getElementById("season").addEventListener("change", changePrice);

function changePrice(){
  for(i=0;i<array[1].products.length;i++){
    for(j=0;j<array[0].categories.length;j++){
      //when input season = season_discount && category=category
      if((array[0].categories[j].season_discount.toLowerCase()===this.value)&&(array[0].categories[j].id===array[1].products[i].category_id)){
        array[1].products[i].price=(1-array[0].categories[j].discount) * array[1].products[i].price;
        console.log(array[1].products[i].price);
      }
    }  
  }
  listProducts();
}   
//didn't finish yet: cannot change the price back when select other seasons


