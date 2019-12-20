//class date which has one constructor to set a day; month and a year
class date{
	constructor(jour, mois, year){
		this.jour = jour;
		this.month = mois;
		this.year = year;
	}
}


var numberTask =0;//the numbers of task


// function which return string which correspondes to a date and which is the difference between the two string whiche are also date
function diffString(string1, string2){
	var split1 = string1.split('-');//parse the string whith '-' because string format is 2019-12-10
	var split2 = string2.split('-');
	var ansplit1 = (parseInt(split1[0]) - 2010) *365; //calculate a number of day for the year, take the difference between the year an 2010 to have a reference and convert to int
	var monsplit1 = parseInt(split1[1]) * 30; //convert month to day and convert to int
	var daysplit1 = parseInt(split1[2]);//convert days to int
	var ansplit2 = (parseInt(split2[0]) - 2010) *365;
	var monsplit2 = parseInt(split2[1]) * 30;
	var daysplit2 = parseInt(split2[2]);

	var nbday1 = ansplit1 + monsplit1 + daysplit1;//calculate the total of the days
	var nbday2 = ansplit2 + monsplit2 + daysplit2;
	var diffday = nbday1 - nbday2;//calculate the difference in days between the two dates

	
	var dateF = new date(0,0,0);//create a date and initialise it with zeros

	if(diffday >= 0){//check idf the deadline is in future or not
		while(diffday > 365){//reconvert to years like doing a modulo
			diffday = diffday - 365;
			dateF.year = dateF.year +1;//add 1 to the year
		}while(diffday > 30){
			diffday = diffday - 30;
			dateF.month = datef.month +1;//add 1 to the month
		}
		dateF.jour = diffday;//take the numbers of days af the diference, it will be smaller than 30
		diff = dateF.year + "y " + dateF.month + "m " + dateF.jour +"d";//return a string with the date object values
		return diff;
		
	}else{//deadline is in the past
		diff='no valid date';//no day left
		window.alert("Votre tache a expiré !");//display an alert
		return diff;
		
	}

}
//main function which manage all the js and call others function
function main() {
	var txt = document.getElementById("userText").value;// value of the title in the text area
	var ul = document.querySelector("ul");
	var duration = document.getElementById("timeTask").value;//value of the duaration task which is a number
	var tab = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0';// just for the beauty of the display to add it in string
	var dateTime = document.getElementById("date").value;//value of the deadline of the task which is a date
	if(duration<= 0){
		window.alert("numbers of hours must be a positive number !");//check positivity of duration, do alert if not

	}
	else if(txt.length < 2){
		window.alert("task must be at least a string of two characters !");// check length of the title must be at least 2 chars, do alert if not
	}
	else{
		var li = document.createElement("li"); // create li element
		var text = document.createElement("text");// create text element
		text.setAttribute("style", "font-size:25px; color:white");//add css style to the html object it s like addind a aattribute to the html
		text.appendChild(document.createTextNode(txt));// adding the user text to the text element
		li.appendChild(text); //add the input text value in the li element
		ul.appendChild(li); //add the li to the ul
		txt.value = ""; //set the button field empty
		numberTask = numberTask + 1;//increment the task number

		//add the button to delete
		var deleteButton = document.createElement("button");//create the button
		deleteButton.setAttribute("style", "height:35px");//add css attribute
		deleteButton.appendChild(document.createTextNode("X"));//add the text on the button
		li.appendChild(deleteButton);//add it to the listincrement the task number
		deleteButton.addEventListener("click", deleteElement);//call the function delete when the button is clicked

		//add the button to update the current task
		var updatebutton = document.createElement("button");
		updatebutton.setAttribute("style", "height:35px");
		updatebutton.appendChild(document.createTextNode("Update"));
		li.appendChild(updatebutton);
		updatebutton.addEventListener("click", updateElement);

		//add timer for each task
		var time = document.createElement("text");
		time.setAttribute("style", "color:white");
		time.appendChild(document.createTextNode( tab+"duration : "+duration+ "h"));
		li.appendChild(time);

		//add day and hour for the task
		var mydate = document.createElement("text");
		mydate.setAttribute("style", "color:white");
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
			numberTask = numberTask - 1;
			document.getElementById("numbertask").innerHTML = numberTask;//decrement the task number
		}
		var state = 0;

		document.getElementById("numbertask").innerHTML = numberTask;//display the task number

		const array1 = [];
		array1.push(txt);//add the new title
		//display an the last element
		for (const element of array1) {
			document.getElementById("dtitre").innerHTML = element;
		}


		//function which display the text area for update and update the title of the current task
		function updateElement(){
			//check a state to display or not the text area for the update
			if(state == 0){
				//get the value of the text area
				var newtxt = document.getElementById("updatetext").value;
				//remove the current task title
				li.removeChild(text);
				//create the new title task
				var ntext = document.createElement("text");
				//put the same css in order to have the same display
				ntext.setAttribute("style", "float: left;font-size:25px; color:#f7e80b");
				//add the text
				ntext.appendChild(document.createTextNode(newtxt));
				//add to the element that is a task
				li.appendChild(ntext);
				ul.appendChild(li); //add the task to the list
				newtxt.value = ""; // reset the variable just to be sure that there is no char concatenation
				var tmpText = document.getElementById("updatetext");
				tmpText.setAttribute("style", "");// display it 
				state = 1;//update the state variable
			}else if(state == 1){ //do not display
				//hide the text area and the button
				var tmpText = document.getElementById("updatetext");
				tmpText.setAttribute("style", "display:none");
				state = 0;// update the state
			}
		}
	}
}


function shuffle(array) {
	array.sort(() => Math.random() - 0.5);
  }

function displayName(){
	var names = ['Developper : Yifan Wang','Developper : Yuyuan Yang','Developper : youssef Amari','Developper : Jean-Christophe Sanchez'];
	shuffle(names);
	for(i in names ){
			document.getElementById("devName").innerHTML = names[i];
		  }
	}






