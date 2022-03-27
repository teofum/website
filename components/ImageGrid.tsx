import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import cn from 'classnames';

import styles from '../styles/module/ImageGrid.module.scss';

type ImageFormat = 'webp' | 'jpeg' | 'png' | 'gif';
type ImageDef = { src: string, formats: ImageFormat[], alt: string, caption?: string };

interface ImageGridProps {
  images: ImageDef[];
  minSize?: string;
  pixelated?: boolean;
  noScroll?: boolean;
}

const getScaleFactor = () => {
  const scaling = window.devicePixelRatio;
  return Math.round(scaling) / scaling;
};

const sources = (img: ImageDef, size?: number) => {
  const fallback = img.formats[img.formats.length - 1];
  return img.formats
    .map(format => (
      <source key={format} srcSet={`${img.src}.${format}`}
        type={`image/${format}`} />
    ))
    .concat(<img src={`${img.src}.${fallback}`} alt={img.alt} width={size} />);
};

const ImageGrid = ({ images, minSize, pixelated, noScroll }: ImageGridProps) => {
  const [view, setView] = useState<ImageDef | null>(null);
  const [viewSize, setViewSize] = useState(0);

  return (
    <div className={cn(
      styles.grid,
      {
        [styles.pixelated]: pixelated,
        [styles.noScroll]: noScroll
      }
    )}
      style={{ '--min-size': minSize } as any}>
      {images.map((img, i) => (
        <figure key={i}>
          <picture
            onClick={e => {
              const w = (e.target as HTMLImageElement).naturalWidth;
              setView(img);
              setViewSize(w * (pixelated ? getScaleFactor() : 1));
            }}>

            {sources(img)}
          </picture>
          {img.caption && <figcaption>{img.caption}</figcaption>}
        </figure>
      ))}

      <TransitionGroup>
        {view &&
          <CSSTransition classNames={{ ...styles }} timeout={500}>
            <div className={styles.viewOverlay}
              onClick={() => setView(null)}>
              <div className={styles.closeHint}>
                Click anywhere to close
              </div>
              <figure className={styles.viewFigure}>
                <picture>
                  {sources(view, viewSize)}
                </picture>
                {view.caption && <figcaption>{view.caption}</figcaption>}
              </figure>
            </div>
          </CSSTransition>}
      </TransitionGroup>
    </div>
  );
};

export default ImageGrid;