//function Hello(){
//    console.log("Hello");
//}
// setTimeout -> 1 udaa ajilna
//setTimeout(Hello, 2000)
// setInterval -> hyzgaargui ajilna
//setInterval(Hello, 3000)
var time=document.getElementsByTagName('h1')[0];
var ol=document.getElementsByTagName('ol')[0];
var a=document.querySelector('.a');
var b=document.querySelector('.b');
var second=0, minut=0, hour=0; doil=0;
var An;
function watch(){
    doil++;
    if( doil == 100){
        second++;
        doil=0;
        if(second==60){
            minut++;
            second=0;
            if(minut==60){
                hour++;
                minut=0;
            }
        }
    }
// ternary operator ?:
    var s = second<10 ? "0"+second : second;
    var m = minut<10 ? "0"+minut : minut;
    var h = hour<10 ? "0"+hour : hour;
    var d = doil<10 ? "0"+hour : doil;
    An=time.innerText=h+":"+m+":"+s+":"+d;
}
var up;
function start(){
    up=setInterval(watch, 10);
    a.disabled = true;
    if(a.disabled = true){
        b.disabled = false;
    }
}
function stop(){
    clearInterval(up);
    b.disabled=true;
    if(b.disabled = true){
        a.disabled = false;
    }
}
function restart(){
    minut=0;
    second=0;
    hour=0;
    time.innerText="00:"+"00:"+"00:"+"00";
    ol.innerText= "";
}
function lap(){
// shinerr tag uusgeh : document.createElement('tagName');
    var li = document.createElement('li');
// append -> tag dotor uur neg tag nemeh
    li.innerText=time.innerText;
    ol.append(li);
}