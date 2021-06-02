const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use( express.urlencoded({extended: true}));


const users = [
    {name: "Jason", password: "SequrePassw3rd"},
    {name: "Corey", password: "thesecurestpasswordever123345678"},
    {name: "Mustafa", password: "SemicolonJason"},
    {name: "Somaiah", password: "rayOfSunshine"},
    {name: "Zaid", password:"........."}
];

app.get("/api", (req, res) => {
    res.json({message: "Hello Express!"})
})
app.get("/", (req, res) => {
    console.log(req.method + " on port " + port);
    res.json({message: "Another Route is awesome"})
})
app.get("/api/users", (req, res) => {
    res.json(users);
})

app.post("/api/users", (req, res) => {
    console.log("New User: " + req.body);
    users.push(req.body);
    console.log(users)
    res.json({status: "accepted"})
});

app.put("/api/users/:id", (req, res) => {
    const id = req.params.id;
    users[id] = req.body;
    console.log(users);
    res.json({status: "Your wish is my command"})
})

app.delete("/api/users/:id", (req, res) => {
    const id = req.params.id;
    users.splice(id, 1);
    console.log(users);
    res.json({message: "POOF!"})
})

app.listen( port, () => console.log(`Listening on port ${port}`) );