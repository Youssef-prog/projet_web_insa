function check(){
    fname = document.getElementById("first_name").value;
    lname = document.getElementById("last_name").value;
    email = document.getElementById("email").value;

    if(fname === "" || lname === "" || email === ""){
        window.alert("please fill all the form");
    }
}