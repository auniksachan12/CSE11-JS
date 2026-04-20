let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = Number(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    let emp = {
        name: name,
        id: id,
        salary: salary,
        department: dept
    };

    employees.push(emp);

    alert("Employee Added!");
}

function displayEmployees() {

    let output = "";

    for (let emp of employees) {
        output += `
        Name: ${emp.name} |
        ID: ${emp.id} |
        Salary: ${emp.salary} |
        Department: ${emp.department}
        <br><br>`;
    }

    document.getElementById("output").innerHTML = output;
}

function filterSalary() {
    let filtered = employees.filter(emp => emp.salary > 50000);
    let output = "";

    for (let emp of filtered) {
        output += `${emp.name} - ₹${emp.salary} (${emp.department}) <br>`;
    }

    document.getElementById("output").innerHTML = output;
}

function totalSalary() {

    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    document.getElementById("output").innerHTML =
        "Total Salary Payout = ₹" + total;
}


function minMaxSalary() {

    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "No employees available!";
        return;
    }

    let min = employees[0];
    let max = employees[0];

    for (let emp of employees) {
        if (emp.salary < min.salary) {
            min = emp;
        }
        if (emp.salary > max.salary) {
            max = emp;
        }
    }

    document.getElementById("output").innerHTML = `
        <b>Minimum Salary:</b><br>
        ${min.name} - ₹${min.salary} (${min.department})<br><br>

        <b>Maximum Salary:</b><br>
        ${max.name} - ₹${max.salary} (${max.department})
    `;
}