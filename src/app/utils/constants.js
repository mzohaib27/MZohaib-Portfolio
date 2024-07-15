import img1 from "../../../public/reactwebsite.jpg";
import img2 from "../../../public/2ndimage.jpg";
import img3 from "../../../public/3rdimage.webp";
import img4 from "../../../public/4thimage.jpg";
import img5 from "../../../public/5thimage.jpeg";
import img6 from "../../../public/6thimage.webp";
import HeroImage from "../../../public/heroimage.jpeg";
import psgwealth from "../../../public/psgwealth2.png";
import psgcard from "../../../public/psgcard2.png";
import nikestore from "../../../public/nikestoreimage.png";

export { HeroImage };
export const ProjectsData = [
  {
    id: 1,
    title: "PSG-Wealth Website",
    description:
      "PSG-Wealth is a React Modern Design website having beautifull UI/UX. And also using framer motion for beautifull animations",
    image: psgwealth,
    tag: ["All", "Web"],
    link: "https://psgwealth.vercel.app",
    link2: "https://github.com/mzohaib27/psg-website",
  },
  {
    id: 2,
    title: "Next.js Portfolio Website",
    description:
      "My Personal Portfolio Website that i build by using Next.js, TailwindCSS. I also used Framer Motion for beautifull animations",
    image: img1,
    tag: ["All", "Mobile"],
    link: "https://zohaib27.vercel.app",
    link2: "https://github.com/mzohaib27/mzohaib-portfolio",
  },
  {
    id: 3,
    title: "PSG-Card Website",
    description:
      "A Modern beautifull UI Credit Card Website. It can be used to run any type of business which is using credit card transactions.",
    image: psgcard,
    tag: ["All", "Web"],
    link: "https://psg1.vercel.app",
    link2: "https://github.com/mzohaib27/modern-ui-react",
  },
  {
    id: 4,
    title: "Modern Nike Store",
    description:
      "This is a modern nike store with the help of React.js and TailwindCSS. This awesome web app can be used by any shoes company to run and make their business digital",
    image: nikestore,
    tag: ["All", "Mobile"],
    link: "https://modern-nike-store.vercel.app",
    link2: "https://github.com/mzohaib27/modern-nike-store",
  },
  {
    id: 5,
    title: "Frame of uiCookies Landing page with React.js and Tailwind CSS",
   description:
      "React Modern Design using a popular javascript Library React.js and Tailwind CSS . And also using framer motion for beautifull animations",
     image: img5,
    tag: ["All", "Web"], 
       link : 
"https://ui-cookies-landing-page.vercel.app",
 link2 : "", 
   },
  // {
  //   id: 6,
  //   title: "Creative Designer Website",
  //   description:
  //     "React Modern Design having 3d features using a popular javascript Library Three.js. And also using framer motion for beautifull animations",
  //   image: img6,
  //   tag: ["All", "Web"],
  // },
];
