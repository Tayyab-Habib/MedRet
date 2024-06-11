import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema({
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
    type: String,
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
isPatient:{
  type: Boolean,
  default: false
},
medicalHistory: [{
    diagnosis: String,
    treatment: String,
    date: Date,
  }],
  appointments: [{ 
    type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' 
  }],
}, { 
  timestamps: true 
});

const Patient = mongoose.model('Patient',patientSchema)
export default Patient