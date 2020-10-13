const Employee = require("./employee.js");

// extends Employee: inherit all properties and methonds from employee.js
class Manager extends Employee{

    constructor(id, name, email, offNumb){
        super(id, name, email); // super(...): inheriting properties from parent class
        this.class = "Manager";
        this.offNumb = offNumb;

        this.getOfficeNumb = () => {return this.offNumb};
    }
}

module.exports = Manager;