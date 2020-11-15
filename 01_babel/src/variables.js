function scopeFunc() {
	let a = 123;
	const b = "Hello";
	var c = [ "legacy" ];
	console.log("==INIT==");
	console.log(`let a = ${a}`);
	console.log(`const b = ${b}`);
	console.log(`var c = ${c}`);

	if (true) {
		let a = 345;
		const b = "Bye";
		var c = [ "legacy?" ];
		console.log("==SCOPED BLOCK==");
		console.log(`let a = ${a}`);
		console.log(`const b = ${b}`);
		console.log(`var c = ${c}`);
	}

	console.log("==INITIAL SCOPE==");
	console.log(`let a = ${a}`);
	console.log(`const b = ${b}`);
	console.log(`var c = ${c}`);
}

module.exports.scopeFunc = scopeFunc;
