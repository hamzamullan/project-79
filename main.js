menu_list_array = ["Veg Margherita Pizza","tandoori chicken pizza","veg pizza","paneer tikka pizza","deluxe veggie pizza"];

function getmenu(){
var htmldata;
htmldata="<col class='menulist'>"
menu_list_array.sort();
for(var i=0;1<menu_list_array.length;i++){
    htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldara="<section class="cards">'
for(var i=0;1<menu_list_array.length;i++){


}


}

function add_top(){

}