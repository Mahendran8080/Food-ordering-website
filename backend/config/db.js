import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://mahendrancool18:yERYs7j0zTNEI6rQ@food.syknf.mongodb.net/?retryWrites=true&w=majority&appName=food').then(()=>{
       console.log('DB connected') ;
    })
}