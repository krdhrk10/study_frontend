const legacyFunc = function() {
	console.log("Hello LegacyFunc");
}

const allowFunc = () => {
	console.log("Hello AllowFunc");
};

module.exports = {
	legacyFunc: legacyFunc,
	allowFunc: allowFunc,
};
