let url="nav.html"
  function load(url,callback){
      console.log("aaaaa");
      fetch(url).then((data)=>data.text()).then((response)=>callback(response))
      return
      /*let xhr=new XMLHttpRequest();
      console.log("aaaaa");
      xhr.onreadystatechange=function(){
          if(xhr.readyState==4){
              callback(xhr.response)
          }
      }
      xhr.open("GET",url,true);
      xhr.send('');
      */
  }
  load(url,setHeader)
  function setHeader(data){
       const element=document.getElementById("header");
       element.innerHTML=data

  }
  function setFooter(data){
       const element=document.getElementById("footer");
       element.innerHTML=data
  }
