function getpin(){
    const pin=genaretPIn();
    const pinstring=pin + '';

  if(pinstring.length===7)
  {
    return pin;
  }
  else{
    return getpin();
  }

}

function genaretPIn(){

    const randomNO= Math.round(Math.random()*10000000);
    
 return randomNO;   
}




function changeColor(cardId){

    document.getElementById(cardId).addEventListener('click',function(){
    
        let number = getpin();
        let hexStr = number. toString(16)
        const clrcode='#'+hexStr;
        const card1=document.getElementById(cardId);
        card1.style.backgroundColor=clrcode;
    })
}
changeColor('ellipse');
changeColor('pentagon');
changeColor('rhombus');
changeColor('parallelogram');
changeColor('rectangle');
changeColor('triangle');