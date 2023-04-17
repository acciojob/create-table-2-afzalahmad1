var table = document.getElementById("myTable");
function createTable() {
    //Write your code here
	let rn = parseInt(prompt("Input number of rows"))
	let cn = parseInt(prompt("Input number of columns"))
	for(let i=0;i<rn;i++){
		let row = table.insertRow(i)
		for(let j=0j<cn;j++){
			let col = row.insertCell(j)
			col.innerText = `Row-${i} Column-${j}`;
		}
	}
}
