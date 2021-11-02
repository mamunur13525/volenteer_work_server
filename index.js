const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const { ObjectId } = require("mongodb");
require("dotenv").config();
const { MongoClient } = require("mongodb");
const uri = `mongodb+srv://creativeAgencyUser:${process.env.DB_PASS}@creativeagency.vucvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

app.use(cors());
app.use(bodyParser.json());

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  const registerCollection = client
    .db("voleenter")
    .collection("subscribe_voleenter");
  const valunteerCollection = client
    .db("voleenter")
    .collection("voleenter_collection");

  app.post("/addregister", (req, res) => {
    const register = req.body;
    registerCollection.insertOne(register).then((result) => {
      res.send(result);
    });
  });

  app.get("/registerUser/:email", (req, res) => {
    console.log(req.params.email);
    registerCollection
      .find({ email: req.params.email })
      .toArray((err, documents) => {
        res.send(documents);
      });
  });

  

  app.delete("/deleteregister/:id", (req, res) => {
    registerCollection
      .deleteOne({ _id: ObjectId(req.params.id) })
      .then((result) => {
        res.send(result.deletedCount > 0);
      });
  });

  /* Register Collection Database */
  app.get("/allValunteer", (req, res) => {
    valunteerCollection.find({}).toArray((err, documents) => {
      res.send(documents);
    });
  });
});
app.get("/", (req, res) => {
  res.send("Hello world It's working");
});

app.listen(process.env.PORT || port, () =>
  console.log(`Server running ${process.env.PORT || port}`)
);
