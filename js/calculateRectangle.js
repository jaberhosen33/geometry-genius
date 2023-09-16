


    document.getElementById('rectangleBtn').addEventListener('click',function(){

 
        
   
        const result=document.getElementById('result');
        
        const li=document.createElement('li')
        const button=document.createElement('button');
        li.innerText = 'Rectanglee';
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
        span1.innerText=Rectangle();
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
       
       
        document.getElementById('rectangle1').value='';
        document.getElementById('rectangle2').value='';
     
    })
    







