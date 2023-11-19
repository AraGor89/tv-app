import { useEffect, useState } from "react";

import data from "./data.json";
import Menu from "./components/menu";
import Trending from "./components/trending";
import Featured from "./components/featured/index";
import { TMovie } from "./types";
import styles from "./styles.module.scss";

function App() {
  const [trending, setTrending] = useState<TMovie[] | []>([]);
  const [featured, setFeatured] = useState<TMovie | null>(null);
  const [isPlay, setIsPlay] = useState(true);
  const FEATURED = "featured";

  useEffect(() => {
    const isInSStorage = !!sessionStorage?.getItem(FEATURED);

    const newFeatured = isInSStorage
      ? JSON?.parse(sessionStorage?.getItem(FEATURED) || "")
      : data?.Featured;

    newFeatured && setFeatured(newFeatured);

    if (isInSStorage) {
      const itemIndex = data.TendingNow.findIndex(
        (item) => item.Id === newFeatured?.Id
      );
      const updatedData = [
        data.TendingNow[itemIndex],
        ...data.TendingNow.slice(0, itemIndex),
        ...data.TendingNow.slice(itemIndex + 1),
      ];
      setTrending(updatedData);
      return;
    }
    data?.TendingNow && setTrending(data.TendingNow);
  }, []);

  const handleFeaturedChange = (movie: TMovie) => {
    setIsPlay(false);
    setFeatured(movie);
    sessionStorage.setItem("featured", JSON.stringify(movie));

    setTimeout(() => {
      setIsPlay(true);
    }, 2000);
  };

  return (
    <div>
      <Menu />
      <div className={styles.contentContainer}>
        <Featured featured={featured} isPlay={isPlay} />
        <Trending
          movies={trending}
          handleFeaturedChange={handleFeaturedChange}
        />
      </div>
    </div>
  );
}

export default App;
