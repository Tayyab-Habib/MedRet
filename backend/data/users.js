import bcrypt from 'bcryptjs'

 const users = [
      {
        username: 'admin_user',
        password: bcrypt.hashSync('123456',10),
        role: 'admin',
        personalInfo: {
          name: 'Admin User',
          email: 'admin@email.com',
          phone: '5555555555',
          address: '789 Boulevard, Admin City',
          gender: 'Male',
          dateOfBirth: new Date('1980-12-31'),
        },
        isAdmin:true
      },
]

export default users