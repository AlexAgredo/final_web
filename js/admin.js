function loginFunc(e) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var result = document.getElementById('result');

    username = "Javi";
    password = 1234;

    
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);

    if(username === "Javi" && password === 1234){
        result.innerHTML = 'ENTRASTE';
    }else{
        result.innerHTML = 'GAY';
    }
}