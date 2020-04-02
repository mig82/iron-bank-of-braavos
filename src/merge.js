const fs = require("fs-extra")
const find = require("find").file
const path = require("path")

async function merge(dir){
	var out = {}

	return new Promise((resolve, reject) => {
		try{
			find(/\.json$/, dir, async (docPaths) => {
				//console.log(files.length);
				for await (var docPath of docPaths) {

					var attr = path.parse(docPath).name
					//console.log(attr);

					var json = await fs.readJson(docPath)
					out[attr] = json
					//console.log(out)
				}
				resolve(out)
			})
		}
		catch(e){
			reject(e)
		}
	})
}

module.exports = merge
