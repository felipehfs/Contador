"use strict";
var app = (function(){
    var count = 0;
    var requestID;
    var running = false;
    
    function counter(){
        var timer = document.querySelector('#date-saida');
        timer.textContent = count.toString();
        count++;
        var color = count % 2 == 0? "white": "rgba(255, 255, 255, 0.6)";
        timer.style.color = color;
        requestID = requestAnimationFrame(counter);
    }
    
    return {
        init: function(){
            document.querySelector('#date-saida').textContent = "0";
            
            document.querySelector("#date-saida").onclick = function(){
                if(running){
                    cancelAnimationFrame(requestID);
                }else{
                    counter();
                }
               running = !running;
            }
        }
    };
})();
app.init();