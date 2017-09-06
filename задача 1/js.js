document.getElementById('know').onclick = f1;
function f1(){
    var y = document.getElementById('year').value;
    var rez = 2017 - y;
    document.getElementById('out').innerHTML = rez;
}