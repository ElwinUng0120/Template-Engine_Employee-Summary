// import fs
const fs = require("fs");
// import inquirer
const inquirer = require("inquirer");
// import class.js
const classes = require("./js/class.js");
// import htmlBuilder.js
const htmlBuilder = require("./js/htmlBuilder.js");

// common questions for all three classes
var questions = [
    {
        type: "input",
        message: "Please enter his/her name",
        name: "name"
    },
    {
        type: "input",
        message: "Please enter his/her email",
        name: "email"
    }
];

// function to start the sequence
async function main(){
    const employees = [];
    var id = 1;
    let trigger = true;
    while(trigger){
        // ask user which position the employee is
        let choice = await inquirer.prompt({
            type: "list",
            message: "Please select the position from the list",
            name: "userChoice",
            choices: ["Engineer",
                        "Manager",
                        "Intern",
                        "End Program"]
        });
        switch (choice.userChoice){
            case "Engineer":{
                // asking for employee's name and email
                let response1 = await inquirer.prompt(questions);
                let response2 = await inquirer.prompt({        
                    type: "input",
                    message: "Please enter his/her Github username",
                    name: "github"
                });
                employees.push(new classes.Engineer(id, response1.name, response1.email, response2.github));
                id++;
                break;
            }
            case "Manager":{
                // asking for employee's name and email
                let response1 = await inquirer.prompt(questions);
                let response2 = await inquirer.prompt(
                    {type: "number",
                    message: "Please enter his/her office number",
                    name: "offNumb"
                });
                employees.push(new classes.Manager(id, response1.name, response1.email, response2.offNumb));
                id++;
                break;
            }
            case "Intern":{
                // asking for employee's name and email
                let response1 = await inquirer.prompt(questions);
                let response2 = await inquirer.prompt({
                    type: "input",
                    message: "Please enter his/her school name",
                    name: "school"
                });
                employees.push(new classes.Intern(id, response1.name, response1.email, response2.school));
                id++;
                break;
            }
            default: {
                console.log("Thank you for using this program!\n Your site is generating as main.html now...\n "); 
                trigger = false; 
                break;
            }
        }
    }
    htmlBuilder.buildHTML(employees);
}

main();
