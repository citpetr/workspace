window.onload = init;

function init() {
	var products = [{
			name: "Grapefruit",
			calories: 170,
			color: "red",
			sold: 8200
		},
		{
			name: "Orange",
			calories: 160,
			color: "orange",
			sold: 12101
		},
		{
			name: "Cola",
			calories: 210,
			color: "caramel",
			sold: 25412
		},
		{
			name: "Diet Cola",
			calories: 0,
			color: "caramel",
			sold: 43922
		},
		{
			name: "Lemon",
			calories: 200,
			color: "clear",
			sold: 14983
		},
		{
			name: "Raspberry",
			calories: 180,
			color: "pink",
			sold: 9427
		},
		{
			name: "Root Beer",
			calories: 200,
			color: "caramel",
			sold: 9909
		},
		{
			name: "Water",
			calories: 0,
			color: "clear",
			sold: 62123
		}
	];

	products.sort(compareSold);
	printProducts(products);
	products.sort(compareName);
	printProducts(products);
	products.sort(compareColor);
	printProducts(products);
	products.sort(compareCalories);
	printProducts(products);
}

function compareSold(prod1, prod2) {
	return prod1.sold - prod2.sold;
};

function compareCalories(prod1, prod2) {
	return prod1.calories - prod2.calories;
};

function compareName(prod1, prod2) {
	if (prod1.name > prod2.name) {
		return 1;
	} else if (prod1.name === prod2.name) {
		return 0;
	} else if (prod1.name < prod2.name) {
		return -1;
	}
};

function compareColor(prod1, prod2) {
	if (prod1.color > prod2.color) {
		return 1;
	} else if (prod1.color === prod2.color) {
		return 0;
	} else if (prod1.color < prod2.color) {
		return -1;
	}
}

function printProducts(products) {
	for (var i = 0; i < products.length; i++) {
		document.writeln(
			"Name: " + products[i].name +
			", Calories: " + products[i].calories +
			", Color: " + products[i].color +
			", Sold: " + products[i].sold + "<br>"
		);
	}
	document.writeln(stringOfMinus() + "<br>");
}

function stringOfMinus() {
	var minusString = "---";
	for (var i = 0; i < 25; i++) {
		minusString = minusString + "---";
	}
	return minusString;
}