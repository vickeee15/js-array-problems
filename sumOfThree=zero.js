
	let arr = new Array(0, -1, 1, -3, 5);
	
	function sumofthreeiszero(arr) {
		let found = false;
		for (let i = arr[0]; i < arr.length - 2; i++) {
		for (let j = i + 1; j < arr.length - 1; j++) {
			for (let k = j + 1; k < arr.length; k++) {
				if (arr[i] + arr[j] + arr[k] === 0)
				{
					console.log(arr[i]);
					console.log(" ");
					console.log(arr[j]);
					console.log(" ");
					console.log(arr[k]);
					console.log("<br>");
					found = true;
					
				}
			}
		}
		if(found === false) {
			console.log(" not exist ");
		}
	}
}
	sumofthreeiszero(arr);