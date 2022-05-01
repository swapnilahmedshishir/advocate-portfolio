let send = document.getElementById('submit');
send.addEventListener('click', function(e){
    e.preventDefault();
    let email = document.getElementById('email').value;
    let name = document.getElementById("name").value;
    let subject = document.getElementById('subject').value ;
    let country = document.getElementById('country').value ;
    let message = document.getElementById("message").value;

    Email.send({
        Host : "Smtp.gmail.com",
        Username : "swapnilahmedshishir2018@gmail.com",
        Password : "pjskpznnqniuupsi",
        To :"bdnews30d@gmail.com",
        From : email ,
        Subject : "ADV MIZAN Give Question Answer",
        Body : 'Name : ' + name + "<br> Email : " + email + "<br> Description : " + message
}).then(
message => document.getElementById('para').innerHTML= "message sent successfully"
);
});