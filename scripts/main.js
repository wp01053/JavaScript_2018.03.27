
function getIDPW(){
var id =prompt('ID 입력','');
var password = prompt(id + '가 사용할 초기 비번 입력','');
localStorage.setItem('id',id);
localStorage.setItem('password',password);
}
var password = localStorage.getItem('password');
if(!password){
getIDPW();
}

//Password?
var passwordSystem = '12345'
var password = prompt('PW 입력','')
if (password ===passwordSystem){
    alert('로그인 성공')
    var id = localStorage.getItem('id');
var heading= document.querySelector('h1');
heading.innerHTML = id + 'HomePage';
    
}
else alert('로그인 실패')
       
var myButton = document.querySelector('button');
myButton.onclick = function (){  
         getIDPW();  
    }  
   