const currencyFormatter = new Intl.NumberFormat('en-US' ,{
    style: 'currency', currency: 'USD'
});

// Object array that receives user information and stores it to be disposed.
var regProducts = [
    {
        name: "Ryzen 5 5600X",
        desc: "6-Core, 12-Threads, 3.7GHz (4.6GHz Turbo), Cache 35MB, AM4",
        price: 134.90,
        originCode: 3,
        labels: ['l'],
    },
    {
        name: "Ryzen 7 5700X",
        desc: "8-Core, 16-Threads, 3.4GHz (4.6GHz Turbo), Cache 36MB, AM4",
        price: 159.90,
        originCode: 3,
        labels: ['o'],
    },
    {
        name: "Ryzen 7 5800X",
        desc: "8-Core, 16-Threads, 3.8GHz (4.7GHz Turbo), Cache 36MB, AM4",
        price: 164.90,
        originCode: 3,
        labels: ['s', 'u'],
    },
];

// Hashmap, turns label code into HTML.
const labels = new Map([
    ['l', "<span title=\"Launch\" class=\"badge text-bg-primary fw-bold\">L</span>"],
    ['s', "<span title=\"On Sale\" class=\"badge text-bg-success fw-bold\">S</span>"],
    ['u', "<span title=\"Last Units\" class=\"badge text-bg-warning fw-bold\">U</span>"],
    ['o', "<span title=\"Out Of Stock\" class=\"badge text-bg-danger fw-bold\">O</span>"],
]);

const origins = new Map([
    [0, "N/A"],
    [1, "Own production"],
    [2, "National"],
    [3, "Imported"],
]);

// Gets the table to show the data.
const tableBody = document.getElementById("tableBody");

function loadTable() {
    for (let i = 0; i < regProducts.length; i++) {
        let labelHtml = "";
        
        for (let label of regProducts[i].labels) {
            
            labelHtml += labels.get(label) + " ";
            
        }
    
        tableBody.innerHTML +=
        `<th scope="row">${i + 1}</th>
        <td>${regProducts[i].name}</td>
        <td>${regProducts[i].desc}</td>
        <td>${currencyFormatter.format(regProducts[i].price)}</td>
        <td>${origins.get(regProducts[i].originCode)}</td>
        <td>${labelHtml.trim()}</td>`;
    }    
}

$(document).ready(loadTable());

function validateForm() {
    const formControls = document.getElementsByClassName("form-control");

    let isFormValid = true;

    for (let cntrl of formControls) {
        if (cntrl.value.length <= 0) {
            cntrl.classList.add("border-danger");
            isFormValid = false;
        }
        else {
            cntrl.classList.remove("border-danger");
        }
    }

    const formSelect = document.getElementById("inputOrigin");

    if (formSelect.value < 1 || formSelect.value > origins.length) {
        formSelect.classList.add("border-danger");
        isFormValid = false;
    }
    else {
        formSelect.classList.remove("border-danger");
    }

    return isFormValid;
}

function submitForm(){
    if (!validateForm()) {
        console.log("NO")
        return;
    }
    else {
        console.log(parseFloat(document.getElementById("inputPrice").value))
    }

    return;
}