function table_scroll(){
	var L = document.getElementById('LAYER');
	var T = L.getElementsByTagName('table')[0];
	L.scrollLeft = T.offsetLeft + T.rows[30].cells[0].offsetLeft;
}

function goDateSelect(){
	location.href = "dateSelect.html";
}