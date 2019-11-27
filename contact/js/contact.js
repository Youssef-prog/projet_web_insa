function check(){
    fname = document.getElementById("first_name");
    lname = document.getElementById("last_name");
    email = document.getElementById("email");
    console.log(fname);
    console.log(lname);
    console.log(email);
    if(fname === null || lname === null || email === null){
        window.alert("please fill all the form");
    }
}