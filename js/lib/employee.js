class Employee{
    constructor(id, name, email){
        this.class;
        this.id = id;
        this.name = name;
        this.email = email;

        this.getID = () => {return this.id};
        this.getName = () => {return this.name};
        this.getEmail = () => {return this.email};
        this.getClass = () => {return this.class};
    }
}

module.exports = Employee;