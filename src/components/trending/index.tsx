import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { TMovie } from "../../types";
import styles from "./styles.module.scss";
import { getRespectiveImage } from "../../utils";

type TrendingPropsType = {
  movies: TMovie[];
  handleFeaturedChange: (movie: TMovie) => void;
};

const Trending: FC<TrendingPropsType> = ({ movies, handleFeaturedChange }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.trendingContainer}>
      <h2 className={styles.trendingTitle}>Trending now</h2>
      <Slider {...settings}>
        {movies.map((item, index) => (
          <div
            key={index}
            className={styles.sliderItem}
            onClick={() => handleFeaturedChange(item)}
          >
            <img
              width={180}
              height={210}
              alt={`carousel-${index}`}
              style={{ objectFit: "cover" }}
              src={getRespectiveImage(item.CoverImage)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Trending;
