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



app.post("/all_crimes", async (req, res) => {
    console.log("trying to find crimes");
    selected_state = req.body.state;
    console.log(selected_state);
    var front = "https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/all-offenses/offense/states/";
    var end = "/CRIMINAL_ACTIVITY?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv";
    var api_url = front + selected_state + end;

    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    res.json(json);



    //KEERTHANA ADDED THIS PART
    var fs = require('fs');

    console.log("\n *STARTING* \n");
// Get content from file
     var contents = fs.readFileSync(json);
// Define to JSON type

    var jsonContent = JSON.parse(contents);
// Get Value from JSON
    res.send("Year:", jsonContent.data_year);
    res.send("Buying&Receiving:", jsonContent.buying__receiving);
    res.send("Cultivating/Manufacturing/Publishing:", jsonContent.cultivating__manufacturing__publishing);
    res.send("Distributing&Selling:",jsonContent.distributing__selling);
    res.send("Exploting Children:", jsonContent.exploiting_children);
    res.send("Operating/Promoting/Assisting:", jsonContent.operating__promoting__assisting);
    res.send("Possessing/Concealing:", jsonContent.possessing__concealing);
    res.send("Transporting/Transmitting/Importing:", jsonContent.transporting__transmitting__importing);
    res.send("Using/Consuming:", jsonContent.using__consuming);
    res.send("None/Unknown:", jsonContent.none__unknown);
    res.send("Other Gang:",jsonContent.other_gang);
    res.send("Juvenile Gang:",jsonContent.juvenile_gang);
    res.send("Simple Gross Neglect:",jsonContent.simple__gross_neglect);
    res.send("Organized Animal Abuse:", jsonContent.organized_aninal_abuse);
    res.send("Intentional Abuse and Torture:", jsonContent.intentional_abuse_and_torture);
    res.send("Animal Sexual Abuse:",jsonContent.animal_sexual_abuse);

});