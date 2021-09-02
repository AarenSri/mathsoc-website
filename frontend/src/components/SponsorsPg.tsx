import React from "react";
import { Typography } from "@material-ui/core";
import styles from "src/styles/SponsorsPg.module.scss";

import { sponsor } from "src/data/sponsorsData";

interface sponsorProps extends sponsor {
  typeCheck: "principal" | "partner";
}

const SponsorsPg: React.FC<sponsorProps> = ({
  name,
  type,
  logoURL,
  websiteURL,
  profileText,
  typeCheck,
}) => {
  const visible = typeCheck != type;
  return (
    <section className={visible && styles.invisible}>
      <section className={styles.mainContainer}>
        {/*IMAGE*/}
        <img src={logoURL} alt={name} className={styles.logo}></img>
        {/*TITLE*/}
        <Typography variant="h3" align="left" className={styles.title}>{name}</Typography>
        {/*PARAGRAPH*/}
        <Typography variant="h5">{profileText}</Typography>
        {/*LINK*/}
        <a href={websiteURL} target="_blank" >See more here!</a>
      </section>
    </section>
  );
};

export default SponsorsPg;
