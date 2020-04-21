var listEl = document.querySelector("#grocery-list");
var shoppingCartEl = document.querySelector("#shopping-cart");
var groceries = ["Bananas", "Apples", "Oranges", "Grapes", "Blueberries"];

listEl.addEventListener("click", function(event) {
  event.preventDefault();
  console.log(event);
  if(event.target.matches("button")) {
    var item = document.createElement("div");
    item.textContent = groceries[event.target.parentElement.id];
    shoppingCartEl.append(item);
  }
});
function createButtons() 
{
  groceries.forEach(function(grocery, index) {
  var listItem = document.createElement("li");
  listItem.setAttribute("id", index);
  var itemText = document.createTextNode(grocery);
  var itemButton = document.createElement("button");
  itemButton.textContent = "Add to Cart"
  listItem.append(itemText);
  listItem.appendChild(itemButton)
  listEl.appendChild(listItem);
});
}

{/* <li id="4">
          Blueberries <button>Add to Cart</button>
        </li> */}
createButtons();
// document.querySelectorAll('button').forEach(function(button) {
//   button.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log(event);
//   })
// })

groceries.push('Batteries');
createButtons();