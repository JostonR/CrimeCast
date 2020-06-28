const express =require('express');
const app = express();
const body_parser = require('body-parser');
const request = require('request');

app.use(body_parser.urlencoded({extended: false}));
app.use(express.static('./public'));

app.listen(3000, () => {
    console.log("Server is starting");
});


app.get("/", (req, res) => {
    //res.json('./VA.json');
});



app.get("/all_crimes", (req, res) => {
    console.log("trying to find crimes");
    selected_state = req.body.state;
    console.log(selected_state);

    var state = selected_state; 
    var front = "https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/all-offenses/offense/states/";
    var end = "/CRIMINAL_ACTIVITY?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv";
    //res.send(front + HI + end);
//     request(front + "HI" + end, { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(body.url);
//   console.log(body.explanation);
//    //res.send("hi");
// });
const axios = require('axios');

axios.get('https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/all-offenses/offense/states/HI/CRIMINAL_ACTIVITY?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv')
  .then(response => {
    res.send("WORK!!");
    console.log(response.data.url);
    console.log(response.data.explanation);
    res.send("WORK!!");
    res.setHeader(response.data.url);

  })
  .catch(error => {
    console.log(error);
    res.send("WORK!!");
  });
    res.end();
});