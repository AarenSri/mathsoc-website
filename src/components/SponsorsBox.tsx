// Library Imports
import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@material-ui/core";

// Styling
import styles from "src/styles/SponsorsBox.module.scss";

// Data
import { sponsor } from "src/data/sponsorsData";
import SponsorsLogo from "./SponsorLogo";

const SponsorsBox: React.FC<sponsor> = ({ name, logoStyle, logoPath, websiteURL, description }) => {
  return (
    <div className={styles.sponsorBox}>
      <a href={websiteURL} target="_blank" rel="noopener noreferrer">
        <SponsorsLogo logoPath={logoPath} name={name} logoStyle={logoStyle} />
      </a>
      <Typography variant="body1">{description}</Typography>
      <a href={websiteURL} target="_blank" rel="noopener noreferrer" className={styles.link}>
        Learn more about {name}
      </a>
    </div>
  );
};

export default SponsorsBox;
