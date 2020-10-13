const Employee = require("./employee.js");

// extends Employee: inherit all properties and methonds from employee.js
class Engineer extends Employee{

    constructor(id, name, email, username){
        super(id, name, email); // super(...): inheriting properties from parent class
        this.class = "Engineer";
        this.username = username;

        this.getUsername = () => {return this.username};
        this.getGithubLink = () => {return `https://github.com/${this.username}`}
    }
}

module.exports = Engineer;