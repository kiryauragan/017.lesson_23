window.onload= function () {
	let table = document.getElementById("myTable");
	for (let y = 0; y < 11; y++) {
		let row = table.insertRow(y);
		for (x = 0; x < 11; x++) {
			let cell = row.insertCell(x);
			if (y === 0 && x === 0) {
				cell.style.width = "50px";
			} else if (y === 0 && x > 0) {
				cell.className = "cellColor";
				cell.innerHTML = x;
				cell.style.width = "50px";
			} else if (y > 0 && x === 0) {
				cell.className = "cellColor";
				cell.innerHTML = y;
			} else {
				cell.innerHTML = y * x;
			}
		}
	}
	document.body.appendChild(table);
};

