import bcrypt from 'bcryptjs';

const doctors = [
  {
    username: 'jane_smith',
    password: bcrypt.hashSync('123456', 10),
    personalInfo: {
      name: 'Jane Smith',
      image: '/images/janedoc.jpg',
      email: 'jane@email.com',
      phone: '0987654321',
      address: '456 Avenue, Town',
      gender: 'Female',
      dateOfBirth: new Date('1985-05-15'),
    },
    isDoctor:true,
    specialization: 'Cardiology',
    availability: [
      { day: 'Monday', startTime: '08:00 AM', endTime: '05:00 PM' },
      { day: 'Wednesday', startTime: '10:00 AM', endTime: '06:00 PM' },
    ],
  },
  {
    username: 'sohail7',
    password: bcrypt.hashSync('123456', 10),
    personalInfo: {
      name: 'Sohail Ahmed',
      image: '/images/sohaildoc.jpg',
      email: 'sohail@email.com',
      phone: '03181981827',
      address: '408 scheme3, Town',
      gender: 'Male',
      dateOfBirth: new Date('1985-05-15'),
    },
    isDoctor:true,
    specialization: 'ENT',
    availability: [
      { day: 'Tuesday', startTime: '08:00 AM', endTime: '05:00 PM' },
      { day: 'Thursday', startTime: '10:00 AM', endTime: '06:00 PM' },
    ],
  },
  {
    username: 'zamir7',
    password: bcrypt.hashSync('123456', 10),
    personalInfo: {
      name: 'Zamir Khan',
      image: '/images/zamirkhan.jpg',
      email: 'zamir@email.com',
      phone: '03181981827',
      address: '420 scheme3, Town',
      gender: 'Male',
      dateOfBirth: new Date('1985-05-15'),
    },
    isDoctor:true,
    specialization: 'Physiotherapist',
    availability: [
      { day: 'Tuesday', startTime: '08:00 AM', endTime: '05:00 PM' },
      { day: 'Thursday', startTime: '10:00 AM', endTime: '06:00 PM' },
    ],
  },
];

export default doctors;
