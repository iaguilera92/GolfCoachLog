import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import golfCoachLogLogo from "../../logo-golfcoachlog.png";

const featureSlides = [
  {
    title: "VIDEO & SWING ANALYSIS",
    description:
      "Centralize all your lesson videos and swing feedback in one organized platform. Track your clients’ progress over time and build a visual history of their development. With integrated analysis tools, you can deliver precise, easy-to-understand feedback, turning every video into a powerful coaching moment.",
  },
  {
    title: "COACH NOTES & TASK MANAGEMENT",
    description:
      "Centralize your notes, tasks, and client communication in a single platform designed for coaches. No more switching between apps, everything you need to run your coaching business is in one place. Create and share notes, assign tasks, and stay fully organized, so you can focus on delivering better coaching.",
  },
  {
    title: "GOLF CLINICS",
    description:
      "Design and run high-quality golf clinics for players of all levels. Easily invite clients, manage group sessions, and streamline the entire registration process. Deliver engaging, structured learning experiences that help your clients improve, while you grow your coaching business with efficiency and professionalism.",
  },
];

function Areas() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const { ref: reviewsRef, inView: reviewsInView } = useInView({
    triggerOnce: true,
    threshold: 0.22,
    rootMargin: "0px 0px -6% 0px",
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featureSlides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

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
        sx={{
          px: { xs: 2, md: 6, lg: 10 },
          py: { xs: "10px !important", md: "16px !important" },
          display: "flex !important",
          alignItems: "center",
          justifyContent: "center",
          gridTemplateColumns: "none !important",
          gap: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: { xs: "150px", md: "190px" },
            py: { xs: 0, md: 1 },
            width: "100%",
            flex: "1 1 auto",
            textAlign: "center",
          }}
        >
          <Box
            component="img"
            src={golfCoachLogLogo}
            alt="Golf Coach Log"
            sx={{
              display: "block",
              width: { xs: "285px", sm: "340px", md: "420px" },
              maxWidth: "100%",
              height: "auto",
              objectFit: "contain",
              mx: "auto",
              filter: "drop-shadow(0 18px 32px rgba(0,0,0,0.18))",
            }}
          />
        </Box>
      </Container>

      <Container
        maxWidth={false}
        className={`app-reviews app-section-reveal app-section-reveal--up ${reviewsInView ? "is-visible" : ""}`}
        sx={{
          px: { xs: 2, md: 6, lg: 10 },
          mt: { xs: "28px", md: "-28px" },
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
