
function addToList() {
	var enterButton = document.getElementById("add");
	var txt = document.getElementById("userText").value;
	var ul = document.querySelector("ul");
	var item = document.getElementsByTagName("li"); 
	var duration = document.getElementById("timeTask").value;
	var tab = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0';
	var dateTime = document.getElementById("date").value;

	if(duration<= 0){
		window.alert("numbers of hours must be a positive number !");

	}
	else if(txt.length < 2){
		window.alert("task must be at least a string of two characters !");
	}
	else{
		var li = document.createElement("li"); // creates an element "li"
		li.appendChild(document.createTextNode(txt)); //add the input text value in the li element
		ul.appendChild(li); //add the li to the ul
		txt.value = ""; //set the button field empty

		//add the button to delete
		var deleteButton = document.createElement("button");
		deleteButton.appendChild(document.createTextNode("X"));
		li.appendChild(deleteButton);
		deleteButton.addEventListener("click", deleteElement);

		//add timer for each task
		var time = document.createElement("text");
		time.appendChild(document.createTextNode( tab+"duration : "+duration+ "h"));
		li.appendChild(time);

		//add day and hour for the task
		var mydate = document.createElement("text");
		mydate.appendChild(document.createTextNode(tab+dateTime));
		li.appendChild(mydate);


		//time remaining
		/*var today = new Date();
		var currentTime = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDay();
		console.log(currentTime);
		var dateTimeD = new Date();
		dateTimeD = dateTime;
		console.log(dateTimeD);
		console.log(typeof(dateTimeD));
		console.log(typeof(currentTime));
		var timeR = dateTimeD - currentTime;
		var timeRemain = document.createElement("text");
		timeRemain.appendChild(document.createTextNode(tab+"time remainning (day): "+timeR));
		li.appendChild(timeRemain);*/
		
		//function who delete the element in the list
		function deleteElement(){
			li.classList.add("delete");
		}
	
	}
}






