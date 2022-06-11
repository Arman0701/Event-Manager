import "./Slider.css";
import { useState, useEffect, useCallback } from "react";
import BtnSlider from "./BtnSlider";

export default function Slider({ children, interval, coverContent }) {
    const [slideIndex, setSlideIndex] = useState(1);
    const memoizedNextSlide = useCallback(nextSlide, [ children.length, slideIndex ]);

    useEffect(() => {
        if (interval) {
            const intervalID = setInterval(() => {
                memoizedNextSlide();
            }, interval);
            return () => clearInterval(intervalID);
        }
    }, [interval, memoizedNextSlide]);

    function nextSlide() {
        if (slideIndex !== children.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === children.length) {
            setSlideIndex(1);
        }
    }

    function prevSlide() {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(children.length);
        }
    }

    function moveDot(index) {
        setSlideIndex(index);
    }

    return (
        <div className="container-slider">
            {children.map((child, index) => {
                return (
                    <div
                        key={index}
                        className={
                            slideIndex === index + 1
                                ? "slide active-anim"
                                : "slide"
                        }
                    >
                        {coverContent && (
                            <div className="cover">{coverContent}</div>
                        )}
                        {child}
                    </div>
                );
            })}
            <BtnSlider moveSlide={nextSlide} direction="next" />
            <BtnSlider moveSlide={prevSlide} direction="prev" />

            <div className="container-dots">
                {Array.from({ length: children.length }).map((item, index) => (
                    <div
                        key={index}
                        onClick={() => moveDot(index + 1)}
                        className={
                            slideIndex === index + 1 ? "dot active" : "dot"
                        }
                    >
                        <p>{index + 1 < 10 ? "0" + (index + 1) : index + 1}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
