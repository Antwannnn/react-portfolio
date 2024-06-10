import mongoose, {ConnectOptions, Mongoose} from "mongoose";


const uri = process.env.MONGODB_URI || "";
if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}


let dbConnection: Promise<Mongoose>;
const options: ConnectOptions = {};

if (process.env.NODE_ENV === "development") {

  if (!(global as any)._mongooseConnect) {
    (global as any)._mongooseConnect = mongoose.connect(uri, options);
  }
  dbConnection = (global as any)._mongooseConnect;
} else {
  dbConnection = mongoose.connect(uri, options);
}

export default dbConnection;