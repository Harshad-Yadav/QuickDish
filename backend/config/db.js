import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://Harshad:Harshad@cluster0.ehtapt8.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


