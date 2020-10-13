/*
    THIS IS NO LONGER USED
*/
// constructors for different positions/classes\
function Engineer(id, name, email, username){
    this.class = "Engineer";
    this.id = id;
    this.name = name;
    this.email = email;
    this.username = username

    this.getClass = () => {return this.class}
    this.getID = () => {return this.id}
    this.getName = () => {return this.name}
    this.getEmail = () => {return this.email}
    this.getUserName = () => {return this.username}
    this.getGithubLink = () => {return `https://github.com/${this.username}`}
}

function Manager(id, name, email, offNumb){
    this.class = "Manager";
    this.id = id;
    this.name = name;
    this.email = email;
    this.offNumb = offNumb;

    this.getClass = () => {return this.class}
    this.getID = () => {return this.id}
    this.getName = () => {return this.name}
    this.getEmail = () => {return this.email}
    this.getOfficeNumb = () => {return this.offNumb}
}

function Intern(id, name, email, school){
    this.class = "Intern";
    this.id = id;
    this.name = name;
    this.email = email;
    this.school = school

    this.getClass = () => {return this.class}
    this.getID = () => {return this.id}
    this.getName = () => {return this.name}
    this.getEmail = () => {return this.email}
    this.getSchool = () => {return this.school}
}

module.exports = {
    Engineer: Engineer,
    Manager: Manager,
    Intern: Intern
}