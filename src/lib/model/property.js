import mongoose from "mongoose";

const propertyModel = new mongoose.Schema({
   clientname :String,
    phone:Number,
    email:String,
    location: String,
    address : String,
    propertyType: String,
    category:String,
    dimensions: Number,
    dunit: String,
    age:Number,
    price: Number,
    punit: String,
    furnishing: String,
    availability: String,
    bedrooms : String,
    washrooms : String,
    balconies : String,
    openParking : String,
    closedParking:String,
    imageurl:String,
    visibility: Boolean
});

export const Property = mongoose.models.properties || mongoose.model("properties", propertyModel)

