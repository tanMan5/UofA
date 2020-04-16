var main = document.querySelector("main");
var sitesEl = document.querySelector(".sites");
var sitesChildren = sitesEl.children;
// var site1El = document.querySelector(".site1");
// var site2El = document.querySelector(".site2");
// var site3El = document.querySelector(".site3");
// var siteTitles = document.querySelectorAll("h4");
var sites = ["https://news.ycombinator.com/", "https://twitter.com", "https://instagram.com", "https://google.com", "https://reddit.com/r/webdev"];
var siteData = [
  {
    text: 'Site 1',
    // href: 'https://google.com',
    src: 'images/image_1.jpg',
    alt: 'man working'
  },
  {
    text: 'Site 2',
    // href: 'https://twitter.com',
    src: 'images/image_2.jpg',
    alt: 'group brainstorm'
  },
  {
    text: 'Site 3',
    // href: 'https://instagram.com',
    src: 'images/image_3.jpg',
    alt: 'women working'
  }
]

for(var i = 0; i < sitesChildren.length; i++) {
  console.log(sitesChildren[i]);
  sitesChildren[i].children[0].textContent = siteData[i].text;
  sitesChildren[i].children[0].setAttribute("style", "text-decoration: underline; padding-left:10px; margin: 0");
  // sitesChildren[i].children[1].setAttribute('href', siteData[i].href);
  sitesChildren[i].children[1].setAttribute("href", sites[Math.floor(Math.random() * sites.length)]);
  sitesChildren[i].children[1].children[0].setAttribute('src', siteData[i].src);
  sitesChildren[i].children[1].children[0].setAttribute('alt', siteData[i].alt);
  sitesChildren[i].children[1].children[0].setAttribute('style', 'padding:10px;');
}

// site1El.children[0].textContent += " Site 1";
// site1El.children[1].setAttribute("href", "https://google.com");
// site1El.children[1].children[0].setAttribute("src", "images/image_1.jpg");
// site1El.children[1].children[0].setAttribute("alt", "man working");
// site1El.children[1].children[0].setAttribute("style", "padding:10px;");

// site2El.children[0].textContent = "Site 2";
// site2El.children[1].setAttribute("href", "https://twitter.com");
// site2El.children[1].children[0].setAttribute("src", "images/image_2.jpg");
// site2El.children[1].children[0].setAttribute("alt", "group brainstorm");
// site2El.children[1].children[0].setAttribute("style", "padding:10px;");

// site3El.children[0].textContent = "Site 3";
// site3El.children[1].setAttribute("href", "https://instagram.com");
// site3El.children[1].children[0].setAttribute("src", "images/image_3.jpg");
// site3El.children[1].children[0].setAttribute("alt", "women working");
// site3El.children[1].children[0].setAttribute("style", "padding:10px;");

// for (var i = 0; i < siteTitles.length; i++) {
//   siteTitles[i].setAttribute("style", "text-decoration: underline; padding-left:10px; margin: 0");
// }

// Bonus
// For this bonus, comment out line 11
// site1El.children[1].setAttribute("href", sites[Math.floor(Math.random() * sites.length)]);



