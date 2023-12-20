const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
var jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000

// middleware
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k0tncy0.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).send({ error: true, message: "unauthorize access" })
  }
  const token = authorization.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
    if (err) {
      return res.status(403).send({ error: true, message: "unauthorize access" })
    }
    req.decoded = decoded
    next()
  });
}


async function run() {
  try {
    const usersCollection = client.db('college').collection('users')
    const allColleges = client.db('college').collection('all-colleges')
    const admissionColleges = client.db('college').collection('admissionColleges')
    const admissionBooking = client.db('college').collection('admissionBooking')
    const reviews = client.db('college').collection('reviews')


    //  to get all the colleges
    app.get("/colleges", async (req, res) => {
      const data = allColleges.find();
      const result = await data.toArray();
      res.send(result);
    });

    // get details by id
    app.get("/college/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await allColleges.findOne(query);
      res.send(user);
    });

    // admission colleges all 
    app.get("/admissionColleges", async (req, res) => {
      const data = admissionColleges.find();
      const result = await data.toArray();
      res.send(result);
    });

    // after admitting colleges
    app.get("/admission", async (req, res) => {
      const data = admissionBooking.find();
      const result = await data.toArray();
      res.send(result);
    });
    app.get("/admissions/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await admissionBooking.findOne(query);
      res.send(user);
    });

    app.get('/admission/:email', async (req, res) => {
      const email = req.params.email
      const query = { user_email: email }
      const result = await admissionBooking.find(query).toArray()
      res.send(result)
    })

    // create admisson post
    app.post("/admission", async (req, res) => {
      const data = req.body;
      const query = { data };
      console.log(query)
      const exits = await admissionBooking.findOne(query);
      if (exits) {
        return res.send({ success: false, data: exits })
      }

      const result = await admissionBooking.insertOne(data);

      res.send({ success: true, result });
    });

    // get admisson clg details by id


    // to save users email on database

    app.put("/users/:email", async (req, res) => {
      const email = req.params.email;
      const user = req.body;
      const query = { email: email };
      const options = { upsert: true };
      const updateDoc = {
        $set: user
      };
      const result = await usersCollection.updateOne(query, updateDoc, options);
      console.log(result)
      res.send(result)
    })
    // get reviews
    app.get("/review", async (req, res) => {
      const data = reviews.find();
      const result = await data.toArray();
      res.send(result);
    });
    // review
    app.post("/review", async (req, res) => {
      const data = req.body;
      const query = { data };
      console.log(query)
      const exits = await reviews.findOne(query);
      if (exits) {
        return res.send({ success: false, data: exits })
      }
      const result = await reviews.insertOne(data);
      res.send({ success: true, result });
    });



    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 })
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    )
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir)

app.get('/', (req, res) => {
  res.send('AirCNC Server is running..')
})

app.listen(port, () => {
  console.log(`AirCNC is running on port ${port}`)
})