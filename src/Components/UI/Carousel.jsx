import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  forwardRef,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "../CSS/carousel.css"; // plain CSS file

// Context to share carousel data between components
const CarouselContext = React.createContext(null);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

const Carousel = forwardRef(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onSelect = useCallback((api) => {
      if (!api) return;
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = useCallback(() => api && api.scrollPrev(), [api]);
    const scrollNext = useCallback(() => api && api.scrollNext(), [api]);

    const handleKeyDown = useCallback(
      (e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          scrollPrev();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    useEffect(() => {
      if (api && setApi) setApi(api);
    }, [api, setApi]);

    useEffect(() => {
      if (!api) return;
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => api.off("select", onSelect);
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={`carousel ${className}`}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);

const CarouselContent = forwardRef(({ className = "", ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="carousel__viewport">
      <div
        ref={ref}
        className={`carousel__container ${
          orientation === "horizontal"
            ? "carousel--horizontal"
            : "carousel--vertical"
        } ${className}`}
        {...props}
      />
    </div>
  );
});

const CarouselItem = forwardRef(({ className = "", ...props }, ref) => {
  const { orientation } = useCarousel();
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={`carousel__item ${
        orientation === "horizontal"
          ? "carousel__item--horizontal"
          : "carousel__item--vertical"
      } ${className}`}
      {...props}
    />
  );
});

const CarouselButton = forwardRef(({ direction, onClick, disabled }, ref) => (
  <button
    ref={ref}
    className={`carousel__button carousel__button--${direction}`}
    onClick={onClick}
    disabled={disabled}
  >
    {direction === "prev" ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
  </button>
));

const CarouselPrevious = forwardRef((props, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <CarouselButton
      ref={ref}
      direction="prev"
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      {...props}
    />
  );
});

const CarouselNext = forwardRef((props, ref) => {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <CarouselButton
      ref={ref}
      direction="next"
      onClick={scrollNext}
      disabled={!canScrollNext}
      {...props}
    />
  );
});

export default {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
