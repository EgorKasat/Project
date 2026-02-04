const dataSet = [
    {id: 1, name: "Ivan"},
    {id: 2, name: "Lena"},
    {id: 3, name: "Vity"}
]
const table = () => {
    const tbody = document.getElementById("tbody")
    const tr = tbody.insertRow()
    const td = tr.insertCell()
    td.textContent = "test"
}
table()