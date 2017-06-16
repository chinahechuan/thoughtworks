let Person = require('./person')
// Write your code here
module.exports = class Student extends Person{
  constructor(name, age , kclass){
    super(name, age);
    this.kclass = kclass;
  }
  introduce(){
    return "My name is Tom. I am 21 years old. I am a Student. I am at Class 2.";
  }
}
