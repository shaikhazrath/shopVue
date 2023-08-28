import mongoose from "mongoose";

const shopSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    shopName: {  type: String, required: true  },
    bannerImages:{
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    whatsappNumber :{
      type: String,
      required: true,
    }

})

export default mongoose.model("Shop",shopSchema)
