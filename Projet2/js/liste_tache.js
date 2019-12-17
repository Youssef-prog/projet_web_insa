function diffString(string1, string2){
	var diff;
	var split1 = string1.split('-');
	var split2 = string2.split('-');
	var tmpDiffY = parseInt(split1[0])-parseInt(split2[0]);
	var tmpDiffM = parseInt(split1[1])-parseInt(split2[1]);
	var tmpDiffD = parseInt(split1[2])-parseInt(split2[2]);
	if(tmpDiffY > 0 || (tmpDiffY==0 && tmpDiffM>0) || (tmpDiffY == 0 && tmpDiffM == 0 && tmpDiffD>0)){	
		var charY = tmpDiffY.toString();
		var charM = tmpDiffM.toString();
		var charD = tmpDiffD.toString();
		diff = charY +'y ' + charM + 'm ' + charD+ 'd';
		return diff;
	}else{
		diff='no valid date';
		window.alert("Votre tache a expiré !");
		return diff;
		
	}

}




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

	}
}






