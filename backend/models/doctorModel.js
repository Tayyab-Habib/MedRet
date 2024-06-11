import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"User"
},
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
  image:{
    type:String,
    required:true
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
isDoctor:{
  type: Boolean,
  default: false
},
specialization: { 
  type: String, 
  required: true 
},
availability: [{
    day: {
     type: String, 
     required: true 
    },
    startTime: { 
    type: String, 
    required: true 
  },
    endTime: { type: String, required: true },
  }],
  appointments: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Appointment' 
  }],
}, { 
  timestamps: true 
});

const Doctor = mongoose.model('Doctor',doctorSchema)
export default Doctor