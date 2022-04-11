const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const header = document.querySelector("header");
const headerNav = header.querySelector("nav");
const headerLinks = headerNav.querySelectorAll("a");

headerLinks.forEach(link => link.classList.add("italic"));

const link1 = headerNav.querySelector("a");
const link2 = link1.nextElementSibling;
const link3 = link2.nextElementSibling;
const link4 = link3.nextElementSibling;
const link5 = link4.nextElementSibling;
const link6 = link5.nextElementSibling;

link1.textContent = "Services"
link2.textContent = "Product"
link3.textContent = "Vision"
link4.textContent = "Features"
link5.textContent = "About"
link6.textContent = "Contact"

const cta = document.querySelector(".cta");
const ctaH1 = cta.querySelector("h1");
const ctaButton = cta.querySelector("button")

ctaH1.textContent = "DOM Is Awesome!"
ctaButton.textContent = "Get Started"

const mainContent = document.querySelector(".main-content");
const features = mainContent.querySelector(".top-content .text-content");
const about = features.nextElementSibling;
const services = mainContent.querySelector(".bottom-content .text-content");
const product = services.nextElementSibling;
const vision = product.nextElementSibling;

features.querySelector("h4").textContent = "Features"
features.querySelector("p").textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

about.querySelector("h4").textContent = "About"
about.querySelector("p").textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

services.querySelector("h4").textContent = "Services"
services.querySelector("p").textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

product.querySelector("h4").textContent = "Product"
product.querySelector("p").textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

vision.querySelector("h4").textContent = "Vision"
vision.querySelector("p").textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const contact = document.querySelector(".contact");
contact.querySelector("h4").textContent = "Contact";
const address = contact.querySelector("p");
const phone = address.nextElementSibling;
const email = phone.nextElementSibling;

address.textContent = "123 Way 456 Street Somewhere, USA";
phone.textContent = "1 (888) 888-8888";
email.textContent = "sales@greatidea.io";

const copyright = document.querySelector("footer a");
copyright.classList.add("bold")
copyright.textContent = "Copyright Great Idea! 2021"

const logoImg = document.querySelector("#logo-img");
const ctaImg = document.querySelector("#cta-img");
const middleImg = document.querySelector("#middle-img");

logoImg.src = "http://localhost:9000/img/logo.png"
ctaImg.src = "http://localhost:9000/img/cta.png"
middleImg.src = "http://localhost:9000/img/accent.png"
