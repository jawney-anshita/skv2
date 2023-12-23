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
        data = {success: failed}
    }
   
    console.log(data,":data");

    return NextResponse.json(data)
}

export async function POST(request){

    // const payload = await request.json();
    await mongoose.connect(connectionSrt);
    let property = new Property({
        clientname:"String",
        phone:200,
        email:"String"
    })

    const data = await property.save();
    return NextResponse.json(data)
}