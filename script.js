var elements = document.getElementsByClassName("btn-rm");


Array.from(elements).forEach(function(element) {
    element.addEventListener('click', remove);
  });

  function remove(e){
    var td = e.target.parentNode.parentNode.parentNode.parentNode; 
    var tr = td.parentNode; 
    tr.parentNode.removeChild(tr);

  }
  var elements = document.getElementsByClassName("like");


Array.from(elements).forEach(function(element) {
    element.addEventListener('click', liked);
  });

  
  function liked(e){
   
        if(e.target.style.color='black' ){
            e.target.style.color='crimson'
            }       
  }

  var elements = document.getElementsByClassName("btn-pl");


Array.from(elements).forEach(function(element) {
    element.addEventListener('click', plus);
  });

  function plus(e){
      a = e.target.className
      if (a=='btn-pl 1'){
          let b = document.getElementById('h4-1').textContent
          b= parseInt(b)+1
          document.getElementById('h4-1').textContent =b
          
          
         let p = document.getElementById('p1').textContent
          p=parseInt(p)*b
          p=p+'$'
          document.getElementById('t1').textContent=p
          subtotal() }





            if (a=='btn-pl 2'){
                let b = document.getElementById('h4-2').textContent
                b= parseInt(b)+1
                document.getElementById('h4-2').textContent =b
                
                
               let p = document.getElementById('p2').textContent
                p=parseInt(p)*b
                p=p+'$'
                document.getElementById('t2').textContent=p
                subtotal()  }


                  if (a=='btn-pl 3'){
                    let b = document.getElementById('h4-3').textContent
                    b= parseInt(b)+1
                    document.getElementById('h4-3').textContent =b
                    
                    
                   let p = document.getElementById('p3').textContent
                    p=parseInt(p)*b
                    p=p+'$'
                    document.getElementById('t3').textContent=p
                    subtotal()  }



                      if (a=='btn-pl 4'){
                        let b = document.getElementById('h4-4').textContent
                        b= parseInt(b)+1
                        document.getElementById('h4-4').textContent =b
                        
                        
                       let p = document.getElementById('p4').textContent
                        p=parseInt(p)*b
                        p=p+'$'
                        document.getElementById('t4').textContent=p
                        subtotal()  }
            
  }
  var elements = document.getElementsByClassName("btn-mn");


Array.from(elements).forEach(function(element) {
    element.addEventListener('click', minus);
  });

  function minus(e){
    a = e.target.className
    if (a=='btn-mn 1'){
        let b = document.getElementById('h4-1').textContent
        b= parseInt(b)-1
        document.getElementById('h4-1').textContent =b
        
        
       let p = document.getElementById('p1').textContent
        p=parseInt(p)*b
        p=p+'$'
        document.getElementById('t1').textContent=p
        subtotal() }





          if (a=='btn-mn 2'){
              let b = document.getElementById('h4-2').textContent
              b= parseInt(b)-1
              document.getElementById('h4-2').textContent =b
              
              
             let p = document.getElementById('p2').textContent
              p=parseInt(p)*b
              p=p+'$'
              document.getElementById('t2').textContent=p
              subtotal() }


                if (a=='btn-mn 3'){
                  let b = document.getElementById('h4-3').textContent
                  b= parseInt(b)-1
                  document.getElementById('h4-3').textContent =b
                  
                  
                 let p = document.getElementById('p3').textContent
                  p=parseInt(p)*b
                  p=p+'$'
                  document.getElementById('t3').textContent=p
                  subtotal() }



                    if (a=='btn-mn 4'){
                      let b = document.getElementById('h4-4').textContent
                      b= parseInt(b)-1
                      document.getElementById('h4-4').textContent =b
                      
                      
                     let p = document.getElementById('p4').textContent
                      p=parseInt(p)*b
                      p=p+'$'
                      document.getElementById('t4').textContent=p
                      subtotal() }
          
}

function subtotal(){
    let a=document.getElementById('sub').textContent
    let t1 = document.getElementById('t1').textContent
    let t2 = document.getElementById('t2').textContent
    let t3 =  document.getElementById('t3').textContent
    let t4 =  document.getElementById('t4').textContent
    a = parseInt(t1)+parseInt(t2)+parseInt(t3)+parseInt(t4)+'$'
    document.getElementById('sub').textContent = a
}
