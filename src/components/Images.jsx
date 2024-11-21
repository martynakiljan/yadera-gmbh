import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const Images = () => {
    const imageRefs = useRef([]);
    const [visibleImages, setVisibleImages] = useState([]);

    const mobileWrapper = useRef(null);
    const { scrollYProgress } = useScroll({
        target: mobileWrapper,
        offset: ['0.125 start', '0.875 end'],
    });
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-200%']);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisibleImages(prev => [...prev, entry.target]);
                    }
                });
            },
            { threshold: 0.2 }
        );

        imageRefs.current.forEach(image => {
            if (image) observer.observe(image); 
        });

        return () => {
            imageRefs.current.forEach(image => {
                if (image) observer.unobserve(image); 
            });
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <div className="images">
                <div className="images__inner">
                    {Array.from({ length: 3 }, (_, index) => (
                        <div
                            key={index}
                            className={`image image_${index + 1} ${
                                visibleImages.includes(imageRefs.current[index])
                                    ? 'image--visible'
                                    : ''
                            }`}
                            ref={el => (imageRefs.current[index] = el)}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="images-mobile-wrapper" ref={mobileWrapper}>
                <motion.div style={{ x }} className="images-mobile">
                    <div className="images-mobile-inner">
                        {Array.from({ length: 3 }, (_, index) => (
                            <div
                                key={index}
                                className={`image image_${index + 1}`}
                            ></div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Images;
