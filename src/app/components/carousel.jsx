"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
    const images = [
        { id: '1', src: '/pizza-peperoni.jpg', alt: 'picsa', text: 'Prueba nuestra deliciosa pizza de Pepperoni' },
        { id: '2', src: '/pizza-donatelo.jpg', alt: 'picsa2', text: '¡No te pierdas de nuestras promociones!' }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 3000);
        return () => clearInterval(interval);
    }, [totalSlides]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="slider w-slider">
            <div className="w-slider-mask" style={{ overflow: "hidden", position: "relative" }}>
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        className="slide-container"
                        style={{
                            transform: `translateX(${(index - currentIndex) * 100}%)`,
                            transition: "transform 0.5s ease-in-out",
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            zIndex: 1
                        }}
                    >
                        <div className="slide active">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ objectFit: 'cover' }}
                                layout="responsive"
                            />
                        </div>
                        <div className="text-banner">
                            <p>{image.text}</p>
                        </div>
                    </div>
                ))}
            </div>
                <div className="left-arrow arrow-style w-slider-arrow-left clickeable" onClick={prevSlide}>
                <div className="w-icon-slider-left clickeable">
                    <FaArrowLeft/>
                </div>
            </div>
            <div className="left-arrow right-arrow w-slider-arrow-right clickeable" onClick={nextSlide}>
                <div className="w-icon-slider-right clickeable">
                    <FaArrowRight/>
                </div>
            </div>
            <div className="w-slider-nav w-round w-num clickeable">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`clickeable w-slider-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    >{_.id}</div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;