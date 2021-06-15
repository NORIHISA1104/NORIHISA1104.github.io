function goReserve(){
	location.href = "reserve.html";
}

function changeContents(num){
	document.getElementById('readItem' + num).style.display = "none";
	document.getElementById('editItem' + num).style.display = "table";
	document.getElementById('editDate' + num).innerText = "";
	document.getElementById('editItemField' + num).focus();
}

/********************************
 * 表の一番下に行を追加
 * 引数：なし
 * 戻値：なし
 **********************************/
function addKyojusya() {
    var table = document.getElementById('kyojusya');  //表のオブジェクトを取得
 
    var row1 = table.insertRow(-1);
    var row2 = table.insertRow(-1);
    var row3 = table.insertRow(-1);
    var row4 = table.insertRow(-1);
    row1.className = 'height40'
    row2.className = 'height40'
    row3.className = 'height40'
    row4.className = 'height40'
    var cell1_1 = row1.insertCell(0);
    var cell1_2 = row1.insertCell(1);
    var cell1_3 = row1.insertCell(2);
    var cell1_4 = row1.insertCell(3);
    var cell2_2 = row2.insertCell(0);
    var cell2_3 = row2.insertCell(1);
    var cell2_4 = row2.insertCell(2);
    var cell3_2 = row3.insertCell(0);
    var cell3_3 = row3.insertCell(1);
    var cell3_4 = row3.insertCell(2);
    var cell4_2 = row4.insertCell(0);
    var cell4_3 = row4.insertCell(1);
    var cell4_4 = row4.insertCell(2);
    cell1_1.rowSpan = 4;
	cell1_1.className = 'contentsHead';
	cell1_2.className = 'contentsHead';
	cell1_3.className = 'contentsBody';
	cell1_4.className = 'contentsFoot';
	cell2_2.className = 'contentsHead';
	cell2_3.className = 'contentsBody';
	cell2_4.className = 'contentsFoot';
	cell3_2.className = 'contentsHead';
	cell3_3.className = 'contentsBody';
	cell3_4.className = 'contentsFoot';
	cell4_2.className = 'contentsHead';
	cell4_3.className = 'contentsBody';
	cell4_4.className = 'contentsFoot';

    cell1_1.innerHTML = '居住者';
    cell1_2.innerHTML = 'お名前';
    cell1_3.innerHTML = '<div class="contentsBodyBox"><div><input class="inputContents" type="text" placeholder="例）090-1234-5678" /></div></div>';
    cell1_4.innerHTML = '';
    cell2_2.innerHTML = '生年月日';
    var workHTML = '';
    workHTML = '<div class="contentsBodyBox"><div><select><option value="" default></option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option></select>年';
    workHTML = workHTML + '<select><option value="" default></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>月';
    workHTML = workHTML + '<select><option value="" default></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>日';
    workHTML = workHTML + '</div></div>';
    cell2_3.innerHTML = workHTML;
    cell2_4.innerHTML = '';
    cell3_2.innerHTML = '連絡先';
    cell3_3.innerHTML = '<div class="contentsBodyBox"><div><input class="inputContents" type="text" placeholder="例）090-1234-5678" /></div></div>';
    cell3_4.innerHTML = '';
    cell4_2.innerHTML = '勤務先';
    cell4_3.innerHTML = '<div class="contentsBodyBox"><div><input class="inputContents" type="text" placeholder="例）090-1234-5678" /></div></div>';
    cell4_4.innerHTML = '';
}


$('#text4').focus(function(){
    $('.password_box').animate({borderTopColor: '#3be5ae', borderLeftColor: '#3be5ae', borderRightColor: '#3be5ae', borderBottomColor: '#3be5ae'}, 200);
}).blur(function(){
    $('.password_box').animate({borderTopColor: '#d3d3d3', borderLeftColor: '#d3d3d3', borderRightColor: '#d3d3d3', borderBottomColor: '#d3d3d3'}, 200);
});



function addKyojusya2() {
	for(var i=2; i<=5; i++){
		if(document.getElementById("kyojusya" + i).style.display == "none"){
			document.getElementById("kyojusya" + i).style.display = "block";
			break;
		}
	}
}

function deleteRow(){
	document.getElementById("row1").style.display = 'none';
	document.getElementById("row2").style.display = 'none';
	document.getElementById("row3").style.display = 'none';
	document.getElementById("row4").style.display = 'none';
}