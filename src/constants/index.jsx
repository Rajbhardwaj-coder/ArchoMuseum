
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "About", targetId: "about" },
  { text: "Explore", targetId: "explore" },
  { text: "Gallery", targetId: "gallery" },
  { text: "Contact", targetId: "contact" },
];



export const ABOUT = {
  header: "Discover the Past, Inspire the Future",
  content:
    "ARCHO Museum is dedicated to preserving and showcasing the wonders of ancient civilizations. Through immersive exhibits and cutting-edge technology, we bring history to life and inspire curiosity about our shared heritage.",
};

export const MISSION =
  "Our mission is to educate, preserve, and inspire through the exploration of archaeology and human history.";

import italian from "../assets/arch1.png";
import japanese from "../assets/arch2.jpg";
import indian from "../assets/arch3.jpeg";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Italian",
    description:
      "Experience the flavors of Italy with our exquisite Italian cuisine, featuring traditional recipes and contemporary dishes.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Japanese",
    description:
      "Delight in the art of Japanese culinary excellence, offering a fusion of classic and modern flavors.",
  },
  {
    number: "03.",
    image: indian,
    title: "Indian",
    description:
      "Indulge in the rich and diverse tastes of India, with a menu that celebrates the country's culinary heritage.",
  },
];

export const REVIEW = {
  name: "Xaviour Fernando",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Restaura, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};

export const CONTACT = [
  { key: "address", value: "Address: 925/4 GF SpringWood Enclave , Ghaziabad , 201010" },
  { key: "phone", value: "Phone: +91 7906828982" },
  { key: "email", value: "Email: info.Archo@Musem.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];


