const Employee = require("./employee.js");

// extends Employee: inherit all properties and methonds from employee.js
class Intern extends Employee{

    constructor(id, name, email, school){
        super(id, name, email); // super(...): inheriting properties from parent class
        this.class = "Intern";
        this.school = school;

        this.getSchool = () => {return this.school};
    }
}

module.exports = Intern;