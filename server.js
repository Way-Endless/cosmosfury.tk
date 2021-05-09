const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://admin:192837465@endlessway.en3q2.mongodb.net/endlessway?retryWrites=true&w=majority",
{
useUnifiedTopology: true,
useNewUrlParser: true,
useFindAndModify: false
}
)
.then(console.log("MONGODB CONNECTED!"));

const notesSchema = {
title: String,
content: String
}

const Note = mongoose.model("Note", notesSchema);

app.get("/", function(req, res) {
res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
let newNote = new Note({
title: req.body.title,
content: req.body.content
});
newNote.save();
res.redirect('/');
})
