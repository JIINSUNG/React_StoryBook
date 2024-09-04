import React, { useState, useEffect, ReactNode } from "react";

export type CarouselProps = {
  children: ReactNode[];
  className?: string;
  autoSlideInterval?: number; // 슬라이드 간격(밀리초)
  autoScroll?: boolean; // 자동 스크롤 여부
};

export const Carousel: React.FC<CarouselProps> = ({
  children,
  className,
  autoSlideInterval = 3000, // 기본 간격은 3초
  autoScroll = true, // 기본값은 true (자동 스크롤 활성화)
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // auto scroll이 true인 경우에만 자동 스크롤 적용
    if (!autoScroll) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === children.length - 1 ? 0 : prevIndex + 1,
      );
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoScroll, children.length, autoSlideInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            {child}
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 right-5 m-2 px-2 py-1 bg-black bg-opacity-80 text-white text-sm rounded-2xl">
        {currentIndex + 1} / {children.length}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white px-2 py-1"
        onClick={goToPrevious}
      >
        {"<"}
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white px-2 py-1"
        onClick={goToNext}
      >
        {">"}
      </button>
    </div>
  );
};
