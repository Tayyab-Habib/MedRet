import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        username: { 
            type: String, 
            required: true, 
            unique: true 
        },
        password: { 
            type: String, 
            required: true 
        },
        personalInfo: {
          name: { 
            type: String, 
            required: true 
          },
          email: { 
            type: String, 
            required: true, 
            unique: true 
          },
          phone: { 
            type: String, 
            required: true 
          },
          address: { 
            type: String, 
            required: true 
          },
          gender: { 
            type: String, 
            required: true 
          },
          dateOfBirth: { 
            type: Date, 
            required: true }
            ,
        },
        isAdmin:{
          type: Boolean,
          default: false
        }
      }, 
      { 
        timestamps: true 
      });
      
const User = mongoose.model('User', userSchema);
export default User