
//total_amount.innerHTML = ;

//Declaring the variable for the add_new_item button
const add_new_item = document.getElementById("add_new_item");

//Function to show the form for putting in new items
const item_form = document.getElementById("item_form");

item_form.style.display = "none";

// Creating the DiaplayForm function
const  DisplayForm = ()=>{

if (item_form.style.display == "none"){
item_form.style.display = "block";
add_new_item.innerHTML = "X";
}
  else if(item_form.style.display == "block"){
  item_form.style.display = "none";
  add_new_item.innerHTML = "Add new item";
}
}

//Adding the onclick function to the add_new_item button 
add_new_item.addEventListener("click",DisplayForm);


//Assiging variables needed for adding new items
var item_name = document.getElementById("item_name");
var item_qty = document.getElementById("qty");
var item_price = document.getElementById("price");
var added_items = document.getElementById("added_items");
var total_amount = document.getElementById("total_amount");
var delete_all = document.getElementById("delete_all");

//creating a function to add new items
var add_item = document.getElementById("add_item");
const AddItem = () =>{

var new_item = document.createElement("div");
var br = document.createElement("br");
var delete_item = document.createElement("button");
delete_item.innerHTML = "x";
delete_item.className = "delete_btn";

//Display message if user tries to enter an empty item
if(item_name.value == ""){
alert("Please enter a valid item");
}
else{
new_item.className = "new_item";
new_item.innerHTML= item_name.value +" "+ "(" + item_qty.value + " " +"×"+ " " + item_price.value + ")";

var total_price = item_qty.value*item_price.value;

var total = total_amount.innerHTML;
var value = total_amount.innerHTML + total_price;
var value =  parseInt(total,10) + total_price;

total_amount.innerHTML  = value;

item_name.value="";
item_qty.value="";
item_price.value="";
new_item.appendChild(delete_item);
added_items.appendChild(new_item);
added_items.appendChild(br);

//Fucntion to delete an item 

const DeleteItem = ()=>{
var confirm_delete = confirm("Do you want to delete this item ?");
if ( confirm_delete === true){
delete_item.parentElement.remove();
br.remove();
total_amount.innerHTML = total_amount.innerHTML- total_price;
}
else {
alert("Item not deleted");
}
}
const DeleteAll = ()=>{
var confirm_delete_all = confirm("Do you want to delete all items ?");
if(confirm_delete_all === true){
added_items.innerHTML = "";
total_amount.innerHTML = 0;
}
else{
alert("All items were not deleted");
}
}

delete_item.addEventListener("click",DeleteItem);
delete_all.addEventListener("click",DeleteAll);
}

}

add_item.addEventListener("click",AddItem);
