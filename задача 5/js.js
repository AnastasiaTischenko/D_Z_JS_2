document.getElementById('pres').onclick = maxFun;
function maxFun(){
    var i, j, k, max;
    i = document.getElementById('num-1').value;
    j = document.getElementById('num-2').value;
    k = document.getElementById('num-3').value;
    if (Number(i) > Number(j) && Number(i) > Number(k)){
        max = i;
    }
    else if (Number(j) > Number(k) && Number(j) > Number(i)){
        max = j;
    }
    else {
        max = k;
    }
    document.getElementById('out').innerHTML = "max number = " + max;
}