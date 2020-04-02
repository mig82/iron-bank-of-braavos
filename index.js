const fs = require("fs-extra")
const merge = require("./src/merge")

async function run(){
	var db = await merge("db")
	db.timestamp = (new Date()).toISOString()
	fs.writeJson("./db.json", db, {
		spaces: "\t"
	})
	.then(() => {
		console.log('success!')
	})
}
run()
