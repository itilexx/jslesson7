function calculator() {
	var input = document.getElementById("numbers");
	var expression = input.value;
	var result;
	if (expression.indexOf("+") >= 0) {
		var nums = expression.split("+");
		result = parseFloat(nums[0]) + parseFloat(nums[1]);
	} else if (expression.indexOf("-") >= 0) {
		var nums = expression.split("-");
		result = parseFloat(nums[0]) - parseFloat(nums[1]);
		if (result < 0) {
			result = 0;
		}
	} else {
		result = "";
	}
	input.value = result;
}
