const { connectToDatabase } = require('./connection.js');

export default async function handler(req, res) {
  switch (req.method) {
      case 'GET': {
          return getProduts(req, res);
      }

      // case 'POST': {
      //     return addProdut(req, res);
      // }

      // case 'PUT': {
      //     return updateProdut(req, res);
      // }

      // case 'DELETE': {
      //     return deleteProdut(req, res);
      // }
  }
}

async function getProduts(req,res){
  try {
      let { db } = await connectToDatabase();
      let products = await db.collection('products').find({}).toArray();
      return res.json({
          data: products,
          message: "Data fetched successfully",
          success: true,
      });
  } catch (error) {
      return res.json({
          data: null,
          message: new Error(error).message,
          success: false,
      });
  }
}
