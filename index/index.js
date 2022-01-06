function check()
{
    let name = document.getElementById("user").value;
    let pass = document.getElementById("password").value;
    let users = ["Ron","Yulia,Igor"];
    let passwords = ["12345","12345,12345"];
    flag= false
    for(i=0; i<3;i++)
    if(name == users[i] && pass == passwords[i])
    {flag= true;
        location.replace("menu.html");
    }
    if(flag=false)
    alert("user or password Incorrect")
}

