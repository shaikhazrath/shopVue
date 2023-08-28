import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },


    title: { type: String, required: true },

    description: { type: String, required: true },

    price:{ type: String, required: true },
  
 
  
    productImage:{
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
})

export default mongoose.model("Product",productsSchema)
