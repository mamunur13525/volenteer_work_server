
const express = require('express')
const app = express()
const port = 5050
const MongoClient = require('mongodb').MongoClient;
const bodyPersar = require('body-parser');
const cors = require('cors');
const { ObjectId } = require('mongodb').ObjectId;
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASS}@cluster0.mde5k.mongodb.net/${process.env.DB_USER}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });


app.use(cors());
app.use(bodyPersar.json());



/* Register Collection Database */
client.connect(err => {
  const registerCollection = client.db("valunteerNnetwork").collection("registerValenteer");
    
  app.get('/',(req, res)=>{
    res.send('heroku is working')
  })
  app.post('/addregister',(req, res)=>{
    const register = req.body;
    registerCollection.insertOne(register)
    .then(result => {
      res.send(result)
 
     
    })

  })


 

  app.get('/registerUser/:email',(req, res)=>{
 
    registerCollection.find({email:req.params.email})
    .toArray((err,documents)=>{
      res.send(documents)
     
    })
  })


  app.delete('/deleteregister/:id',(req, res)=>{
    registerCollection.deleteOne({_id: ObjectId(req.params.id)})
      .then(result => {
        res.send(result.deletedCount> 0)
        
      })
   
  })

 


});


/* Register Collection Database */
client.connect(err => {
    const valunteerCollection = client.db("valunteerNnetwork").collection("allValunteer");
      
      app.get('/allValunteer',(req, res) => {
      
          valunteerCollection.find({})
          .toArray((err, documents)=>{
              res.send(documents)
           })
      })
  
  });
  



app.listen(process.env.PORT || port)