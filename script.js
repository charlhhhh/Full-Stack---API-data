fetch("https://randomuser.me/api/?results=5").then((data) => {
    // data to json format
    return data.json();
}).then((objectData) => {
    console.log(objectData);
    let tableData = "";
    objectData.results.map((values) => {
        tableData += `
        <tr>
        <td>${values.name.first}</td>
        <td>${values.location.city}</td>
    `
    });
    document.getElementById("table_body").
        innerHTML = tableData;
}).catch((err) => {
    console.log(err);
})