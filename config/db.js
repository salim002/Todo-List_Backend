import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.5lx7gov.mongodb.net/Todo_List`

const connectToMongo = async ()=>{
    const res = await mongoose.connect(URI);
    if(res){
        console.log("Database connected successfully!");
    }
    else{
        console.log("Some error occured while connecting to the Database");
    }
}

export default connectToMongo;