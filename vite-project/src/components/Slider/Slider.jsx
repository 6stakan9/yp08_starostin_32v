import React, { useState, useEffect } from "react";
import "./Slider.scss";

const Slider = () => {
    const images = [
        "./assets/img/photo_for_gallery_1.png",
        "./assets/img/photo_for_gallery_2.png",
        "./assets/img/photo_for_gallery_3.png",
        "./assets/img/photo_for_gallery_4.png",
        "./assets/img/photo_for_gallery_5.png",
        "./assets/img/photo_for_gallery_6.png",
        "./assets/img/photo_for_gallery_7.png",
        "./assets/img/photo_for_gallery_8.png",
        "./assets/img/photo_for_gallery_9.png",
    ];

    const itemsPerSlide = 3; // показываем 3 за раз
    const totalSlides = Math.ceil(images.length / itemsPerSlide);

    const [index, setIndex] = useState(0);

    // Автоперелистывание
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % totalSlides);
        }, 3000);

        return () => clearInterval(interval);
    }, [totalSlides]);

    return (
        <div className="slider">
            <div
                className="slides"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                    const start = slideIndex * itemsPerSlide;
                    const slideImages = images.slice(start, start + itemsPerSlide);

                    return (
                        <div className="slide" key={slideIndex}>
                            {slideImages.map((src, i) => (
                                <img key={i} src={src} alt={`slide-${slideIndex}-${i}`} />
                            ))}
                        </div>
                    );
                })}
            </div>

            <div className="indicators">
                {Array.from({ length: totalSlides }).map((_, i) => (
                    <div
                        key={i}
                        className={`line ${i === index ? "active" : ""}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
