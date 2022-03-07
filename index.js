var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
const category_list=[
  {
    img:"images/Deals of the day/deal2.jpg",
    title:"Hammock And Swings",
    discount:"Up to 60% off",
    deal:"Grab or Gone"

  },
  {
    img:"images/Deals of the day/deal3.jpeg",
    title:"Hammock And Swings",
    discount:"Up to 60% off",
    deal:"Grab or Gone"

  },
  {
    img:"images/Deals of the day/deal4.jpeg",
    title:"Hammock And Swings",
    discount:"Up to 60% off",
    deal:"Grab or Gone"

  },
  {
    img:"images/",
    title:"Hammock And Swings",
    discount:"Up to 60% off",
    deal:"Grab or Gone"

  },
  {
    img:"images/Deals of the day/deal1.jpg",
    title:"Hammock And Swings",
    discount:"Up to 60% off",
    deal:"Grab or Gone"

  }

]
const list = [
    {
      title: "Top Offers",
      img: "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png",
    },
    {
      title: "Grocery",
      img: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png",
    },
    {
      title: "Mobiles",
      img: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png",
    },
    {
      title: "Fashion",
      img: "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png",
    },
    {
      title: "Electronics",
      img: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png",
    },
    {
      title: "Home",
      img: "https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg",
    },
    {
      title: "Appliances",
      img: "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png",
    },
    {
      title: "Travel",
      img: "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png",
    },
  ];
  const category = document.getElementById("category");
  function createChild(childData) {
    const child = document.createElement("div");
    child.className = "category-card-box";
    child.innerHTML = `
            <img src=${childData.img}  class="image" />
            <a href="categoryfull.html" style="text-decoration:none">${childData.title}</a>
        `;
    return child;
  }
  for (let i = 0; i < list.length; i++) {
    category.appendChild(createChild(list[i]));
  }
  let a = 10;
  const b = 10;
  function abc() {
    let a = 10;
    const b = 10;
    {
      let aa = 12;
      var bb = 23;
    }
  }
  abc();
