const currencyFormatter = new Intl.NumberFormat('en-US' ,{
    style: 'currency', currency: 'USD'
});

var regProducts = [
    {
        name: "Ryzen 5 5600X",
        desc: "6-Core, 12-Threads, 3.7GHz (4.6GHz Turbo), Cache 35MB, AM4",
        price: 134.90,
        origin: "USA",
        labels: [],
    },
];

const tableBody = document.getElementById("tableBody");

for (let i = 0; i < regProducts.length; i++) {
    tableBody.innerHTML +=
    `<th scope="row">${i + 1}</th>
    <td>${regProducts[i].name}</td>
    <td>${regProducts[i].desc}</td>
    <td>${currencyFormatter.format(regProducts[i].price)}</td>
    <td>${regProducts[i].origin}</td>
    <td>${123}</td>`;
};