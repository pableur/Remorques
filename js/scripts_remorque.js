// Empty JS for your own code to be here    


document.getElementById('addRemorque').onclick = addNewRemorque;
addRemorque("Remorque 1", "1.2m", "B", "1500kg");
addRemorque("Remorque 2", "3m", "B", "1000kg");
addRemorque("Remorque 3", "2m", "B", "1600kg");

function addNewRemorque() {
	addRemorque(document.getElementById('form_name').value, 
	document.getElementById('form_longueur').value, 
	document.getElementById('form_permis').value, 
	document.getElementById('form_charge').value);
}

function addRemorque(name, longueur, permis, load) {
	var myTable = document.getElementById('tableRemorques');
	
	var newRow = document.createElement("tr");
	var cellName = document.createElement("th");
	cellName.textContent = name;
	newRow.appendChild(cellName);
	
	var cellLongueur= document.createElement("th");
	cellLongueur.textContent = longueur;
	newRow.appendChild(cellLongueur);
	
	var cellPErmis= document.createElement("th");
	cellPErmis.textContent = permis;
	newRow.appendChild(cellPErmis);
	
	var cellLoad= document.createElement("th");
	cellLoad.textContent = load;
	newRow.appendChild(cellLoad);
	
    myTable.appendChild(newRow);
}