import {NextResponse} from "next/server";
import mongoose from "mongoose";
import { connectionSrt } from "../../../lib/db";
import { Property } from "../../../lib/model/property";

export async function GET(){

    let data =[];
    try {
        await mongoose.connect(connectionSrt)
        data = await Property.find();
    } catch(error) {
       
    }
   
    console.log(data,":data");

    return NextResponse.json(data)
}

export async function POST(request){
   console.log("request post data" , request.body);
    const payload = await request.json();
    console.log(payload, "request");
    await mongoose.connect(connectionSrt);
    // let property = new Property({
    //     clientname :"Me3",
    //     phone: 100,
    //     email:"me@gmail.com",
    //     location: "mylocation",
    //     address : "102 mh"
    // })
    let property = new Property(payload || "")

    const data = await property.save();
    return NextResponse.json(data)
}


    
    
export const dynamic = 'force-static'