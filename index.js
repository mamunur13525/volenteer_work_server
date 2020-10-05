
const express = require('express')
const app = express()
const port = 5050
const MongoClient = require('mongodb').MongoClient;
const bodyPersar = require('body-parser');
const cors = require('cors');
const { ObjectId } = require('mongodb').ObjectId;

const uri = "mongodb+srv://valunteer-network:tHfPRVwGEGNRlrKR@cluster0.mde5k.mongodb.net/valunteerNnetwork?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });

app.use(cors());
app.use(bodyPersar.json());



/* Register Collection Database */
client.connect(err => {
  const registerCollection = client.db("valunteerNnetwork").collection("registerValunteer");
    
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
        res.send(result.deleteCount> 0)
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
  
app.get('/',(req, res)=>{
    res.send('this co')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})