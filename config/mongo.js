import mongoose from 'mongoose'

export default async () => {
  const DB_URI = process.env.DB_URI
  if(DB_URI){
    mongoose.connect(DB_URI)
      .then(() => {
        console.log('Connected to MongoDB database')
      })
      .catch((error) => {
        console.error('Error connecting to MongoDB:', error)
      })
  }else {
    console.log('Error: Missing DB_URI environment variable')
  }
}