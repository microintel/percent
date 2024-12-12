

let uu = "https://picsum.photos/1700/1700/";
document.body.style.background = `url('${uu}')`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundColor="black";


function inpast(x){
    if(x=="s1"){
    let ggg=Math.floor(Math.random() * 100);
    let gg=Math.floor(Math.random() * 8000);
    
    document.getElementById("pv1").placeholder=ggg+" %";
    document.getElementById("pv2").placeholder=gg+" rs";
    }
    
    if(x=="s2"){
    let ggg=Math.floor(Math.random() * 100);
    let gg=Math.floor(Math.random() * 8000);
    
    document.getElementById("pv1").placeholder=ggg;
    document.getElementById("pv2").placeholder=gg+" rs";
    }
    
    if(x=="s4"){
    document.getElementById("pv1").placeholder="old Salary : 62890";
    document.getElementById("pv2").placeholder="New Salary : 80900";
    }
    
    if(x=="s5"){
    document.getElementById("pv1").placeholder="old Salary : 17540";
    document.getElementById("pv2").placeholder="hike percet : 6.5";
    }
    }
    
    function ppp(){
    document.getElementById("prcntt").style.display="block";
    }
    
    function qqq(){
    document.getElementById("prcntt").style.display="none";
    }
    
    
    function percal(){
    
    let selm=document.getElementById("selmed").value;
    let p1=parseFloat(document.getElementById("pv1").value);
    let p2=parseFloat(document.getElementById("pv2").value);
    
    
    if(selm=="s1"){
    if(p1>100){
    document.getElementById("pout").style.backgroundColor="red";
    document.getElementById("pout").innerHTML="please enter percent less than 100 or equalbto 100";
    }
    else{
    let perc=p1/100*p2;
    perc=perc.toFixed(2);
    document.getElementById("pout").style.backgroundColor="transparent";
    document.getElementById("pout").innerHTML=perc;
    }
    }
    
    if(selm=="s2"){
    if(p1<=p2){
    let perc1=p1/p2*100;
    
    perc1=perc1.toFixed(2);
    document.getElementById("pout").style.backgroundColor="transparent";
    document.getElementById("pout").innerHTML=perc1+" %";
    }
    else{
    document.getElementById("pout").style.backgroundColor="red";
    document.getElementById("pout").innerHTML="Please Enter First Value less than or equal to second Value";
    }
    
    }
    
    if(selm=="s3"){
    alert("please select the methods.");
    }
    
    if(selm=="s4"){
    let ppp2= parseFloat(document.getElementById("pv2").value);
    let ppp1= parseFloat(document.getElementById("pv1").value);
    
    if(ppp1<=ppp2 || ppp1>=ppp2){
    let perc1= ((ppp2-ppp1)/ppp1)*100;
    
    perc1=perc1.toFixed(2);
    document.getElementById("pout").style.backgroundColor="transparent";
    document.getElementById("pout").innerHTML=perc1+" %";
    }
    else{
    document.getElementById("pout").style.backgroundColor="red";
    document.getElementById("pout").innerHTML="Please Enter First Value less than or equal to second Value";
    }
    
    }
    
    if(selm=="s5"){
    let pp2= parseFloat(document.getElementById("pv2").value);
    let pp1= parseFloat(document.getElementById("pv1").value);
    
    if(pp1<=pp2 || pp1>=pp2){
    let perc1= pp1+(pp1*pp2/100);
    perc1=perc1-pp1;
    
    perc1=perc1.toFixed(2);
    document.getElementById("pout").style.backgroundColor="transparent";
    document.getElementById("pout").innerHTML=perc1+" %";
    }
    else{
    document.getElementById("pout").style.backgroundColor="red";
    document.getElementById("pout").innerHTML="Please Enter First Value less than or equal to second Value";
    }
    }
    }