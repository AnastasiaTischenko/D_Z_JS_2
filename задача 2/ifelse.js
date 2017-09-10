document.getElementById('click').onclick = f1;
function f1(){
    var frst, scnd;
    frst = document.getElementById('first').value;
    scnd = document.getElementById('second').value;
    out = document.getElementById('out');
    if (Number(frst) > Number(scnd)) {
        out.innerHTML = frst + ">" + scnd;
    }
    else if (Number(scnd) > Number(frst)) {
        out.innerHTML = scnd + ">" + frst;
    }
    else {
        out.innerHTML = frst + "=" + scnd;
    }
}