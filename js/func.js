function getValueById(fieldId){
    const getvalue=document.getElementById(fieldId).value;
    const value=parseFloat(getvalue);

 return value;
}

function Triangle(){

    const triangle=0.5*getValueById('triangle1')*getValueById('triangle2');
    return triangle;
}
function Rectangle(){

    const rectangle=getValueById('rectangle1')*getValueById('rectangle2');
   
    return rectangle;
}
function parallelogram(){

    const parallelogram=getValueById('parallelogram1')*getValueById('parallelogram2');
   
    return parallelogram;
}

// check input field mull ...........

  function inputEvent(button,field1,field2){
    const field11=document.getElementById(field1);
    const field22=document.getElementById(field2);
    const button1=document.getElementById(button);

    function checkNUll(){
        var field1value=field11.value;
        var field2value=field22.value;
           
        if(!isNaN(field2value) && !isNaN(field1value) && field1value!=='' && field2value!=='' ){
          button1.disabled = false;
        }
       else{
           button1.disabled = true;
       }
       }
field11.addEventListener("input",checkNUll);
field22.addEventListener("input",checkNUll);

 }

 inputEvent('rectangleBtn','rectangle1','rectangle2');
 inputEvent('rectangleBtn','rectangle1','rectangle2');
 inputEvent('parallelogramBtn','parallelogram1','parallelogram2');




