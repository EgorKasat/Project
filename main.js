const dataSet = [
    {id: 1, name: "Ivan"},
    {id: 2, name: "Lena"},
    {id: 3, name: "Vity"}
]
const table = (data) => {
    const tbody = document.getElementById("tbody")
    data.forEach(element => {
        const tr = tbody.insertRow()
        tr.innerHTML = `<td>${element.id}</td>
        <td>${element.name}</td>`
        
    })}
table(dataSet)