// Program takes as input price, payment and cash in drawer.
// cash in drawer is an array of smaller arrays, where first
// index of smaller array is a name of money unit and second
// index is value of all this units summed up
// valid input example
// checkCashRegister(19.5, 20,
// 	[["PENNY", 1.01],
// 	["NICKEL", 2.05],
// 	["DIME", 3.1],
// 	["QUARTER", 4.25],
// 	["ONE", 90],
// 	["FIVE", 55],
// 	["TEN", 20],
// 	["TWENTY", 60],
// 	["ONE HUNDRED", 100]]);
// program recognizes only money unit names listed above.
// output is an objec {status, change}
// if change can be paid status = "OPEN", and change is an array of change in the same format as input
// if change is exactly equal to cash in drawer status = "CLOSED" and change is all money in drawer
// if change is greater or cannot be paid status = "INSUFFICIENT_FUNDS"
// Sample tests below program


function checkCashRegister(price, cash, cid) {
	let change = cash - price;
	let availableCash = Math.round(cid.reduce((sum, current) => sum + current[1], 0) + "e+2") / 100;

	if (change > availableCash) return { status: "INSUFFICIENT_FUNDS", change: [] };
	if (change === availableCash) return { status: "CLOSED", change: cid }

	let changeArr = [];
	let CashRegister = cid
		.map(arr => {
			let output;
			switch (arr[0]) {
				case "PENNY":
					output = 0.01;
					break;
				case "NICKEL":
					output = 0.05;
					break;
				case "DIME":
					output = 0.1;
					break;
				case "QUARTER":
					output = 0.25;
					break;
				case "ONE":
					output = 1;
					break;
				case "FIVE":
					output = 5;
					break;
				case "TEN":
					output = 10;
					break;
				case "TWENTY":
					output = 20;
					break;
				case "ONE HUNDRED":
					output = 100;
					break;
				default:
					output = "unitNotFound"
					break;
			}
			return { name: arr[0], value: output, quantity: arr[1] / output };
		})
		.filter(obj => obj.value <= change && obj.quantity > 0)
		.reverse();

	CashRegister.forEach(obj => {
		let paidRest = 0;
		while (change - obj.value >= 0 && obj.quantity > 0) {
			change -= obj.value;
			paidRest += obj.value;
			obj.quantity--;
			change = Math.round(change + "e+2") / 100;
		}
		if (paidRest > 0) changeArr.push([obj.name, paidRest]);
	});

	if (change > 0) return { status: "INSUFFICIENT_FUNDS", change: [] };
	return { status: "OPEN", change: changeArr };
}

// tests

// console.log(checkCashRegister(19.5, 20,
// 	[["PENNY", 1.01],
// 	["NICKEL", 2.05],
// 	["DIME", 3.1],
// 	["QUARTER", 4.25],
// 	["ONE", 90],
// 	["FIVE", 55],
// 	["TEN", 20],
// 	["TWENTY", 60],
// 	["ONE HUNDRED", 100]]));

// console.log(checkCashRegister(3.26, 100,
// 	[["PENNY", 1.01],
// 	["NICKEL", 2.05],
// 	["DIME", 3.1],
// 	["QUARTER", 4.25],
// 	["ONE", 90], ["FIVE", 55],
// 	["TEN", 20],
// 	["TWENTY", 60],
// 	["ONE HUNDRED", 100]]));

//  console.log(checkCashRegister(19.5, 20,
// 	[["PENNY", 0.01],
// 	["NICKEL", 0],
// 	["DIME", 0],
// 	["QUARTER", 0],
// 	["ONE", 0],
// 	["FIVE", 0],
// 	["TEN", 0],
// 	["TWENTY", 0],
//  	["ONE HUNDRED", 0]]));

// console.log(checkCashRegister(19.5, 20,
// 	[["PENNY", 0.01],
// 	["NICKEL", 0],
// 	["DIME", 0],
// 	["QUARTER", 0],
// 	["ONE", 1],
// 	["FIVE", 0],
// 	["TEN", 0],
// 	["TWENTY", 0],
// 	["ONE HUNDRED", 0]]));

// console.log(checkCashRegister(19.5, 20,
// 	[["PENNY", 0.5],
// 	["NICKEL", 0],
// 	["DIME", 0],
// 	["QUARTER", 0],
// 	["ONE", 0],
// 	["FIVE", 0],
// 	["TEN", 0],
// 	["TWENTY", 0],
// 	["ONE HUNDRED", 0]])
// )
