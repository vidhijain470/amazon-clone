const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")('sk_test_51KKh2ISDrJ9wVhFG3dSPHQZih5K3ZsZjcxNdPhAzRlF2eGQZfygBs80FfjBwWSjhSabXGVaqZ1XYA1YrEVgvnBRA00DrE82v2Y')

// API

//- app config
const app = express();

//- middlewares
app.use(cors({origin: true}));
app.use(express.json());
//- api routes
app.get('/', (request, response) => response.status(200).send('hello world') )
app.get('/vidhi', (request, response) => response.status(200).send('imma princess') )

app.post('/payments/create', async(request, response) => {
    const total = request.query.total;
    console.log('payment amount recieved BOOOOM!!!>>>>', total )

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "INR",
    });

    // OK- Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//- listen comand

exports.api = functions.https.onRequest(app)

// http://localhost:5001/challenge-b9e75/us-central1/api