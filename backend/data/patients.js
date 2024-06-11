import bcrypt from 'bcryptjs'

const patients= [{
    username: 'tayyab_habib',
        password: bcrypt.hashSync('123456',10),
        personalInfo: {
          name: 'Tayyab Habib',
          image:'/images/tayyab.jpg',
          email: 'tayyab@email.com',
          phone: '03181981827',
          address: '16 Street, City',
          gender: 'Male',
          dateOfBirth: new Date('1990-01-01'),
        },
        isPatient:true

}]
export default patients