import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/zoonika');
    console.log('connect to mongo db')
  } catch (err) {
    console.log('err', err.message)
  }
}
export default connectToMongoDB;