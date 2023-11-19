import { FC } from "react";
import styles from "./styles.module.scss";
import { TMovie } from "../../types";
import {
  getRespectiveImage,
  convertSecondsToHoursAndMinutes,
} from "../../utils";
import mock1 from "../../assets/images/FeaturedCoverImage.png";

type FeaturedPropsType = {
  featured: TMovie | null;
  isPlay: boolean;
};

const Featured: FC<FeaturedPropsType> = ({ featured, isPlay }) => {
  const {
    Title,
    VideoUrl,
    Category,
    Duration,
    MpaRating,
    CoverImage,
    ReleaseYear,
    Description,
  } = featured || {};

  const minutesDuration =
    Duration && convertSecondsToHoursAndMinutes(+Duration);
  const bgCoverImage = getRespectiveImage(CoverImage || "") || mock1;

  const RenderInfo = () => (
    <>
      <h3 className={styles.category}>{Category}</h3>

      <h1>{Title ?? ""}</h1>

      <div className={styles.dateInfo}>
        <span>{ReleaseYear ?? ""}</span>
        <span>{MpaRating ?? ""}</span>
        <span>{minutesDuration ?? ""}</span>
      </div>

      <div>{Description}</div>

      <div className={styles.buttonContainer}>
        <button className={styles.button}>►Play</button>
        <button className={`${styles.button} ${styles.infoButton}`}>
          More info
        </button>
      </div>
    </>
  );

  return (
    <>
      {VideoUrl && isPlay ? (
        <div className={styles.videoContainer}>
          <video className={styles.video} autoPlay loop muted playsInline>
            <source src={VideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.videoChildrenContainer}>
            <RenderInfo />
          </div>
        </div>
      ) : (
        <div
          className={styles.featuredContainer}
          style={{ backgroundImage: `url(${bgCoverImage})` }}
        >
          <RenderInfo />
        </div>
      )}
    </>
  );
};

export default Featured;
