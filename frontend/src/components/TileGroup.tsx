import React from "react";
import { Typography } from "@material-ui/core";

import TileLink from "./TileLink";
import styles from "src/styles/tile.module.scss";
import { groups } from "src/data/revisionData";

interface tileGroupProps extends groups {
  visible; 
}

const TileGroup: React.FC<tileGroupProps> = ({
  groupHeader,
  groupLinks,
  visible,
}) => {
  return (
    <div className={visible}>
      <Typography variant="h5">
        {groupHeader}
      </Typography>
      <ul className={styles.tileGroup}>
        {groupLinks.map((link, index) => <TileLink {...link} key={index} /> )}
      </ul>
    </div>
  );
};

export default TileGroup;
