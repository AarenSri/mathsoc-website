export interface resourceDetails {
  title: string;
  resourceType: "page" | "file";
  resourceLink: string;
  backgroundImage: string;
  iconPath: string;
}

const RESOURCE_IMAGE_PATH = "/images/resources/";

export const examBankInfo: resourceDetails = {
  title: "First Year Exam Bank",
  resourceType: "page",
  resourceLink: "/resources/exam-bank",
  backgroundImage: RESOURCE_IMAGE_PATH + "examBankBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "examBankIcon.png"
};

export const revisionInfo: resourceDetails = {
  title: "Revision Lectures",
  resourceType: "page",
  resourceLink: "/resources/revision",
  backgroundImage: RESOURCE_IMAGE_PATH + "revisionBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "revisionIcon.png"
};

export const latexInfo: resourceDetails = {
  title: "LaTeX Guide",
  resourceType: "page",
  resourceLink: "/resources/latex",
  backgroundImage: RESOURCE_IMAGE_PATH + "latexBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "latexIcon.png"
};

export const matlabInfo: resourceDetails = {
  title: "MATLAB Guide",
  resourceType: "page",
  resourceLink: "/resources/matlab",
  backgroundImage: RESOURCE_IMAGE_PATH + "matlabBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "matlabIcon.png"
};

export const careersInfo: resourceDetails = {
  title: "Careers Advice",
  resourceType: "page",
  resourceLink: "/resources/careers",
  backgroundImage: RESOURCE_IMAGE_PATH + "careersBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "careersIcon.png"
};

export const firstYearInfo: resourceDetails = {
  title: "First Year Guide",
  resourceType: "file",
  resourceLink: "/resources/misc/First_Year_Guide_2021.pdf",
  backgroundImage: RESOURCE_IMAGE_PATH + "firstYearBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "firstYearIcon.png"
};

export const hscInfo: resourceDetails = {
  title: "HSC Tips and Tricks",
  resourceType: "file",
  resourceLink: "/resources/misc/HSC-Tips-and-Tricks-Booklet-2019.pdf",
  backgroundImage: RESOURCE_IMAGE_PATH + "hscBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "hscIcon.png"
};

const resourceInfo: resourceDetails[] = [
  examBankInfo,
  revisionInfo,
  latexInfo,
  matlabInfo,
  careersInfo,
  firstYearInfo,
  hscInfo
];

export default resourceInfo;
