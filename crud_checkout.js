
	var myData = [];

	var	table  = document.getElementById("table");
	var rIndex;

	show_my_data(myData);
	
	$("#save").on("click", function(){
		
		var newData = [];
		var my_info = [];
		
		my_info.push(document.getElementById('pdct_name').value);
		my_info.push(document.getElementById('pdct_price').value);
		my_info.push(document.getElementById('pdct_quantity').value);
		my_info.push((document.getElementById('pdct_price').value)*(document.getElementById('pdct_quantity').value));
			
		newData.push(my_info);
		show_my_data(newData);
		document.getElementById('status').innerText = "A new record added successfuly!";
	});

	$("#remove").on("click", function(){
		delete_my_data(myData)
	});
	$("#update").on("click", function(){
		edit_my_info(myData);
	});

	function show_my_data(myData){
		for (var i = 0; i < myData.length; i++)
		{
			var newRow = table.insertRow(table.length);
			for (var j = 0; j < myData[i].length; j++)
			{
				var cell = newRow.insertCell(j);
				cell.innerHTML = myData[i][j];
			}
			document.getElementById("pdct_name").value = "";
			document.getElementById("pdct_price").value = "";
			document.getElementById("pdct_quantity").value = "";

			edit_data_row(myData)
		}
	}

	function edit_data_row(myData){
		
		for (var i = 1;i < table.rows.length; i++) {
			table.rows[i].onclick = function(){
				rIndex = this.rowIndex;
				document.getElementById("pdct_name").value = this.cells[0].innerHTML;
				document.getElementById("pdct_price").value = this.cells[1].innerHTML;
				document.getElementById("pdct_quantity").value = this.cells[2].innerHTML;
			};
		}
	}

	function edit_my_info(myData){
		table.rows[rIndex].cells[0].innerHTML = document.getElementById("pdct_name").value;
		table.rows[rIndex].cells[1].innerHTML = document.getElementById("pdct_price").value;
		table.rows[rIndex].cells[2].innerHTML = document.getElementById("pdct_quantity").value;


		document.getElementById('status').innerText = "Record Updated successfuly!";
	}

	function delete_my_data(myData){

		table.deleteRow(rIndex);

		document.getElementById('status').innerText = "Record Deleted successfuly!";

		document.getElementById("pdct_name").value = "";
		document.getElementById("pdct_price").value = "";
		document.getElementById("pdct_quantity").value = "";
	}
	