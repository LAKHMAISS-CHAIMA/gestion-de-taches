const express = require('./../node_modules/express');
const Task = require('../models/Task');
const body_parser = require('./../node_modules/body-parser')
const port = 3000;
const api = express();

api.use(body_parser.json());




api.post("/api/tasks", async (req, res) => {
    console.log(req.body);
    try {
        const data = new Task(req.body);
        await data.save();
    } catch (error) {
        console.log("il y a un erreur!" + error)

    }
});

api.get("/api/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        console.log(tasks);
        
    } catch (error) {
        console.log("tache introuvable!!" + error)
    }
})

api.delete("/api/tasks/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await Task.findByIdAndDelete(id);
        console.log("data deleted succefully");
    } catch (error) {
        console.log("il y a un erreur!" + error);
    }
});

api.put("/api/tasks/:id", async (req, res) => {
    console.log(req.body);
    const { titre, description, completed } = req.body;
    const id = req.params.id;
    try {
        let taskUpdated  = await Task.findByIdAndUpdate(id, { titre, description, completed });
        console.log(taskUpdated);
    } catch (error) {
        console.log("il y a un erreur! + " + error)
    }

})




api.listen(port, () => {
    console.log("api actif à le port 3000");
});

module.exports = api;



