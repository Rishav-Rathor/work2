var a = document.querySelector(".btn")
var flag=0

a.addEventListener("click",function(){
    if (flag==0){
        a.innerHTML ="Ordered"
    a.style.backgroundColor="green"
    flag=1
    }
    else{
        a.innerHTML ="Order Now"
        a.style.backgroundColor="brown"
        a.style.color="white"
        flag =0
    }
  
})
var main=document.querySelector(".main")
var c=document.querySelector(".cursor")
main.addEventListener("mousemove",function(dets){
c.style.left=dets.x+"px"
c.style.top=dets.y+"px"

})

