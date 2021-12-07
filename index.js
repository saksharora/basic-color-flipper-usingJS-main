let letter = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];

let btn = document.querySelector('.btn');
let color = document.querySelector('.color');

function changeColor(){
    let hex = '#';
    for(let i=0;i<6;i++){
    let k = (Math.floor((Math.random())*100))%16;
    hex += letter[k];
    }
    return hex;
}

const element = document.createElement('h2');
element.textContent = 'Color : #ad6565' ;
color.appendChild(element);
element.classList.add('coloradd');
btn.addEventListener('click',function(){
    // console.log(changeColor());
    document.body.style.backgroundColor = changeColor() ;
    if(color.textContent){
        const element = document.createElement('h2');
        color.removeChild(color.childNodes[0]);
        element.textContent = 'Color : '+ changeColor()  ;
        color.appendChild(element);
        element.classList.add('coloradd');
        
    }
    else{
        const element = document.createElement('h2');
        element.textContent = 'Color :'+ changeColor()  ;
        color.appendChild(element);
        element.classList.add('coloradd');
    }
});
