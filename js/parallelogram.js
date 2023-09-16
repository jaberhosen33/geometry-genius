document.getElementById('parallelogramBtn').addEventListener('click',function(){

 
        
   
    const result=document.getElementById('result');
    
    const li=document.createElement('li')
    const button=document.createElement('button');
    li.innerText = 'Parallelogram';
    li.style.marginTop='10px';
    button.innerText='Remove';
    button.classList.add("btn");
    button.classList.add("btn-info");
    button.style.marginLeft='10px';
    button.setAttribute('id','convertBtn');
    // button.style.marginLeft='2px';
    const span1=document.createElement('span');
    const span=document.createElement('span');
    const hr=document.createElement('hr');
    span.innerText='cm'
    const squre=document.createElement('sup')
    squre.innerText='2';
    span1.innerText=parallelogram();
    span1.style.paddingLeft='5px';
    span.style.paddingLeft='5px';
  


    result.appendChild(li);
   
    li.appendChild(span1);
    li.appendChild(span);
    li.appendChild(squre);
    li.appendChild(button);
    li.appendChild(hr);
  
  
   
        document.getElementById('convertBtn').addEventListener('click',function(){
            li.remove();
        })
   
   
    document.getElementById('parallelogram1').value='';
    document.getElementById('parallelogram2').value='';
 
})