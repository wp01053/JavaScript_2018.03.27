var myHeading = document.querySelector('h1');
var id = localStorage.getItem('id');
myHeading.innerHTML = id +'HomePage';

function getIdPw(){
    var iceCream = 'chocolate';
    var id = prompt('ID 입력','');
    alert(id +'가 로그인함.');
    localStorage.setItem('id', id);
    var passwordSystem = '12345'
    var password = prompt('PW 입력','')
    if (password ===passwordSystem)
    alert('정상로그인!');
    else alert('비밀번호 오류');
    
}
getIdPw();

document.querySelector('h1').onclick = function(){
    getIdPw();
}
var myImg = document.querySelector('img');
myImg.onclick =function(){
    var src = myImg.getAttribute('src')
    if(src === 'images/firefox-icon.png')
    myImg.setAttribute('src', 'images/mokwon.png');
    else
    myImg.setAttribute('src', 'images/firefox-icon.png');    

}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
myButton.onclick = function(){
    getIdPw();
}
