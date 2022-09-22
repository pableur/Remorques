// Empty JS for your own code to be here    

document.getElementById('addVehicule').onclick = addNewVehicule;
addVehicule("Vehicule 1", "2000kg", "B", "1500kg");
addVehicule("Vehicule 2", "2300kg", "B", "1000kg");
addVehicule("Vehicule 3", "1800kg", "B", "1600kg");




function addNewVehicule() {
	addVehicule(document.getElementById('form_name').value, 
	document.getElementById('form_ptac').value, 
	document.getElementById('form_permis').value, 
	document.getElementById('form_charge').value);
}



function addVehicule(name, ptac, permis, load) {
	var myTable = document.getElementById('tableVehicule');
	
	var newRow = document.createElement("tr");
	var cellName = document.createElement("th");
	cellName.textContent = name;
	newRow.appendChild(cellName);
	
	var cellPTAC= document.createElement("th");
	cellPTAC.textContent = ptac;
	newRow.appendChild(cellPTAC);
	
	var cellPErmis= document.createElement("th");
	cellPErmis.textContent = permis;
	newRow.appendChild(cellPErmis);
	
	var cellLoad= document.createElement("th");
	cellLoad.textContent = load;
	newRow.appendChild(cellLoad);
	
    myTable.appendChild(newRow);

	document.myTable.insertBefore(newRow)
}
