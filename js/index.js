function goReserve(){
	location.href = "reserve.html";
}

function changeContents(readItem, editItem, editDate){
	document.getElementById(readItem).style.display = "none";
	document.getElementById(editItem).style.display = "table";
	document.getElementById(editDate).innerText = "";
}