import im1 from "./assets/images/https_specials-1.png";
import im2 from "./assets/images/https_specials-2.png";
import im3 from "./assets/images/https_specials-3.png";
import im4 from "./assets/images/https_specials-4.png";
import im5 from "./assets/images/https_specials-5.png";
import im6 from "./assets/images/https_specials-6.png";
import im7 from "./assets/images/https_specials-7.png";
import im8 from "./assets/images/https_specials-8.png";
import { keyable } from "./types";

export const getRespectiveImage = (key: string) => {
  const imgObject: keyable = {
    "https_specials-1.png": im1,
    "https_specials-2.png": im2,
    "https_specials-3.png": im3,
    "https_specials-4.png": im4,
    "https_specials-5.png": im5,
    "https_specials-6.png": im6,
    "https_specials-7.png": im7,
    "https_specials-8.png": im8,
  };

  return imgObject[key];
};

export function convertSecondsToHoursAndMinutes(seconds: number) {
  if (isNaN(seconds) || seconds < 0) {
    return "";
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  const hoursText = hours > 0 ? `${hours}h${hours !== 1 ? "s" : ""}` : "";
  const minutesText = `${minutes}m`;
  return `${hoursText} ${minutesText}`;
}
