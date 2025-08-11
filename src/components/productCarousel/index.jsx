import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./productCarousel.module.css";

const ProductCarousel = ({ products, sectionTitle }) => {
  const scrollRef = useRef();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollRef.current;
    el?.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);
    return () => {
      el?.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [products]);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.carouselWrapper}>
      <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
      <div className={styles.carouselOuter}>
        {canScrollLeft && (
          <button className={`${styles.navButton} ${styles.left}`} onClick={() => scroll("left")}>
            &lt;
          </button>
        )}
        <div className={styles.carouselTrack} ref={scrollRef}>
          {products.map((p, i) => (
            <Link
              to={`/produto/${p.id}`}
              key={i}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className={styles.card}>
                {p.discount && <span className={styles.discount}>-{p.discount}%</span>}
                <img src={p.image} alt={p.title} className={styles.image} />
                <div className={styles.info}>
                  <h3 className={styles.title}>{p.title}</h3>
                  <p className={styles.price}>R$ {p.price}</p>
                  {p.freeShipping && <span className={styles.freeShipping}>Frete grátis</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
        {canScrollRight && (
          <button className={`${styles.navButton} ${styles.right}`} onClick={() => scroll("right")}>
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCarousel;