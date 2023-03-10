const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');




app.get('/', (req,res)=>{
     res.send('Partex  server is running')
})

app.use(cors());
app.use(express.json())



// eZZeWwEV4Zo5WZo9
// partexFurniture

const uri = "mongodb+srv://partexFurniture:eZZeWwEV4Zo5WZo9@cluster0.wss65wz.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run (){

     try{

          const categoryCollection = client.db('partexFurniture').collection('category');
          const productsCollection = client.db('partexFurniture').collection('products');

          app.get('/categories', async(req,res)=>{
               const query = {}
               const category = await categoryCollection.find(query).toArray();
               res.send(category)
          })
          app.get('/products', async(req,res)=>{
               const query = {}
               const category = await productsCollection.find(query).toArray();
               res.send(category)
          })
          app.get('/products/:id', async(req,res)=>{
               const id = req.params.id
               const query = {Category_Id : id}
               const category = await productsCollection.find(query).toArray();
               res.send(category)
          })
           
           
          

         
          

     }

     finally{

     }

}

run().catch(err => console.log(err))


app.listen(port,()=>{
     console.log(`Partex server running on port ${port}`);
})