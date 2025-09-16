import { useState, useEffect } from "react";
import styles from "./Main.module.scss";
import { useSlidersList } from "../../hooks/useSlidersList";
import { HowToUse } from "../HowToUse/HowToUse.jsx";

export const Main = () => {
  const { SlidersList, loading, error } = useSlidersList();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!SlidersList || SlidersList.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === SlidersList.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [SlidersList]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main className={styles.main}>
      <div className={styles.slider}>
        {SlidersList.map((slider, index) => {
          const { id, imageUrl, text } = slider;

          return (
            <img
              key={id}
              className={`${styles.image} ${
                index === currentIndex ? styles.active : styles.hidden
              }`}
              src={imageUrl}
              alt={text || "Slider image"}
            />
          );
        })}
      </div>
      <HowToUse isMobile={isMobile} />
    </main>
  );
};
