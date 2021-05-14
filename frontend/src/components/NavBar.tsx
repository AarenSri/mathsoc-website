import React from "react";
import Link from "next/link";

import navLinks from "src/data/navLinks";
import styles from "src/styles/NavBar.module.scss";
import Hamburger from "hamburger-react";

const NavBar: React.FC = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <section>
      <div className={styles.mainContainer}>
        <div className={styles.leftLogoContainer}>
          <Link href="/">
            <img
              src="/images/mathsocLogoLong.svg"
              className={styles.logo}
              alt="mathsoc logo"
              aria-label="logo"
            />
          </Link>
        </div>
        <div>
          <ul className={styles.navBarList}>
            {navLinks.map(({ name, route }) => (
              <li key={name} className={styles.navItemBox}>
                <Link href={route}>
                  <a className={styles.navLink}>
                    <span className={styles.navItemText}>{name}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className={styles.mobileMainContainer}>
          <div style={{ visibility: "hidden" }}>
            {/* For easy flex box */}
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <Link href="/">
            <img
              src="/images/mathsocLogoLong.svg"
              className={styles.logo}
              alt="mathsoc logo"
              aria-label="logo"
              onClick={() => setOpen(false)}
            />
          </Link>

          <div>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
        {isOpen && (
          <div className={styles.mobileDropdown}>
            {/* <div className={styles.mobileDropdownLeft}></div> */}
            <div className={styles.mobileDropdownMiddle}>
              <ul className={styles.mobileList}>
                {navLinks.map(({ name, route }) => (
                  <li key={name} className={styles.navItemBox} onClick={() => setOpen(false)}>
                    <Link href={route}>
                      <span className={styles.navItemText}>{name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className={styles.mobileDropdownRight}></div> */}
          </div>
        )}
      </div>
    </section>
  );
};

export default NavBar;
