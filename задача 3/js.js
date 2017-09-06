document.getElementById('find').onclick = f1;
function f1() {
    var num, out;
    num = document.getElementById('flat').value;
    out = document.getElementById('out');
    if (num >= 1 && num <= 20){
        out.innerHTML = "Квартира находится в 1 подъезде";
    }
    else if (num >=21 && num <= 64){
        out.innerHTML = "Квартира находится во 2 подъезде";
    }
    else{
        if (num <= 80){
        out.innerHTML = "Квартира находится в 3 подъезде";
        }
        else out.innerHTML = "Квартира находится не в этом жилом комплексе";
    }
}