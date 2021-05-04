const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const links = document.querySelectorAll("nav a");
links[0].text = siteContent["nav"]["nav-item-1"];
links[1].text = siteContent["nav"]["nav-item-2"];
links[2].text = siteContent["nav"]["nav-item-3"];
links[3].text = siteContent["nav"]["nav-item-4"];
links[4].text = siteContent["nav"]["nav-item-5"];
links[5].text = siteContent["nav"]["nav-item-6"];



const title = document.querySelector("h1");
title.textContent = 'DOM Is Awesome';

const button = document.querySelector("button");
button.textContent = 'Get Started';

let header = document.getElementById("cta-img");
header.setAttribute('src', siteContent["cta"]["img-src"]);


const contentTitle = document.getElementsByTagName("h4");
contentTitle[0].innerText = siteContent["main-content"]["features-h4"];
contentTitle[1].innerText = siteContent["main-content"]["about-h4"];
contentTitle[2].innerText = siteContent["main-content"]["services-h4"];
contentTitle[3].innerText = siteContent["main-content"]["product-h4"];
contentTitle[4].innerText = siteContent["main-content"]["vision-h4"];

const contentInfo = document.querySelectorAll("p");
contentInfo[0].innerText = siteContent["main-content"]["features-content"];
contentInfo[1].innerText = siteContent["main-content"]["about-content"];
contentInfo[2].innerText = siteContent["main-content"]["services-content"];
contentInfo[3].innerText = siteContent["main-content"]["product-content"];
contentInfo[4].innerText = siteContent["main-content"]["vision-content"];

const midImg = document.getElementById("middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];

const contactText = document.querySelectorAll(".contact p");
contactText[0].innerText = siteContent["contact"]["address"];
contactText[1].innerText = siteContent["contact"]["phone"];
contactText[2].innerText = siteContent["contact"]["email"];

const footer = document.querySelectorAll("footer p")[0];
footer.innerText = siteContent["footer"]["copyright"];

