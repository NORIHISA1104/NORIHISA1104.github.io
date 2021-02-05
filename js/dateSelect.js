function table_scroll(){
/*
document.getElementById("target").scrollIntoView(true)

*/


    let tgt;
    if ('scrollingElement' in document) {
        tgt = document.scrollingElement;
    } else if (this.browser.isWebKit) {
        tgt = document.body;
    } else {
        tgt = document.documentElement;
    }
    tgt.scrollTop = 300;


/*
    var element = document.getElementById('target');
    var rect = element.getBoundingClientRect();
    var elemtop = rect.top + window.pageYOffset;
//    alert(elemtop);
    document.documentElement.scrollTop = elemtop;
*/

console.log(document.documentElement.scrollTop);


//	scrollTo(100, 200);

//	var L = document.getElementById('LAYER');
//	var T = L.getElementsByTagName('table')[0];
//	L.scrollTop = T.offsetTop + T.rows[20].cells[0].offsetTop;
}

function goDateSelect(){
	location.href = "dateSelect.html";
}