import React, { useEffect, useRef, useState } from "react";
import { Alert, Box, Button, Container, Snackbar, Typography } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import { useInView } from "react-intersection-observer";
import "./css/Informations.css";

function Informations() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const sectionOneRef = useRef(null);
  const { ref: sectionTwoRef, inView: sectionTwoInView } = useInView({
    triggerOnce: true,
    threshold: 0.22,
    rootMargin: "0px 0px -8% 0px",
  });
  const sectionThreeRef = useRef(null);
  const { ref: sectionFourRef, inView: sectionFourInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "0px 0px -6% 0px",
  });
  const [sectionOneInView, setSectionOneInView] = useState(false);
  const [sectionThreeInView, setSectionThreeInView] = useState(false);
  const handleComingSoon = () => {
    setOpenSnackbar(true);
  };

  useEffect(() => {
    const handleScrollReveal = () => {
      if (!sectionOneInView && sectionOneRef.current) {
        const rect = sectionOneRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.72 && rect.bottom >= window.innerHeight * 0.22) {
          setSectionOneInView(true);
        }
      }

      if (!sectionThreeInView && sectionThreeRef.current) {
        const rect = sectionThreeRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.72 && rect.bottom >= window.innerHeight * 0.22) {
          setSectionThreeInView(true);
        }
      }
    };

    handleScrollReveal();
    window.addEventListener("scroll", handleScrollReveal, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollReveal);
  }, [sectionOneInView, sectionThreeInView]);

  return (
    <Box className="tournament-block">
      <Box
        className="tournament-block__panel tournament-block__panel--full"
        ref={sectionOneRef}
      >
        <Container
          maxWidth="lg"
          className="tournament-block__container"
          sx={{ pt: { xs: "18px", md: 0 } }}
        >
          <Box
            className={`tournament-block__copy app-section-reveal app-section-reveal--right ${sectionOneInView ? "is-visible" : ""}`}
          >
            <Typography
              component="h2"
              className="tournament-block__title"
              sx={{
                fontWeight: 900,
                textAlign: "center",
                fontSize: { xs: "1.95rem", sm: "2.3rem", md: "2.8rem" },
                fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
              }}
            >
              <Box component="span" sx={{ display: { xs: "inline", md: "block" } }}>
                TOURNAMENTS &amp;
              </Box>
              <Box component="span" sx={{ display: { xs: "inline", md: "block" } }}>
                COMPETITION
              </Box>
            </Typography>

            <Typography
              component="p"
              className="tournament-block__description"
              sx={{ textAlign: "center", mx: "auto" }}
            >
              Create internal tournaments, track leaderboards and rankings, and
              build a competitive environment that motivates players to improve
              and stay engaged.
            </Typography>

            <Button
              variant="contained"
              className="tournament-block__button"
              sx={{ mt: "32px" }}
              onClick={handleComingSoon}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" className="tournament-block__container">
        <Box
          className={`tournament-block__community app-section-reveal app-section-reveal--left ${sectionTwoInView ? "is-visible" : ""}`}
          ref={sectionTwoRef}
        >
          <Box className="tournament-block__community-image-wrap">
            <img
              src="/informations.png"
              alt="Golf community preview"
              className="tournament-block__community-image"
            />
          </Box>

          <Box className="tournament-block__community-copy">
            <Typography
              component="h2"
              className="tournament-block__community-title"
              sx={{
                fontWeight: 900,
                fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                fontSize: { xs: "2rem", sm: "2.25rem", md: "2.7rem" },
              }}
            >
              PERFORMANCE TRACKING
            </Typography>

            <Typography component="p" className="tournament-block__community-description">
              Track putting, short game, and swing performance, monitor
              progress over time, and achieve measurable improvement with clear
              insights.
            </Typography>

            <Button
              variant="contained"
              className="tournament-block__button"
              onClick={handleComingSoon}
            >
              See More
            </Button>
          </Box>
        </Box>
      </Container>

      <Box
        className="tournament-block__premium tournament-block__premium--full"
        ref={sectionThreeRef}
      >
        <Container
          maxWidth={false}
          className="tournament-block__container tournament-block__container--premium"
          sx={{ px: { xs: 3, md: 6, lg: 10 } }}
        >
          <Box
            className={`tournament-block__premium-inner app-section-reveal app-section-reveal--right ${sectionThreeInView ? "is-visible" : ""}`}
            sx={{ px: { xs: 1, md: 10, lg: 14 } }}
          >
            <Box className="tournament-block__premium-copy">
              <Typography
                component="h2"
                className="tournament-block__premium-title"
                sx={{
                  fontWeight: 900,
                  textAlign: { xs: "center", md: "left" },
                  fontSize: { xs: "2.25rem", sm: "2.8rem", md: "2.7rem" },
                  fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                  whiteSpace: { md: "nowrap" },
                  lineHeight: 1.04,
                  mb: "8px",
                }}
              >
                COACH-PLAYER COMMUNICATION
              </Typography>

              <Typography
                component="p"
                className="tournament-block__premium-description"
                sx={{ textAlign: { xs: "center", md: "left" }, mx: { xs: "auto", md: 0 } }}
              >
                Enable direct messaging, send feedback instantly, and share
                drills, tips, and notes to keep players connected and
                improving.
              </Typography>
            </Box>

            <Box
              className="tournament-block__premium-action"
              sx={{ pr: { md: "56px", lg: "84px" }, pl: { md: "56px", lg: "84px" } }}
            >
              <Button
                variant="contained"
                className="tournament-block__button"
                onClick={handleComingSoon}
              >
                Explore Premium
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" className="tournament-block__container">
        <Box
          className={`tournament-block__app tournament-block__app--reveal ${sectionFourInView ? "is-visible" : ""}`}
          ref={sectionFourRef}
        >
          <Box
            className="tournament-block__app-layout"
            sx={{
              width: "100%",
              display: { xs: "flex", md: "grid" },
              flexDirection: { xs: "column", md: "unset" },
              alignItems: { xs: "center !important", md: "center" },
              justifyContent: { xs: "center !important", md: "center" },
              textAlign: { xs: "center", md: "left" },
              mx: "auto",
            }}
          >
            <Box
              className="tournament-block__app-copy"
              sx={{
                width: { xs: "100%", md: "340px" },
                maxWidth: { xs: "100%", md: "340px" },
                mx: { xs: "auto", md: 0 },
                alignSelf: { xs: "center", md: "auto" },
              }}
            >
              <Typography component="h2" className="tournament-block__app-title" sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Box
                  component="span"
                  sx={{
                    display: "inline-block",
                    fontSize: { xs: "2.25rem", sm: "2.8rem", md: "2.7rem" },
                    fontWeight: 900,
                    fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                    lineHeight: 1,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    paddingBottom: { xs: "10px", md: "16px" },
                    whiteSpace: { md: "nowrap" },
                  }}
                >
                  Get The App
                </Box>
              </Typography>
            </Box>

            <Box
              className="tournament-block__app-visual"
              sx={{
                mx: { xs: "auto", md: 0 },
                justifyContent: { xs: "center", md: "center" },
                width: { xs: "100%", md: "auto" },
                alignSelf: { xs: "center", md: "auto" },
              }}
            >
              <Box className="tournament-block__app-phone-shell tournament-block__app-phone-shell--left">
                <Box className="tournament-block__app-phone-media">
                  <img
                    src="/hero-0.jpeg"
                    alt="Golf app preview 1"
                    className="tournament-block__app-phone tournament-block__app-phone--left"
                  />
                </Box>
                <img
                  src="/mobile.png"
                  alt="Mobile frame"
                  className="tournament-block__app-frame"
                />
              </Box>
              <Box className="tournament-block__app-phone-shell tournament-block__app-phone-shell--center">
                <Box className="tournament-block__app-phone-media">
                  <img
                    src="/app-1.png"
                    alt="Golf app preview 2"
                    className="tournament-block__app-phone tournament-block__app-phone--center"
                  />
                </Box>
                <img
                  src="/mobile.png"
                  alt="Mobile frame"
                  className="tournament-block__app-frame"
                />
              </Box>
              <Box className="tournament-block__app-phone-shell tournament-block__app-phone-shell--right">
                <Box className="tournament-block__app-phone-media">
                  <img
                    src="/hero-2.jpeg"
                    alt="Golf app preview 3"
                    className="tournament-block__app-phone tournament-block__app-phone--right"
                  />
                </Box>
                <img
                  src="/mobile.png"
                  alt="Mobile frame"
                  className="tournament-block__app-frame"
                />
              </Box>
            </Box>

            <Box
              className="tournament-block__app-actions"
              sx={{
                display: "flex",
                width: { xs: "fit-content", md: "auto" },
                maxWidth: { xs: "none", md: "none" },
                mr: { xs: "auto", md: "-90px" },
                justifyContent: { xs: "flex-start", md: "flex-end" },
                gap: { xs: "12px", md: "16px" },
                flexWrap: "nowrap",
                alignSelf: { xs: "flex-start", md: "auto" },
                position: "relative",
                ml: { xs: "-110px", md: "auto" },
                right: { xs: 0, md: "auto" },
              }}
            >
              <Box
                component="a"
                href="https://18birdies.onelink.me/IdkR/3fc1cc20"
                target="_blank"
                rel="noopener noreferrer"
                className="tournament-block__store-badge"
                aria-label="Get it on Google Play"
                sx={{
                  width: { xs: "218px", md: "auto" },
                  minWidth: { xs: "218px", md: "194px" },
                  maxWidth: { xs: "none", md: "none" },
                }}
              >
                <svg
                  viewBox="0 0 36 40"
                  aria-hidden="true"
                  className="tournament-block__store-icon tournament-block__store-icon--play"
                >
                  <path fill="#00D2FF" d="M3.76 2.57 21.58 20 3.76 37.43A3.66 3.66 0 0 1 3 35.12V4.88c0-.88.28-1.69.76-2.31Z" />
                  <path fill="#00F076" d="M3.76 2.57a3.3 3.3 0 0 1 4.06-.36L28.8 14.1 21.58 20 3.76 2.57Z" />
                  <path fill="#FFBD00" d="m28.8 14.1 4.27 2.45c2.57 1.47 2.57 5.43 0 6.9L28.8 25.9 21.58 20l7.22-5.9Z" />
                  <path fill="#FF3A44" d="M3.76 37.43 21.58 20l7.22 5.9-20.98 11.89a3.3 3.3 0 0 1-4.06-.36Z" />
                </svg>
                <Box>
                  <Typography component="span" className="tournament-block__store-small">
                    GET IT ON
                  </Typography>
                  <Typography component="span" className="tournament-block__store-name">
                    Google Play
                  </Typography>
                </Box>
              </Box>

              <Box
                component="a"
                href="https://18birdies.onelink.me/IdkR/4412480a"
                target="_blank"
                rel="noopener noreferrer"
                className="tournament-block__store-badge"
                aria-label="Download on the App Store"
                sx={{
                  width: { xs: "218px", md: "auto" },
                  minWidth: { xs: "218px", md: "194px" },
                  maxWidth: { xs: "none", md: "none" },
                }}
              >
                <AppleIcon className="tournament-block__store-icon" />
                <Box>
                  <Typography component="span" className="tournament-block__store-small">
                    Download on the
                  </Typography>
                  <Typography component="span" className="tournament-block__store-name">
                    App Store
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={2200}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="warning"
          icon={<ConstructionRoundedIcon fontSize="inherit" />}
          sx={{
            alignItems: "center",
            fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
            fontWeight: 700,
          }}
        >
          Under Construction
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Informations;
