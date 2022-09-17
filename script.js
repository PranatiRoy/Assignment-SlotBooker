const button=document.getElementById("btn")
const modal=document.getElementById("modal")
const close=document.getElementById("close")
button.addEventListener('click',()=>{
    modal.style.display='block';
    button.style.display='none';
});

close.addEventListener('click',()=>{
    modal.style.display='none';
    button.style.display='block';
})

const numbers=document.getElementsByClassName("number");


document.getElementById("hand-hour").style.transform = "rotate(90deg)";

document.getElementById("in-hour").addEventListener('click',()=>{
    let a=document.getElementById("hr").innerText;
    let b=Number(a);
    if(b<12 && b>=0){
        let c=b+1;
        document.getElementById("hr").innerText=c.toString();
    }
    else if(b==12){
        let c=1;
        document.getElementById("hr").innerText=c.toString();
    }

    // document.getElementById("hand-hour").style.transform = "rotate(${c}*30deg)";
    

    if (document.getElementById("hr").innerText==="1"){
        document.getElementById("hand-hour").style.transform = "rotate(30deg)";
        document.getElementById("number1").classList.add("filled");
        document.getElementById("number12").classList.remove("filled2");
    }
    if (document.getElementById("hr").innerText==="2"){
        document.getElementById("hand-hour").style.transform = "rotate(60deg)";
        document.getElementById("number2").classList.add("filled");
        document.getElementById("number1").classList.remove("filled");
    }
    if (document.getElementById("hr").innerText==="3"){
        document.getElementById("hand-hour").style.transform = "rotate(90deg)";
        document.getElementById("number3").classList.add("filled");
        document.getElementById("number2").classList.remove("filled");
    }
    if (document.getElementById("hr").innerText==="4"){
        document.getElementById("hand-hour").style.transform = "rotate(120deg)";
        document.getElementById("number4").classList.add("filled");
        document.getElementById("number3").classList.remove("filled");
    }
    if (document.getElementById("hr").innerText==="5"){
        document.getElementById("hand-hour").style.transform = "rotate(150deg)";
        document.getElementById("number5").classList.add("filled");
        document.getElementById("number4").classList.remove("filled");
    }
    if (document.getElementById("hr").innerText==="6"){
        document.getElementById("hand-hour").style.transform = "rotate(180deg)";
        document.getElementById("number6").classList.add("filled");
        document.getElementById("number5").classList.remove("filled");
    }
    if (document.getElementById("hr").innerText==="7"){
        document.getElementById("hand-hour").style.transform = "rotate(210deg)";
        document.getElementById("number7").classList.add("filled");
        document.getElementById("number6").classList.remove("filled");
    }
    if (document.getElementById("hr").innerText==="8"){
        document.getElementById("hand-hour").style.transform = "rotate(240deg)";
        document.getElementById("number8").classList.add("filled");
        document.getElementById("number7").classList.remove("filled");
    }
    if (document.getElementById("hr").innerText==="9"){
        document.getElementById("hand-hour").style.transform = "rotate(270deg)";
        document.getElementById("number9").classList.add("filled");
        document.getElementById("number8").classList.remove("filled");
    }
    if (document.getElementById("hr").innerText==="10"){
        document.getElementById("hand-hour").style.transform = "rotate(300deg)";
        document.getElementById("number10").classList.add("filled2");
        document.getElementById("number9").classList.remove("filled");
    }
    if (document.getElementById("hr").innerText==="11"){
        document.getElementById("hand-hour").style.transform = "rotate(330deg)";
        document.getElementById("number11").classList.add("filled2");
        document.getElementById("number10").classList.remove("filled2");
    }
    if (document.getElementById("hr").innerText==="12"){
        document.getElementById("hand-hour").style.transform = "rotate(360deg)";
        document.getElementById("number12").classList.add("filled2");
        document.getElementById("number11").classList.remove("filled2");
    }
})

document.getElementById("in-min").addEventListener('click',()=>{
    let a=document.getElementById("min").innerText;
    let b=Number(a);
    if(b<60 && b>=0){
        let c=b+1;
        if(c<10)
            document.getElementById("min").innerText='0'+c.toString();
        else
            document.getElementById("min").innerText=c.toString();
    }
    else if(b==60){
        let c=0;
        document.getElementById("min").innerText='0'+c.toString();
    }
})

document.getElementById("am").addEventListener('click',()=>{
    document.getElementById("am").style.backgroundColor='#fff';
    document.getElementById("am").style.color='#000';
    document.getElementById("pm").style.backgroundColor='transparent';
    document.getElementById("pm").style.color='#fff';

})

document.getElementById("pm").addEventListener('click',()=>{
    document.getElementById("pm").style.backgroundColor='#fff';
    document.getElementById("pm").style.color='#000';
    document.getElementById("am").style.backgroundColor='transparent';
    document.getElementById("am").style.color='#fff';

})





