function getNumber(num){
    // console.log(num)
    var disp = document.getElementById('display');
    disp.innerHTML += num;
}


function clearResult(){
    var disp = document.getElementById('display');
    disp.innerHTML = "";
}

function getResult(){
    var disp = document.getElementById('display');
    disp.innerHTML = eval(disp.innerHTML);
}