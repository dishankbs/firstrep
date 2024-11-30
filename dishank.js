console.log("i am dishank")
document.getElementById('loginform').addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

//mock credentials
const mockusername = "user";
const mockpassword ="123";

if(username===mockusername && password===mockpassword)
{
    alert("login successful");
    window.location.href="https://www.wikipedia.org/";//redirect url

}
else{
    alert("invalid username or password.");
}

});