const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: Boolean,
});

const Task = mongoose.model('TACHE', Schema);

module.exports = Task;


