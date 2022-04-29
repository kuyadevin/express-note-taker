const router = require('express').Router();
const helper = require('../db/helper');

router.get("./notes", (req,res) => {
    helper
    .getNotes()
    .then((notes) => {
        return res.json(notes)
    }).catch((err) => res.status(500).json(err))

})

router.post("./notes", (req,res) => {
    helper
    .addNotes()
    .then((note) => {
        return res.json(note)
    }).catch((err) => res.status(500).json(err))

})

//router.delete

module.exports = router;