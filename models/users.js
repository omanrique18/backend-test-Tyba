import mongoosee from 'mongoose'

const userSchema = new mongoosee.Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const usersModel = mongoosee.model('users', userSchema)