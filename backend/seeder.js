import  colors from 'colors'
import dotenv from 'dotenv'
dotenv.config()

import doctors from './data/doctors.js'
import User from './models/userModel.js'
import Patient from './models/patientModel.js'
import Doctor from './models/doctorModel.js'
import connectDb from './config/connectDb.js'
import Appointment from './models/appointmentModel.js'
import users from './data/users.js'
import patients from './data/patients.js'

connectDb()
const importData = async ()=>{
    try{
        await User.deleteMany()
        await Patient.deleteMany()
        await Doctor.deleteMany()
        await Appointment.deleteMany()

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id
        const sampleDoctors = doctors.map((doctor)=>{
            return{...doctor, user:adminUser}
        })
        await Doctor.insertMany(sampleDoctors)
        await Patient.insertMany(patients)


    console.log("Data Imported!".green.inverse)
    process.exit()
      }

catch(error){
    console.log(`Error:${error.message}`.red.inverse )
    process.exit(1)
}
}

const destroyData=async ()=>{
    try {
       await User.deleteMany()
       await Patient.deleteMany()
       await Doctor.deleteMany()
       await Appointment.deleteMany()
       console.log("Data Destroyed".red.inverse)
       process.exit()
    } catch (error) {
       console.log(`Error:${error.message}`.red.inverse)
       process.exit(1)
    }
   }

   if(process.argv[2]==='-d'){
    destroyData()
}else{
    importData()
}