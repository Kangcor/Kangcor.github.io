$( document ).ready(function() {

	var oTable = $('#combTable');
	
	for(i=0;i<=6666;i++)
	{
		var sRow = '<tr>';
		sRow += "<td id='cell_"+i+"'>"+i+"</td>";
		sRow += '</tr>';
		oTable.append(sRow);
	}

});

