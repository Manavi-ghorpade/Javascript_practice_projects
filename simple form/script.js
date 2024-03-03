document.getElementById("form").addEventListener('submit' , function(e){
    e.preventDefault();
    var name= document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('msg');

    document.getElementById('msg').innerHTML= ("name= "+name+" email= "+email);
})