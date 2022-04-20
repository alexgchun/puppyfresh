import React from 'react'
import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react'
import images from './image'

export default function Framer() {
    // console.log(images)

    const [width, setWidth] = useState(0)
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 10);
    }, []);


    return (
        <div>
            <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
                <motion.div 
                    drag="x"
                    dragConstraints={{right: 0, left: -width}}  
                    className='inner-carousel'
                    
                >
                    {images.map(image => {
                        return (
                            <motion.div className="item" key={image.link}>
                                <div className='item-container'>
                                    <img src={image.link} alt="" />
                                <h3 className='image-name'>{image.name}</h3>
                                <p>{image.desc}</p>
                                <div className='price'>
                                    <h3>{image.price}</h3>
                                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer">Shop Now</a>
                                </div>
                                

                                </div>
                                
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}

