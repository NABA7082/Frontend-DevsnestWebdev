var coloured = [];
let booked = 0;
let remain = 36;

for(let i=0;i<36;i++){
    coloured[i] = 0;
}
function solve(selectClass){
    let n = selectClass[4];
    let elem = document.getElementsByClassName(selectClass);
    console.log(elem);

    if(coloured[n]==0){
        coloured[n] = 1;
        booked = booked+1;
        remain = remain-1;
        document.querySelector(".number-1").innerHTML = booked;
        document.querySelector(".number-2").innerHTML = remain;
        elem[0].style.backgroundColor = "rgb(214, 32, 154)";
    }
    else{
        coloured[n] = 0;
        booked = booked-1;
        remain = remain+1;
        document.querySelector(".number-1").innerHTML = booked;
        document.querySelector(".number-2").innerHTML = remain;
        elem[0].style.backgroundColor = "cyan";

    }
}


document.getElementsByClassName("box-container").style.backgroundColor = 'green' ; 
