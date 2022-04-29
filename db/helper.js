const fs = require('fs');
const { parse } = require('path');
const util = require('util');
const uuidv4 = require('uuidv4');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
class Helper {
    read(){
        return readFileAsync('db/db.json','utf-8')
    }
    write(){
        return writeFileAsync('db/db.json', JSON.stringify(note))
    }
    getNotes(){
        return this.read().then((notes)=> {
            let parsedNotes = concat(JSON.parse(notes))
            return parsedNotes;
        })
    }

    addNote(note) {
        const {title, text} = note;
        const newNote = {title, text, id: uuidv4()};
        return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((noteUpdate) => this.write(noteUpdate))
        .then(() => newNote);

    }

    
}

module.exports = new Helper();