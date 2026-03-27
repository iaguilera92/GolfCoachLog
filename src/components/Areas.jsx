import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Box, Container, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 5, suffix: "M", label: "Global\nUsers" },
  { value: 94, suffix: "M", label: "Rounds\nScored" },
  { value: 38, suffix: "K", label: "Courses\nWorldwide" },
];

const featureSlides = [
  {
    title: "GAME-CHANGING VIDEO ANALYSIS",
    description:
      "Analyze swings with precision using lines, angles, and frame-by-frame control. Compare progress over time and easily save or assign videos to players for smarter coaching.",
  },
  {
    title: "Clinics",
    description:
      "Create and sell group golf clinics with ease. Set pricing, manage capacity, and offer simple sign-ups while tracking attendance and participation.",
  },
  {
    title: "Programs",
    description:
      "Organize camps and training programs effortlessly. Customize pricing, control group size, and streamline player registration with built-in tracking.",
  },
];

function Areas() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
    rootMargin: "0px 0px -8% 0px",
  });
  const { ref: reviewsRef, inView: reviewsInView } = useInView({
    triggerOnce: true,
    threshold: 0.22,
    rootMargin: "0px 0px -6% 0px",
  });
  const [countStarted, setCountStarted] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featureSlides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (inView) {
      setCountStarted(true);
    }
  }, [inView]);

  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % featureSlides.length);
  };

  const goToPrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + featureSlides.length) % featureSlides.length);
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event) => {
    if (touchStartX === null) return;

    const endX = event.changedTouches[0]?.clientX ?? touchStartX;
    const deltaX = endX - touchStartX;

    if (Math.abs(deltaX) > 45) {
      if (deltaX < 0) {
        goToNextSlide();
      } else {
        goToPrevSlide();
      }
    }

    setTouchStartX(null);
  };

  return (
    <Box
      className="app-stats"
      sx={{
        background: 'url("/fondo-18.png") center/cover no-repeat',
      }}
    >
      <Container
        maxWidth={false}
        className="app-stats__container"
        sx={{ px: { xs: 2, md: 6, lg: 10 } }}
        ref={ref}
      >
        {stats.map((stat, index) => (
          <Box key={stat.label} className="app-stats__item">
            <Typography
              component="h2"
              className="app-stats__value"
              sx={{
                width: "100%",
                textAlign: "center",
                fontSize: {
                  xs: "2.8rem",
                  sm: "4.2rem",
                  md: "5.2rem",
                },
                fontWeight: 900,
                fontFamily: "Roboto-BoldCondensed, sans-serif",
                lineHeight: 0.78,
                letterSpacing: index === 1 ? "-0.05em" : "-0.08em",
                color: "#ffffff",
                "& span": {
                  color: "#ffffff",
                },
              }}
            >
              {stat.suffix ? (
                <>
                  <span>
                    {countStarted ? (
                      <CountUp
                        key={`count-${stat.label}`}
                        start={0}
                        end={stat.value}
                        duration={3.2}
                      />
                    ) : 0}
                  </span>
                  {stat.suffix}
                </>
              ) : (
                countStarted ? (
                  <CountUp
                    key={`count-${stat.label}`}
                    start={0}
                    end={stat.value}
                    duration={3.2}
                  />
                ) : 0
              )}
            </Typography>

            <Typography
              component="small"
              className="app-stats__label"
              sx={{
                display: "block",
                marginTop: { xs: "16px", md: "20px" },
                fontSize: { xs: "0.68rem", sm: "0.8rem", md: "0.9rem" },
                fontWeight: 700,
                fontFamily: "Roboto-BoldCondensed, sans-serif",
                lineHeight: 1.1,
              }}
            >
              {stat.label.split("\n").map((line) => (
                <span key={line} className="app-stats__label-line">
                  {line}
                </span>
              ))}
            </Typography>
          </Box>
        ))}
      </Container>

      <Container
        maxWidth={false}
        className={`app-reviews app-section-reveal app-section-reveal--up ${reviewsInView ? "is-visible" : ""}`}
        sx={{
          px: { xs: 2, md: 6, lg: 10 },
          mt: { xs: 0, md: "-56px" },
          mb: 0,
          position: "relative",
          zIndex: 2,
        }}
        ref={reviewsRef}
      >
        <Box
          className="app-reviews__panel"
          sx={{
            pt: { xs: "18px", md: "64px" },
            pb: { xs: "10px", md: "10px" },
            backgroundColor: "#ffffff",
          }}
        >
          <Box
            className="app-reviews__slider"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            sx={{ touchAction: "pan-y", userSelect: "none" }}
          >
            {featureSlides.map((slide, index) => (
              <blockquote
                key={slide.title}
                className={`app-reviews__quote ${index === activeSlide ? "is-active" : ""}`}
              >
                <Typography
                  component="h3"
                  sx={{
                    margin: "0 0 18px",
                    textAlign: "center",
                    fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                    fontWeight: 900,
                    fontSize: { xs: "1.85rem", md: "2.35rem" },
                    lineHeight: 1,
                    color: "#11212a",
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography component="p" className="app-reviews__text">
                  <Box
                    component="span"
                    sx={{
                      display: "block",
                      maxWidth: { xs: "100%", md: "700px" },
                      mx: "auto",
                    }}
                  >
                    {slide.description}
                  </Box>
                </Typography>
              </blockquote>
            ))}
          </Box>

          <Box className="app-reviews__dots" aria-label="Feature pagination">
            {featureSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                className={`app-reviews__dot ${index === activeSlide ? "is-active" : ""}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show ${slide.title}`}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Areas;
