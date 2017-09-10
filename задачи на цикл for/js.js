//1
for (var i = 0; i <= 101; i +=2){
    document.getElementById('out1').innerHTML += "  " + i;
}

//2
for (var i = 200; i >= 0; i--){
    document.getElementById('out2').innerHTML += " " + i;
}

//3
var s = 0;
for (var i = 0; i <= 100; i++){
    s += i;
}
    document.getElementById('out3').innerHTML = s;

//4
document.getElementById('result').onclick = f1;
function f1(){
    var a, b;
    var p = 1;
    a = document.getElementById('num').value;
    b = document.getElementById('degree').value;
    for (var i = 1; i <= b; i++){
        p = p * a;
    }
    document.getElementById('out4').innerHTML = p;
}

//5
var k = 1;;
for (var i = 1; i < 10; i++){
    k = i * 7;
    document.getElementById('out5').innerHTML += "<br>" + i + "*" + "7 = " + k;
}

//6
k = 1;
for (var i = 1; i <= 50; i++){
    k = k * i;
}
document.getElementById('out6').innerHTML = k;

//7
var z = "&#";
for (var i = 1000; i < 2001; i++){
    document.getElementById('out7').innerHTML += "<br>" + z + i;
}



