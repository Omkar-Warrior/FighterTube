
let username=localStorage.getItem('username')
let password=localStorage.getItem('password')

let user=prompt('Enter Username := ')
let pwd=prompt('Enter Password := ')
if(username===user && password===pwd)
    document.writeln("<h1 style='color:green;text-align: center;background-color: lightgreen;padding: 20px;'>Login Successfull</h1>")
else
        document.writeln("<h1 style='color:red;text-align: center;background-color:bisque;padding: 20px;'>Access Denied</h1>")