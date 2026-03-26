import { useEffect, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import "./css/Hero.css";

const slides = [
  {
    eyebrow: "Golf Coaches",
    title: "Train with coaches and track progress",
    image: "/hero-0.png",
    alt: "Entrenamiento con golf coach",
  },
  {
    eyebrow: "Torneos",
    title: "Run tournaments with live results",
    image: "/hero-1.png",
    alt: "Gestión de torneos de golf",
  },
  {
    eyebrow: "Scorecard",
    title: "Keep every round on one scorecard",
    image: "/hero-2.png",
    alt: "Scorecard digital de golf",
  },
  {
    eyebrow: "Performance",
    title: "Turn stats into better decisions",
    image: "/hero-3.png",
    alt: "Análisis de rendimiento en golf",
  },
];

function Hero({ informationsRef, setVideoReady }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (setVideoReady) {
      setVideoReady(true);
    }
  }, [setVideoReady]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const handleScrollToServices = () => {
    if (!informationsRef?.current) {
      return;
    }

    const isMobile = window.innerWidth < 768;
    const offset = isMobile ? -40 : -80;
    const y = informationsRef.current.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const currentSlide = slides[activeSlide];

  return (
    <Box
      className="hero-landing"
      sx={{
        backgroundImage: "linear-gradient(90deg, rgba(5, 18, 28, 0.54), rgba(7, 31, 46, 0.3)), url('/fondo-7.jpg')",
        pt: { xs: "172px", md: 0 },
        pb: { xs: "48px", md: 0 },
        minHeight: { xs: "auto", md: "768px" },
        height: { xs: "auto", md: "100vh" },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: { xs: "flex-start", md: "center" },
      }}
    >
      <Container
        maxWidth="lg"
        className="hero-landing__container"
        sx={{ mt: { xs: "42px", md: 0 }, maxWidth: { md: "980px !important" } }}
      >
        <Box
          className="hero-landing__content"
          sx={{
            columnGap: { xs: 4, md: "0px" },
            justifyContent: { md: "center" },
            mx: { xs: "auto", md: "auto" },
            width: { md: "750px" },
            maxWidth: { md: "750px" },
            gridTemplateColumns: { md: "minmax(0, 450px) minmax(220px, 280px)" },
          }}
        >
          <Box
            className="hero-landing__copy"
            sx={{
              pt: { xs: 0, sm: 0 },
              justifySelf: { xs: "stretch", md: "center" },
              pr: { md: 0 },
              mr: { xs: 0, md: "20px" },
              ml: { xs: 0, md: 0 },
              mx: { xs: "auto", md: 0 },
              textAlign: { xs: "center", md: "left" },
              width: "100%",
              maxWidth: { md: "420px" },
            }}
          >
            <Typography
              component="h1"
              className="hero-landing__title"
              sx={{
                fontSize: { xs: "2.7rem", sm: "2.4rem", md: "3.05rem !important" },
                fontWeight: 900,
                fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                lineHeight: { xs: 0.92, md: 0.95 },
                mt: { xs: "24px", md: 0 },
              }}
            >
              <span className="hero-landing__title-desktop">
                PLAY BETTER GOLF
              </span>
              <span className="hero-landing__title-mobile">
                PLAY BETTER
                <br />
                GOLF
              </span>
            </Typography>

            <Box className="hero-landing__headline-wrap" sx={{ mx: { xs: "auto", md: 0 } }}>
              {slides.map((slide, index) => (
                <Typography
                  key={slide.title}
                  component="p"
                  className={`hero-landing__headline ${index === activeSlide ? "is-active" : ""}`}
                >
                  {slide.title}
                </Typography>
              ))}
            </Box>

            <Box
              className="hero-landing__actions"
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                mt: { xs: "-14px !important", md: "28px !important" },
              }}
            >
              <Button
                variant="contained"
                className="hero-landing__primary-btn"
                sx={{
                  py: "8px !important",
                  minHeight: "0 !important",
                  mt: { xs: "0 !important", md: "0 !important" },
                }}
                onClick={handleScrollToServices}
              >
                Try for Free
              </Button>
            </Box>
          </Box>

          <Box className="hero-landing__aside" sx={{ ml: { md: "0" }, maxWidth: { md: "260px" }, justifySelf: { md: "center" } }}>
            <Box className="hero-landing__visual">
              <Box
                className="hero-landing__screens"
                sx={{ width: { md: "210px" }, height: { md: "385px" } }}
              >
                <Box key={currentSlide.title} className="hero-landing__screen is-active">
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.alt}
                    className="hero-landing__screen-image"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          className="hero-landing__bottom"
          sx={{
            mt: { xs: "14px", md: "14px" },
            mx: "auto",
            transform: { md: "translateY(28px)" },
            width: { xs: "100%", md: "750px" },
            maxWidth: { md: "750px" },
            px: { xs: "6px", md: "16px" },
            py: { xs: "18px", md: "12px" },
          }}
        >
          <Box className="hero-landing__rating">
            <Box
              className="hero-landing__rating-appicon"
              sx={{ width: { md: "34px" }, height: { md: "34px" }, fontSize: { md: "0.78rem" } }}
            >
              <Box
                component="img"
                src="/icon.png"
                alt="Golf Coach Log"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </Box>
            <Box>
              <Typography
                component="p"
                className="hero-landing__rating-title"
                sx={{ fontSize: { md: "0.8rem" } }}
              >
                Best Golf App
              </Typography>
              <Typography
                component="p"
                className="hero-landing__rating-meta"
                sx={{ fontSize: { md: "0.72rem" } }}
              >
                290k Ratings
              </Typography>
            </Box>
          </Box>

          <Box className="hero-landing__stores" sx={{ gap: { md: "12px" } }}>
            <Box
              component="a"
              href="https://18birdies.onelink.me/IdkR/3fc1cc20"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-landing__store-badge"
              aria-label="Descargar en Google Play"
              sx={{ minWidth: { md: "138px" }, px: { md: "10px" }, py: { md: "8px" } }}
            >
              <svg
                viewBox="0 0 36 40"
                aria-hidden="true"
                className="hero-landing__store-icon hero-landing__store-icon--play"
              >
                <path fill="#00D2FF" d="M3.76 2.57 21.58 20 3.76 37.43A3.66 3.66 0 0 1 3 35.12V4.88c0-.88.28-1.69.76-2.31Z" />
                <path fill="#00F076" d="M3.76 2.57a3.3 3.3 0 0 1 4.06-.36L28.8 14.1 21.58 20 3.76 2.57Z" />
                <path fill="#FFBD00" d="m28.8 14.1 4.27 2.45c2.57 1.47 2.57 5.43 0 6.9L28.8 25.9 21.58 20l7.22-5.9Z" />
                <path fill="#FF3A44" d="M3.76 37.43 21.58 20l7.22 5.9-20.98 11.89a3.3 3.3 0 0 1-4.06-.36Z" />
              </svg>
              <Box>
                <Typography
                  component="span"
                  className="hero-landing__store-small"
                  sx={{ fontSize: { md: "0.6rem" } }}
                >
                  GET IT ON
                </Typography>
                <Typography
                  component="span"
                  className="hero-landing__store-name"
                  sx={{ fontSize: { md: "0.82rem" } }}
                >
                  Google Play
                </Typography>
              </Box>
            </Box>

            <Box
              component="a"
              href="https://18birdies.onelink.me/IdkR/4412480a"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-landing__store-badge"
              aria-label="Descargar en App Store"
              sx={{ minWidth: { md: "138px" }, px: { md: "10px" }, py: { md: "8px" } }}
            >
              <AppleIcon className="hero-landing__store-icon" />
              <Box>
                <Typography
                  component="span"
                  className="hero-landing__store-small"
                  sx={{ fontSize: { md: "0.6rem" } }}
                >
                  Download on the
                </Typography>
                <Typography
                  component="span"
                  className="hero-landing__store-name"
                  sx={{ fontSize: { md: "0.82rem" } }}
                >
                  App Store
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="hero-landing__nav" aria-label="Navegación del hero">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={`hero-landing__nav-dot ${index === activeSlide ? "is-active" : ""}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Mostrar ${slide.eyebrow}`}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
