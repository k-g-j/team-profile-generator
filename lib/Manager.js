const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, role, office) {
        super(name, id, email, role)
        this.office = office;
    }
    getRole() {
        return 'Manager'
    }
    getOffice() {
        return this.office
    }
};
module.exports = Manager;