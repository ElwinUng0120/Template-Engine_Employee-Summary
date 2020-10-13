# Template-Engine_Employee-Summary
**Goal**: To make a CLI app in node.js for generating a quick team viewer static website<br>
This app has the following abilities:
- Able to select position to be added: *Engineer/Manager/Intern*
- Able to input basic information for team members: *ID, Name, Email*
- Able to input position specific information: *Engineer -> Github username; Manager -> Office number; Intern -> School*
- Able to read the webpage template and insert contents input by user then output the generated webpage as *main.html*

<br>

This project contains the following files:
- main.js: The prompt engine that ask the user for input as well as passing inputs to htmlBuilder.js for web building
- htmlBuilder.js: Reads template.html and inserts content input by user with the corresponding formats 
- pageManager.js: Check if the any button is pressed in the header and displayed corresponding contents, i.e. All or Engineer/Manager/Intern only contents
- template.html: The template for the webpage to be built by *htmlBuilder.js*
- employee.js: Parent class for engineer/manager/intern.ks, which has common properties and methods
- engineer/manager/intern.js: Child class of employee.js, which has class specific properties and methods
- package.json: Contains information on all the npm packages used in this project
- style.css: General styling for the page

<br>

This project was made using **HTML5**, **CSS**, **Bootstrap**, **JaveScript**, **jQuery**, **Node.js** and **inquirer npm package**.

## Using the generator
- Start the generator by using **node main.js**
- You will be prompted to select 1 of the 3 positions (Engineer/Manager/Intern). Then, you will be prompted to enter their *name, email and a position specific info*.
- There is no limit on how many team members you want to enter.
- When you are done entering all the info, select *End Program* and the generator output the generated webpage as **main.html**, which will be located in the same folder as **main.js**

### Showcase video


### Main menu

### Prompting

### End program

### Example output



