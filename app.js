const express =require('express');
const app = express();
const body_parser = require('body-parser');
const request = require('request');
const fetch = require('node-fetch');

app.use(body_parser.urlencoded({extended: false}));
app.use(express.static('./public'));

app.listen(3000, () => {
    console.log("Server is starting");
});


app.get("/", (req, res) => {
    //res.json('./VA.json');
});



app.get("/all_crimes", async (req, res) => {
    console.log("trying to find crimes");
    selected_state = req.body.state;
    console.log(selected_state);

    var state = selected_state; 
    var front = "https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/all-offenses/offense/states/";
    var end = "/CRIMINAL_ACTIVITY?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv";
    var api_url = front + "MI" + end;

    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    res.json(json);
});