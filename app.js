const express =require('express');
const app = express();
const body_parser = require('body-parser');

app.use(body_parser.urlencoded({extended: false}));
app.use(express.static('./public'));

app.listen(3000, () => {
    console.log("Server is starting");
});

app.get("/", (req, res) => {
    res.json('./VA.json');
});



app.get("/all_crimes", (req, res) => {
    console.log("trying to find crimes");
    selected_state = req.body.state;
    console.log(selected_state);
    res.end();
});