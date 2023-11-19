import { useState, FC } from "react";
import styles from "./styles.module.scss";

import avatar from "../../assets/images/avatar.jfif";
import homeIcon from "../../assets/icons/Group 46.png";
import wLaterIcon from "../../assets/icons/Group 47.png";
import genresIcon from "../../assets/icons/Group 53.png";
import moviesIcon from "../../assets/icons/Group 54.png";
import tvShowsIcon from "../../assets/icons/Group 56.png";
import searchIcon from "../../assets/icons/ICON - Search.png";

const Menu: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuIcons = [
    { label: "Search", icon: searchIcon },
    { label: "Home", icon: homeIcon },
    { label: "TV Shows", icon: tvShowsIcon },
    { label: "Movies", icon: moviesIcon },
    { label: "Genres", icon: genresIcon },
    { label: "Watch Later", icon: wLaterIcon },
  ];

  return (
    <div className={styles.wrapper}>
      <div
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        className={styles.menuContainer}
        style={{ width: isMenuOpen ? "290px" : "100px" }}
      >
        {isMenuOpen && (
          <div className={styles.avatarContainer}>
            <img src={avatar} className={styles.avatar} />
            <span>Daniel</span>
          </div>
        )}

        <div className={styles.iconsWrapper}>
          {menuIcons.map(({ label, icon }) => (
            <div className={styles.iconsContainer} key={label}>
              <img src={icon} className={styles.icon} />
              {isMenuOpen && <span className={styles.iconsLabel}>{label}</span>}
            </div>
          ))}
        </div>

        {isMenuOpen && (
          <div className={styles.helpBlock}>
            <div>Language</div>
            <div>Get Help</div>
            <div>Exit</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
