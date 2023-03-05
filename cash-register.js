function checkCashRegister(price, cash, cid) {
	const differenceBetweenPaymentAndPrice = cash - price;
	const availableCash = cid;
	let isExactChangePossible = true;

	availableCash.forEach(element => {
		let orderOfCurrency = 0;
		if (element[0] < differenceBetweenPaymentAndPrice) {

		}
	});

	return availableCash;
}

function fromMoneyNameToValue(moneyName) {
	let output;
}
console.log(
	checkCashRegister(19.5, 20, [
		["PENNY", 1.01],
		["NICKEL", 2.05],
		["DIME", 3.1],
		["QUARTER", 4.25],
		["ONE", 90],
		["FIVE", 55],
		["TEN", 20],
		["TWENTY", 60],
		["ONE HUNDRED", 100],
	])
);
