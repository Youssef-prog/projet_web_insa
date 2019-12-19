class date{
	constructor(jour, mois, year){
		this.jour = jour;
		this.month = mois;
		this.year = year;
	}
}


function diffString(string1, string2){
	var split1 = string1.split('-');
	var split2 = string2.split('-');
	var ansplit1 = (parseInt(split1[0]) - 2010) *365;
	var monsplit1 = parseInt(split1[1]) * 30;
	var daysplit1 = parseInt(split1[2]);
	var ansplit2 = (parseInt(split2[0]) - 2010) *365;
	var monsplit2 = parseInt(split2[1]) * 30;
	var daysplit2 = parseInt(split2[2]);

	var nbday1 = ansplit1 + monsplit1 + daysplit1;
	var nbday2 = ansplit2 + monsplit2 + daysplit2;
	var diffday = nbday1 - nbday2;

	
	var dateF = new date(0,0,0);

	if(diffday >= 0){
		while(diffday > 365){
			diffday = diffday - 365;
			dateF.year = dateF.year +1;
		}while(diffday > 30){
			diffday = diffday - 30;
			dateF.month = datef.month +1;
		}
		dateF.jour = diffday;
		diff = dateF.year + "y " + dateF.month + "m " + dateF.jour +"d";
		return diff;
		
	}else{
		diff='no valid date';
		window.alert("Votre tache a expiré !");
		return diff;
		
	}

}

function main() {
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
		var li = document.createElement("li"); // create li element
		var text = document.createElement("text");// create text element
		text.setAttribute("style", "font-size:25px; color:green");//add css style to the html object it s like addind a aattribute to the html
		text.appendChild(document.createTextNode(txt));// adding the user text to the text element
		li.appendChild(text); //add the input text value in the li element
		ul.appendChild(li); //add the li to the ul
		txt.value = ""; //set the button field empty

		//add the button to delete
		var deleteButton = document.createElement("button");
		deleteButton.setAttribute("style", "height:35px");
		deleteButton.appendChild(document.createTextNode("X"));
		li.appendChild(deleteButton);
		deleteButton.addEventListener("click", deleteElement);

		//add the button to update the current task
		var updatebutton = document.createElement("button");
		updatebutton.setAttribute("style", "height:35px");
		updatebutton.appendChild(document.createTextNode("Update"));
		li.appendChild(updatebutton);
		updatebutton.addEventListener("click", updateElement);

		//add timer for each task
		var time = document.createElement("text");
		time.setAttribute("style", "");
		time.appendChild(document.createTextNode( tab+"duration : "+duration+ "h"));
		li.appendChild(time);

		//add day and hour for the task
		var mydate = document.createElement("text");
		mydate.setAttribute("style", "color:" + "blue");
		mydate.appendChild(document.createTextNode(tab+dateTime));
		li.appendChild(mydate);


		//time remaining
		var today = new Date();
		var currentTime = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		//console.log(currentTime);
		var timeR = diffString(dateTime, currentTime);
		//console.log(timeR);
		var timeRemain = document.createElement("text");
		timeRemain.setAttribute("style", "color:red;float:right");
		timeRemain.appendChild(document.createTextNode(tab+"time remainning : "+timeR));
		li.appendChild(timeRemain);
		
		//function who delete the element in the list
		function deleteElement(){
			li.classList.add("delete");
		}
		var state = 0;
		function updateElement(){
			if(state == 0){
				

				var newtxt = document.getElementById("updatetext").value;
				li.removeChild(text);
				var ntext = document.createElement("text");
				ntext.setAttribute("style", "float: left;font-size:25px; color:green")
				ntext.appendChild(document.createTextNode(newtxt));
				li.appendChild(ntext); //add the input text value in the li element
				ul.appendChild(li);
				newtxt.value = "";
				var tmpText = document.getElementById("updatetext");
				tmpText.setAttribute("style", "");
				state = 1;
				console.log(newtxt);
				console.log(ntext);
			}else if(state == 1){
				//hide the text area and the button
				var tmpText = document.getElementById("updatetext");
				tmpText.setAttribute("style", "display:none");
				state = 0;
			}
		}
	}
}


