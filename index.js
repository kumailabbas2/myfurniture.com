function mynav(){
  let bar = document.getElementById("bar");
  let nav = document.querySelector("navigation");
  bar.onclick = ()=>{
    if(nav.style.right == "0%"){
      nav.style.right = "-50%";
      bar .src="images/menu.png"

    }else{
        nav.style.right = "0%"
         bar .src="images/x.png"


    }
  }
}
mynav(); 
function myheader(){
    let header = document.getElementById("header");
    let logos + document.getElementById("logos");
    window addEventListener("scroll".function(){
      if(window.scrollY > 0){
        header.classList.add("active")
        logos.src = "images/logos.png";
      }else{
        header.classList.remove("active")
        logos.src = "images/logos.png";
        

      }
    })
}
myheader()

