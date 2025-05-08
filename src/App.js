import React, { useState, useEffect } from "react";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Features from "./components/Features";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Contact from "./components/Contact";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;




// import { Navigation } from "./components/Navigation";
// import { Header } from "./components/Header";
// import { Features } from "./components/Features";
// import { About } from "./components/About";
// import { Services } from "./components/Services";
// import { Gallery } from "./components/Gallery";
// import { Testimonials } from "./components/Testimonials";
// import { Team } from "./components/Team";
// import { Contact } from "./components/Contact";














































// {
//   "Header": {
//     "title": "We are a Landing Page",
//     "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum."
//   },
//   "About": {
//     "paragraph": "Makeup enhances natural beauty, boosts confidence, and allows creative self-expression. The right products highlight features, giving a flawless look for any occasion.",
//     "Why": [
//       "Enhances natural beauty",
//       "Long-lasting flawless finish",
//       "Boosts confidence",
//       "Suitable for all skin types"
//     ],
//     "Why2": [
//       "Improves skin appearance",
//       "Professional polished look",
//       "Perfect for any occasion",
//       "Express your unique style"
//     ]
//   },
//   "Gallery": [
//     {
//       "title": "Project Title",
//       "largeImage": "img/portfolio/01-large.jpg",
//       "smallImage": "img/portfolio/01-small.jpg"
//     },
//     {
//       "title": "Project Title",
//       "largeImage": "img/portfolio/02-large.jpg",
//       "smallImage": "img/portfolio/02-small.jpg"
//     },
//     {
//       "title": "Project Title",
//       "largeImage": "img/portfolio/03-large.jpg",
//       "smallImage": "img/portfolio/03-small.jpg"
//     },
//     {
//       "title": "Project Title",
//       "largeImage": "img/portfolio/04-large.jpg",
//       "smallImage": "img/portfolio/04-small.jpg"
//     },
//     {
//       "title": "Project Title",
//       "largeImage": "img/portfolio/05-large.jpg",
//       "smallImage": "img/portfolio/05-small.jpg"
//     },
//     {
//       "title": "Project Title",
//       "largeImage": "img/portfolio/06-large.jpg",
//       "smallImage": "img/portfolio/06-small.jpg"
//     },
//     {
//       "title": "Project Title",
//       "largeImage": "img/portfolio/07-large.jpg",
//       "smallImage": "img/portfolio/07-small.jpg"
//     },
//     {
//       "title": "Project Title",
//       "largeImage": "img/portfolio/08-large.jpg",
//       "smallImage": "img/portfolio/08-small.jpg"
//     },
//     {
//       "title": "Project Title",
//       "largeImage": "img/portfolio/09-large.jpg",
//       "smallImage": "img/portfolio/09-small.jpg"
//     }
//   ],
//   "Services": [
//     {
//       "icon": "fa fa-wordpress",
//       "name": "Bridal Makeup",
//       "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
//     },
//     {
//       "icon": "Hair Styling",
//       "name": "Consectetur adipiscing",
//       "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
//     },
//     {
//       "icon": "fa fa-cloud-download",
//       "name": "Lorem ipsum dolor",
//       "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
//     },
//     {
//       "icon": "fa fa-language",
//       "name": "Consectetur adipiscing",
//       "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
//     },
//     {
//       "icon": "fa fa-plane",
//       "name": "Lorem ipsum dolor",
//       "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
//     },
//     {
//       "icon": "fa fa-pie-chart",
//       "name": "Consectetur adipiscing",
//       "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
//     }
//   ],
//   "Testimonials": [
//     {
//       "img": "img/testimonials/01.jpg",
//       "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
//       "name": "John Doe"
//     },
//     {
//       "img": "img/testimonials/02.jpg",
//       "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
//       "name": "Johnathan Doe"
//     },
//     {
//       "img": "img/testimonials/03.jpg",
//       "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
//       "name": "John Doe"
//     },
//     {
//       "img": "img/testimonials/04.jpg",
//       "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
//       "name": "Johnathan Doe"
//     },
//     {
//       "img": "img/testimonials/05.jpg",
//       "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
//       "name": "John Doe"
//     },
//     {
//       "img": "img/testimonials/06.jpg",
//       "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
//       "name": "Johnathan Doe"
//     }
//   ],
//   "Team": [
//     {
//       "img": "img/team/01.jpg",
//       "name": "Pooja",
//       "job": "Hair & Makeup"
//     },
//     {
//       "img": "img/team/02.jpg",
//       "name": "Arti",
//       "job": "Advance Hair & Makeup"
//     },
//     {
//       "img": "img/team/03.jpg",
//       "name": "Neha",
//       "job": "Hair Artist"
//     },
//     {
//       "img": "img/team/04.jpg",
//       "name": "Vinita",
//       "job": "Beauty Services & Makeup"
//     }
//   ],
//   "Contact": {
//     "address": "4321 California St, San Francisco, CA 12345 ",
//     "phone": "+1 123 456 1234",
//     "email": "info@company.com",
//     "facebook": "fb.com",
//     "twitter": "twitter.com",
//     "youtube": "youtube.com"
//   },
//   "Features": [
//     {
//       "icon": "fa fa-comments-o",
//       "title": "Lorem ipsum",
//       "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
//     },
//     {
//       "icon": "fa fa-bullhorn",
//       "title": "Lorem ipsum",
//       "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
//     },
//     {
//       "icon": "fa fa-group",
//       "title": "Lorem ipsum",
//       "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
//     },
//     {
//       "icon": "fa fa-magic",
//       "title": "Lorem ipsum",
//       "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
//     }
//   ]
// }