export interface subPage {
  name: string;
  subRoute: string;
  useRelativeRoute: boolean;
}

export interface navLink {
  name: string;
  route: string;
  dropdown: subPage[];
  mobileOnly: boolean;
}

const navLinks: navLink[] = [
  {
    name: "Home",
    route: "/",
    dropdown: [],
    mobileOnly: true
  },
  {
    name: "About Us",
    route: "/about",
    dropdown: [
      { name: "About MathSoc", subRoute: "/", useRelativeRoute: false },
      { name: "Meet the Team", subRoute: "/team", useRelativeRoute: false },
      { name: "Former Teams", subRoute: "/formerteam", useRelativeRoute: false },
      {
        name: "Constitution",
        subRoute: "/files/general/Constitution-and-GRPP-2021.pdf",
        useRelativeRoute: true
      }
    ],
    mobileOnly: false
  },
  {
    name: "Events",
    route: "/events",
    dropdown: [],
    mobileOnly: false
  },
  // TODO: use resourceData
  {
    name: "Resources",
    route: "/resources",
    dropdown: [
      { name: "Our Resources", subRoute: "/", useRelativeRoute: false },
      { name: "First Year Exam Bank", subRoute: "/exam-bank", useRelativeRoute: false },
      { name: "Revision Lectures", subRoute: "/revision", useRelativeRoute: false },
      { name: "LaTeX Guide", subRoute: "/latex", useRelativeRoute: false },
      { name: "MATLAB Guide", subRoute: "/matlab", useRelativeRoute: false },
      { name: "R Guide", subRoute: "/r", useRelativeRoute: false },
      { name: "Applications", subRoute: "/applications", useRelativeRoute: true },
      { name: "Careers Advice", subRoute: "/careers", useRelativeRoute: false },
      {
        name: "First Year Guide",
        subRoute: "/files/resources/misc/First_Year_Guide_2021.pdf",
        useRelativeRoute: true
      },
      {
        name: "HSC Tips & Tricks",
        subRoute: "/files/resources/misc/HSC-Tips-and-Tricks-Booklet-2019.pdf",
        useRelativeRoute: true
      }
    ],
    mobileOnly: false
  },
  {
    name: "Competitions",
    route: "/competitions",
    dropdown: [],
    mobileOnly: false
  },
  {
    name: "Sponsors",
    route: "/sponsors",
    dropdown: [],
    mobileOnly: false
  },
  {
    name: "Contact Us",
    route: "/contact",
    dropdown: [],
    mobileOnly: false
  }
];

export default navLinks;
