function orderNow(){

alert("Order feature coming soon!");

}

// prices for the menu items (single source of truth for this file)
const prices = {
	"Burger": 149,
	"Pizza": 199,
	"Lemon Soda": 89,
	"Chocolate Cake": 199,
	"Veg Burger": 139,
	"Garlic Bread": 149,
	"French Fries": 99,
	"Cold Coffee": 129,
	"White Sauce Pasta": 189,
	"Pasta": 179,
	"Chicken Momos": 129,
	"Margherita Pizza": 219
};

const food = document.getElementById("food_item");
const qty = document.getElementById("quantity");
const total = document.getElementById("priceDisplay");

function calculateTotal(){
	if(!food || !qty || !total) return; // guard if elements missing

	const item = food.value;
	const quantity = parseInt(qty.value, 10) || 1; // ensure number

	if(!item || !prices[item]){
		// clear display when no valid item selected
		total.innerText = "";
		return;
	}

	const result = prices[item] * quantity;
	total.innerText = "Total Price: ₹" + result;
}

// attach listeners only when elements exist
if(food && qty){
	food.addEventListener("change", calculateTotal);
	qty.addEventListener("input", calculateTotal);

	// run once to show initial price (if a food is pre-selected)
	calculateTotal();
}

