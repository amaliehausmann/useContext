import { useImages } from "../../hooks/useImages";
import style from './Gallery.module.scss'

export function Gallery({ galleryStyling, theme }) {
  const { images } = useImages();

  return (
    <div className={`${style[galleryStyling]} ${theme}`} >
      {images &&
        images.length > 0 &&
        images.map((image, index) => (
          <img key={index} src={`../src/assets/${image}`} alt="" />
        ))}
    </div>
  );
}
