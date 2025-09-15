import Footer from "../../assets/Footer.png";
import styles from "./Main.module.scss";
import { useSlidersList } from "../../hooks/useSlidersList";


export const Main = () => {
  const { SlidersList, loading, error } = useSlidersList();
  console.log(SlidersList);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main className={styles.main}>
      {SlidersList.slice(0, 1).map((slider) => {
        const { id, imageUrl, text } = slider;
        
        return (
          <div key={id} className={styles.slider}>
              <img className={styles.image} src={imageUrl} alt={text || "Slider image"} />
            </div>
        );
      })}

      <img className={`${styles.image} ${styles.imageFooter}`} src={Footer} alt="Footer" />
    </main>
  );
};
