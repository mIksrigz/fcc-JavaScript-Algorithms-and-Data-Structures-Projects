function checkCashRegister(price, cash, cid) {
	const rest = cash - price;
	let paidRest = 0;
	const cashRegister = cid.map(array => (
		{
			"unitName": array[0],
			"unitValue": unitNameToValue(array[0]),
			"unitQuantity": array[1] / unitNameToValue(array[0])
		}
	));
	const cashRegisterStatus = possibleUnits(cashRegister, rest).reverse();
	const statusObject = { status: "OPEN", change: [] };

	cashRegisterStatus.forEach(obj => {
		const quantityAtStart = obj.unitQuantity;
		while (paidRest <= rest && obj.unitQuantity > 0) {
			obj.unitQuantity--;
			paidRest += obj.unitValue;
			if (paidRest > rest) {
				obj.unitQuantity++;
				paidRest -= obj.unitValue;
				break;
			}
		}
		if (obj.unitQuantity !== quantityAtStart) {
			statusObject.change.push([obj.unitName, obj.unitValue * (quantityAtStart - obj.unitQuantity)]);
		}
	});
	console.log(cashRegisterStatus);
	return statusObject;
}

function unitNameToValue(unitName) {
	let output;
	switch (unitName) {
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
			return "unit not found";
	}
	return output;
}

function possibleUnits(cashRegister, rest) {
	return cashRegister.filter(unitObject => unitObject["unitValue"] <= rest && unitObject["unitQuantity"] > 0);
}

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

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
