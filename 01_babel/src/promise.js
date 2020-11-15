import "core-js/stable";
import "regenerator-runtime/runtime";

function asyncFunc() {
	return new Promise((okFunc, ngFunc) => {
		setTimeout(() => {
			okFunc('ok');
		}, 1000);
	});
}

async function callAsync() {
	const result = await asyncFunc();
	console.log(`result = ${result}`);
}

module.exports.callAsync = callAsync;
