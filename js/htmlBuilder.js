// import fs
const fs = require("fs");

const buildEngineerCards= (employee) => {
    return card = `
            <div class="col-4">
                <div class="card">
                    <h4 class="card-header">${employee.getName()}</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Employee ID:</strong> ${employee.getID()}</li>
                        <li class="list-group-item"><strong>Email:</strong> ${employee.getEmail()}</li>
                        <li class="list-group-item"><a href="${employee.getGithubLink()}" target="blank">${employee.getUserName()}</a></li>
                    </ul>
                </div>
            </div>
    `;
}

const buildManagerCards = (employee) => {
    return card = `
            <div class="col-4">
                <div class="card">
                    <h4 class="card-header">${employee.getName()}</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Employee ID:</strong> ${employee.getID()}</li>
                        <li class="list-group-item"><strong>Email:</strong> ${employee.getEmail()}</li>
                        <li class="list-group-item"><strong>Office number:</strong> ${employee.getOfficeNumb()}</li>
                    </ul>
                </div>
            </div>
        `;
}

const buildInternCards = (employee) => {
    return card = `
            <div class="col-4">
                <div class="card">
                    <h4 class="card-header">${employee.getName()}</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Employee ID:</strong> ${employee.getID()}</li>
                        <li class="list-group-item"><strong>Email:</strong> ${employee.getEmail()}</li>
                        <li class="list-group-item"><strong>School:</strong> ${employee.getSchool()}</li>
                    </ul>
                </div>
            </div>
    `;
}

// using RegExp to set up placeholder pattern to look for in html
// using .replace to replace the placeholder with all the built cards
// Read the template file -> Replace the placeholder with all the built cards -> Output the result into main.html or a new html file
const replacePlaceholder = (cards) =>{
    const pattern = new RegExp("{{ employeeCards }}", "gm");
    let target = fs.readFileSync("./template/template.html", "utf8");
    fs.writeFileSync("./main.html", target.replace(pattern, cards.join("")));
}

// take the array of inputs from index.js
const buildHTML = (employees) => {
    const employeesList = [];
    // filter the array with respect to class then send the resultant array
    // to corresponding card building function
    // The resultant array of cards is spread using ... then pushed onto employeesList
    employeesList.push(...employees
        .filter(item => item.getClass() == "Engineer")
        .map(item => buildEngineerCards(item)));
    employeesList.push(...employees
        .filter(item => item.getClass() == "Manager")
        .map(item => buildManagerCards(item)));
    employeesList.push(...employees
        .filter(item => item.getClass() == "Intern")
        .map(item => buildInternCards(item)));
    replacePlaceholder(employeesList);
    
}

module.exports = {
    buildHTML: buildHTML
}