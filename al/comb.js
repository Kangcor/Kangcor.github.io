$( document ).ready(function() {

	var oTable = $('#combTable');
	
	for(i=0;i<=6666;i++)
	{
		var sRow = '<tr>';
		sRow += "<td id='cell_"+i+"'>"+i+"<span class='glyphicon glyphicon-ok'></span><span class='glyphicon glyphicon-remove'></span>"+"</td>";
		sRow += "<td><span class='glyphicon glyphicon-remove'></span></td>";
		sRow += "<td><span class='glyphicon glyphicon-ok'></span></td>";
		sRow += "<td><span class='glyphicon glyphicon-remove'></span></td>";
		sRow += '</tr>';
		oTable.append(sRow);
	}

});

