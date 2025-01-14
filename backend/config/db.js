import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })

    console.log(`MongoMANIA Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(`You fkd up: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
