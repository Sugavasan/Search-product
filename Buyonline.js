

 function look(){
    let search = document.getElementById('find').value.toUpperCase();
    let items = document.querySelectorAll('.card');
    let searchedproducts=document.getElementsByTagName('h5');
   
    
    for(i=0;i<searchedproducts.length;i++){
      let c = items[i].getElementsByTagName('h5')[0];

      let result = c.innerHTML||c.innerText||c.textContent;
      if(result.toLocaleUpperCase().indexOf(search)>-1){
        items[i].style.display="";
      }else{
        items[i].style.display="none";
            }
    }
 
};

//buttons for search products.
let one=document.getElementById("button1");
one.addEventListener("click",function(){
  window.location.href="https://www.google.com/search?q=about+bread&sca_esv=561640084&sxsrf=AB5stBix56zCqUNHJZY8EBjlWFIUIru_3Q%3A1693497918568&ei=PrrwZLuiIpiQ4-EPl42e-AY&ved=0ahUKEwi7ufSuo4eBAxUYyDgGHZeGB28Q4dUDCBA&uact=5&oq=about+bread&gs_lp=Egxnd3Mtd2l6LXNlcnAiC2Fib3V0IGJyZWFkMgoQABiABBgUGIcCMgUQABiABDIKEAAYgAQYFBiHAjIFEAAYgAQyBRAuGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARImWNQmwVYv1xwAXgBkAEAmAHpCqABsjGqAQ8wLjEuOC4yLjMuMC4xLjG4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIEECMYJ8ICCxAAGIAEGLEDGIMBwgILEAAYigUYsQMYgwHCAggQLhiABBixA8ICCxAuGIoFGLEDGIMBwgIEEAAYA8ICCBAAGIAEGLEDwgIHEAAYgAQYCuIDBBgAIEGIBgGQBgg&sclient=gws-wiz-serp";
});

document.getElementById("button2").addEventListener("click",function(){
  window.location.href="https://www.google.com/search?q=about+bread&sca_esv=561640084&sxsrf=AB5stBix56zCqUNHJZY8EBjlWFIUIru_3Q%3A1693497918568&ei=PrrwZLuiIpiQ4-EPl42e-AY&ved=0ahUKEwi7ufSuo4eBAxUYyDgGHZeGB28Q4dUDCBA&uact=5&oq=about+bread&gs_lp=Egxnd3Mtd2l6LXNlcnAiC2Fib3V0IGJyZWFkMgoQABiABBgUGIcCMgUQABiABDIKEAAYgAQYFBiHAjIFEAAYgAQyBRAuGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARImWNQmwVYv1xwAXgBkAEAmAHpCqABsjGqAQ8wLjEuOC4yLjMuMC4xLjG4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIEECMYJ8ICCxAAGIAEGLEDGIMBwgILEAAYigUYsQMYgwHCAggQLhiABBixA8ICCxAuGIoFGLEDGIMBwgIEEAAYA8ICCBAAGIAEGLEDwgIHEAAYgAQYCuIDBBgAIEGIBgGQBgg&sclient=gws-wiz-serp";
});
document.getElementById("yogurt").addEventListener("click",function(){
  window.location.href="https://www.google.com/search?q=about+yogurt&sca_es4AQ&sclient=gws-wiz-serp";
});
document.getElementById("cannedbean").addEventListener("click",function(){
  window.location.href="https://www.google.com/search?q=about+cannedbean&sca_es4AQ&sclient=gws-wiz-serp";
});
document.getElementById("milk").addEventListener("click",function(){
  window.location.href="https://www.google.com/search?q=about+milk&sca_es4AQ&sclient=gws-wiz-serp";
});
document.getElementById("meat").addEventListener("click",function(){
  window.location.href="https://www.google.com/search?q=about+meat&sca_es4AQ&sclient=gws-wiz-serp";
});
document.getElementById("watercan").addEventListener("click",function(){
  window.location.href="https://www.google.com/search?q=about+drinking+water+can&sca_es4AQ&sclient=gws-wiz-serp";
});
document.getElementById("popcorn").addEventListener("click",function(){
  window.location.href="https://www.google.com/search?q=about+popcorn&sca_es4AQ&sclient=gws-wiz-serp";
});
document.getElementById("dairymilk").addEventListener("click",function(){
  window.location.href="https://www.google.com/search?q=about+Dairy+milk&sca_es4AQ&sclient=gws-wiz-serp";
});
document.getElementById("waterbottle").addEventListener("click",function(){
  window.location.href="https://www.google.com/search?q=about+waterbottle&sca_es4AQ&sclient=gws-wiz-serp";
});
document.getElementById("garden").addEventListener("click",function(){
  window.location.href="https://www.google.com/search?q=about+watering+can&sca_es4AQ&sclient=gws-wiz-serp";
});
document.getElementById("painting").addEventListener("click",function(){
  window.location.href="https://www.google.com/search?q=about+painting+brush&sca_es4AQ&sclient=gws-wiz-ser";
});
document.getElementById("paste").addEventListener("click",function(){
  window.location.href="https://www.google.com/search?q=about+dabur+red+toothpaste&sca_es4AQ&sclient=gws-wiz-ser";
});
document.getElementById("vicks").addEventListener("click",function(){
  window.location.href="https://www.google.com/search?q=about+vicks+vaporub&sca_es4AQ&sclient=gws-wiz-ser";
});
document.getElementById("paste1").addEventListener("click",function(){
  window.location.href="https://www.google.com/search?q=about+colcate+paste&sca_es4AQ&sclient=gws-wiz-ser";
});


function later(){
  let msg=prompt("Enter your Emailid");
  let s = msg ? 'sucessfully submitted':'Please enter Your Email Correctly';
  alert(s)
};

//index page toggle
const white = document.getElementById('dark');
const body1=document.body;
const bread = document.querySelector('.bread');
const grain = document.querySelector('.grain');
const yogurt = document.querySelector('.yogurt');
const canned = document.querySelector('.canned');
const milk = document.querySelector('.milk');
const meat = document.querySelector('.meat');
const water = document.querySelector('.water');
const pop = document.querySelector('.pop');
const bottle = document.querySelector('.bottle');
const garden = document.querySelector('.garden');
const painting = document.querySelector('.painting');
const paste = document.querySelector('.paste');
const vicks = document.querySelector('.vicks');
const past = document.querySelector('.past');

dark.addEventListener("click",()=>{
  body1.classList.toggle('dark');
  bread.classList.toggle('dark');
  grain.classList.toggle('dark');
  yogurt.classList.toggle('dark');
  canned.classList.toggle('dark');
  milk.classList.toggle('dark');
  meat.classList.toggle('dark');
  water.classList.toggle('dark');
  pop.classList.toggle('dark');
  bottle.classList.toggle('dark');
  garden.classList.toggle('dark');
  painting.classList.toggle('dark');
  paste.classList.toggle('dark');
  vicks.classList.toggle('dark');
  past.classList.toggle('dark');
});



