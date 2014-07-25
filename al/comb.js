$( document ).ready(function() {

	var oTable = $('#combTable');
	
	for(i=0;i<=6666;i++)
	{
		var sRow = '<tr>';
		sRow += "<td id='cell_"+i+"'>"+i;
		sRow +="<span class='glyphicon glyphicon-ok'></span>"
		sRow += "<span class='glyphicon glyphicon-remove'></span>";
		sRow += '</td></tr>';
		oTable.append(sRow);
	}

});

