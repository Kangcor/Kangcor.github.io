$( document ).ready(function() {

	var oTable = $('#combTable');
	
	for(i=0;i<=6666;i++)
	{
		var sRow = '<tr>';
		sRow += "<td id='cell_"+i+"'>"+i+"<td class='glyphicon glyphicon-ok'></span>"+"</td>";
		sRow += "<td class='glyphicon glyphicon-remove'></span>";
		sRow += '</tr>';
		oTable.append(sRow);
	}

});

