const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");


buttons.forEach((item)=>{

    item.onclick=()=>{
        if(item.id=="clear")
        {
            display.innerText="";
        }
        
        
        else if(item.id=="borrar")
        {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1) //esto es para borrar elemento del ultimo acia la izquierda con el lenght
        }
        
        
        
        else if(display.innerText !="" && item.id=="igual")
        {
            //let cadena = "2+2"
            //
            display.innerText= eval(display.innerText) //el eval  trabaja con datos string en este cas seran numeros y apesar de eso los trabajara como numero s pero siendo string
            
        }else if(display.innerText=="" && item.id=="igual")
        {
            display.innerText="Null";
            setTimeout(()=>(display.innerText=""),2000);
            
        }else{
            display.innerText+=item.id;

        }



    }
});