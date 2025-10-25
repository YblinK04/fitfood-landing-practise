'use client'

 import {useState, useCallback} from 'react';

  export function useSlider(itemsLength: number) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) =>
        prev === itemsLength - 1 ? 0 : prev + 1
        );
    }, [itemsLength])
  
     const prevSlide = useCallback (() => {
        setCurrentIndex((prev) => 
        prev === 0 ? itemsLength - 1 : prev - 1
        );
     },[itemsLength]);

     const goToSlide = useCallback ((index: number) => {
        setCurrentIndex(index);
     }, [] );

     return {
        currentIndex,
        nextSlide,
        prevSlide,
        goToSlide,
     };
  }