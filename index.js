function onclickbutton(){
    let a=prompt("final decree?");
    return a;
}
function whatsname(){
    let b=prompt("whats your name?");
    return b;
}

function response()
{
    let name = whatsname();
    let ans = onclickbutton();
    let d=new Date();
    Boolean(ans);
    if(ans==="ok"||ans==="yes"){
        let n=document.getElementById("text").value;
        let str= name + "  says \n - " + n + " TIME -  "+ d; 
        document.getElementById("newentry").innerHTML = str;
        document.getElementById("newentry").style.paddingTop=30;
        document.getElementById("newentry").style.borderStyle='solid';
        document.getElementById("newentry").style.borderColor='lightgrey';
        document.getElementById("newentry").style.borderWidth=0.5;
        document.getElementById("newentry").style.paddingBottom=30;
        document.getElementById("newentry").style.paddingLeft=60;
        document.getElementById("newentry").style.paddingRight=60;
    }
    else{
        alert("why do you even..?");
    }
}
function deletefunc(){
    document.getElementById("newentry").innerHTML = "";
}
function top() {
    const scroll = SmoothScroll();
    const anchor = document.getElementById("i");
    scroll.animateScoll(anchor);
  }
window.onscroll = this.scrollFunction;
var scroll = new SmoothScroll("#bt", {
  speed: 500,
  speedAsDuration: true
});