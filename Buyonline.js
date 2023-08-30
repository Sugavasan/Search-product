

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

function ok(){
  alert("please try again later");
}