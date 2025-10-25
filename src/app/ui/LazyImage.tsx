'use client';
import { useState } from 'react';
import Image from 'next/image';

 interface LazyImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?:string
 }

 export default function LazyImage({
    src,
    alt,
    width,
    height,
    className = '',
 }: LazyImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`overflow-hidden ${className}`}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className={`transition-opacity duration-300 ${
                isLoaded ? 'opacity-100' :'opacity-0'
              }`}
              onLoad={() => setIsLoaded(true)}
              placeholder='blur'
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
    </div>
  );
}