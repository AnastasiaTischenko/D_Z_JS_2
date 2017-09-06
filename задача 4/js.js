document.getElementById('press').onclick = f1;
function f1(){
    var inp1, inp2;
    inp1 = document.getElementById('log').value;
    inp2 = document.getElementById('pas').value;
    if (inp1 == 'ivan' && inp2 == '333' || inp1 == 'ssss' && inp2 == '666' || inp1 == 'gibs' && inp2 == '0000'){
        alert('Добро пожаловать!');
    }
    else {
        alert('**ошибка**');
    }
}