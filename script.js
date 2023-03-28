const displayBox= document.querySelector(".display")
const keys=document.querySelectorAll(".show-display")
function showdisplay(event){
    const x = event.target.innerText;
    if(displayBox.innerText ==  0){
        return displayBox.innerHTML=x;
    }
    return displayBox.innerHTML += x;
}
function calculate(){
 const result= displayBox.innerText;
 displayBox.innerText = eval(result)
}
function allClear(){
    displayBox.innerText = 0;
}
function clearLast(){
 const value = displayBox.innerText;
 if( value.length == 1){
    displayBox.innerText = 0;
 }else{
    displayBox.innerText = value.substring(0 , value.length - 1);
 }
}

document.querySelector(".clear-last").addEventListener("click" , clearLast)
document.querySelector(".all-clear").addEventListener("click" , allClear)
document.querySelector(".calculate").addEventListener("click",calculate)
keys.forEach(item => {
    item.addEventListener("click" , showdisplay )
});
