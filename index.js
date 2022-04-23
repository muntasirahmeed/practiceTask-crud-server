const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 5000;
const app = express();
require("dotenv").config();

//------- middleware---------
app.use(cors());
app.use(express.json());
//--------------------

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rsdjy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const productCollection = client
      .db("practiceProducts")
      .collection("products");
    // create a document to insert
    const user = { name: "muntasir", email: "ahmed" };
    const result = await productCollection.insertOne(user);
  } finally {
    //   await client.close();
  }
}
run().catch(console.dir);

// _______________________________
app.get("/", (req, res) => {
  res.send("Server is running");
});
app.listen(port, () => {
  console.log("Practice server running");
});

// user: practiceUser
// pass: 7Mc2Evze5n3r3ydT
