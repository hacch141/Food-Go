import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const { 
    method, 
    query:{id},
} = req;

//   const token = cookies.token

  dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    // if(!token || token !== process.env.token){
    //   return res.status(401).json("Not authenticated!")
    // }
    try {
      console.log("hii")
      const product = await Product.create(req.body);
      console.log(req.body)
      res.status(201).json(product);
    } catch (err) {
      console.log("fucked up")
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
    // if(!token || token !== process.env.token){
    //   return res.status(401).json("Not authenticated!")
    // }
    try {
      console.log("hii")
      const product = await Product.create(req.body);
      console.log(req.body)
      res.status(201).json(product);
    } catch (err) {
      console.log("fucked up")
      res.status(500).json(err);
    }
  }
}