export interface subPage {
  name: string;
  subRoute: string;
  externalRoute: boolean;
}

export interface navLink {
  name: string;
  route: string;
  dropdown: subPage[];
}

const navLinks: navLink[] = [
  {
    name: "About Us",
    route: "/about",
    dropdown: [
      { name: "About MathSoc", subRoute: "/", externalRoute: false },
      { name: "Meet the Team", subRoute: "/team", externalRoute: false },
      { name: "Former Teams", subRoute: "/formerteam", externalRoute: false },
      {
        name: "Constitution",
        subRoute: "/files/general/Constitution-and-GRPP-2021.pdf",
        externalRoute: true
      }
    ]
  },
  {
    name: "Events",
    route: "/events",
    dropdown: []
  },
  {
    name: "Resources",
    route: "/resources",
    dropdown: [
      { name: "Our Resources", subRoute: "/", externalRoute: false },
      { name: "First Year Exam Bank", subRoute: "/exam-bank", externalRoute: false },
      { name: "Revision Lectures", subRoute: "/revision", externalRoute: false },
      { name: "LaTeX Guide", subRoute: "/latex", externalRoute: false },
      { name: "MATLAB Guide", subRoute: "/matlab", externalRoute: false },
      { name: "Careers Advice", subRoute: "/careers", externalRoute: false },
      {
        name: "First Year Guide",
        subRoute: "/files/resources/misc/First_Year_Guide_2021.pdf",
        externalRoute: true
      },
      {
        name: "HSC Tips & Tricks",
        subRoute: "/files/resources/misc/HSC-Tips-and-Tricks-Booklet-2019.pdf",
        externalRoute: true
      }
    ]
  },
  {
    name: "Competitions",
    route: "/competitions",
    dropdown: []
  },
  {
    name: "Sponsors",
    route: "/sponsors",
    dropdown: []
  },
  {
    name: "Contact Us",
    route: "/contact",
    dropdown: []
  }
];

export default navLinks;
