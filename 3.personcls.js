class Person {
    constructor(firstName, lastName, age,gender, country, city, mobile , mail , height , weight, qualification,company,dob,role) {
      this.firstName = firstName
      this.lastName = lastName
      this.dob = dob
      this.age = age
      this.Gender = gender
      this.country = country
      this.city = city
      this.mobile = mobile
      this.mail = mail
      this.height = height
      this.weight = weight
      this.qualification = qualification
      this.company = company
      this.role = role
      
    }
  }
  
  const person1 = new Person('Ramya', 'lakshmi', 25,"Female",'India', 'Salem',9876543210 ,"ramya123@gmail.com",170,55,"M.Tech","Amazon","12-10-2000","developer")
  
  console.log(person1)