const currencyFormatter = new Intl.NumberFormat('en-US' ,{
    style: 'currency', currency: 'USD'
});

var regProducts = [
    {
        name: "Ryzen 5 5600X",
        desc: "6-Core, 12-Threads, 3.7GHz (4.6GHz Turbo), Cache 35MB, AM4",
        price: 134.90,
        origin: "Imported",
        labels: ['l'],
    },
    {
        name: "Ryzen 5 5700X",
        desc: "8-Core, 16-Threads, 3.4GHz (4.6GHz Turbo), Cache 36MB, AM4",
        price: 149.90,
        origin: "Imported",
        labels: ['s'],
    },
];

const labels = new Map([
    ['l', "<span class=\"text-primary fw-bold\">L</span>"],
    ['s', "<span class=\"text-success fw-bold\">S</span>"],
]);

const tableBody = document.getElementById("tableBody");

for (let i = 0; i < regProducts.length; i++) {
    let labelStr = "";
    
    for (let label of regProducts[i].labels) {
        try {
            labelStr += labels.get(label) + " ";
        }
        catch {
            continue;
        }
    }

    tableBody.innerHTML +=
    `<th scope="row">${i + 1}</th>
    <td>${regProducts[i].name}</td>
    <td>${regProducts[i].desc}</td>
    <td>${currencyFormatter.format(regProducts[i].price)}</td>
    <td>${regProducts[i].origin}</td>
    <td>${labelStr.trim()}</td>`;
};