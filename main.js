console.log("this is from main.js file");

function factorial(n) {
	if (n == 0 || n == 1) {
		return 1;
	}
	return n * factorial(n-1);
}

function sum(a, b) {
	return a + b
}

console.log(sum(2, 3));
