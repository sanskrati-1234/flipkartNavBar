const category_list=[
  {
    img:"Deals of the day/deal2.jpg",
    title:"Hammock And Swings",
    discount:"Up to 60% off",
    deal:"Grab or Gone"

  },
  {
    img:"Deals of the day/deal3.jpeg",
    title:"Hammock And Swings",
    discount:"Up to 60% off",
    deal:"Grab or Gone"

  },
  {
    img:"Deals of the day/deal4.jpeg",
    title:"Hammock And Swings",
    discount:"Up to 60% off",
    deal:"Grab or Gone"

  },
  {
    img:"Deals of the day/deal5.jpeg",
    title:"Hammock And Swings",
    discount:"Up to 60% off",
    deal:"Grab or Gone"

  },
  {
    img:"Deals of the day/deal1.jpg",
    title:"Hammock And Swings",
    discount:"Up to 60% off",
    deal:"Grab or Gone"

  }

]
function createChildElementOfCard(card,img,title,discount,deal){
    const cardImg=document.createElement("img");
    cardImg.src=img
    const title1=document.createElement("h1");
    title1.innerText=title;
    const discount1=document.createElement("p");
    discount1.innerText=discount,
    discount1.className="discount";
    const secondaryPart=document.createElement("p");
    secondaryPart.innerText=deal;
    card.append(cardImg,title1,discount1,secondaryPart);

  }
  function createCard(secondary){
    
    for(let i=0;i<category_list.length;i++){
      let val=category_list[i];
      const card= document.createElement("div");
      card.className="card hover-card"
      createChildElementOfCard(card,val.img,val.title,val.discount,val.deal);
      secondary.appendChild(card);
    }
    
  }
  const secondary=document.getElementsByClassName("secondary");
  for(let i=0;i<secondary.length;i++){
    createCard(secondary[i]);
  }
  
  let url="nav.html"
  function load(url,callback){
      let xhr=new XMLHttpRequest();
      console.log("aaaaa");
      xhr.onreadystatechange=function(){
          if(xhr.readyState==4){
              callback(xhr.response)
          }
      }
      xhr.open("GET",url,true);
      xhr.send('');
  }

 