function firstChar(text) {
  // your code here
	let data=text.trim();
	return data.charAt(0).trim();
}

// Do not change the code below 
const text = prompt("Enter text:");
alert(firstChar(text));