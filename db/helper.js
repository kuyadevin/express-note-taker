const fs = require('fs');
const util = require('util');
const uuidv4 = require('uuid/v4');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
class Helper {
    read(){
        return readFileAsync('db/db.json')
    }
}