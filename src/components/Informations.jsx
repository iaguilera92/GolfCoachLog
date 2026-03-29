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
                COMPETITIONS
              </Box>
            </Typography>

            <Typography
              component="p"
              className="tournament-block__description"
              sx={{ textAlign: "center", mx: "auto" }}
            >
              Create, manage, and track tournaments effortlessly while
              delivering a competitive experience your clients will love. From
              custom formats to rankings and point systems, you can turn every
              event into a powerful motivation tool, encouraging consistency,
              performance, and long-term engagement.
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
              PRACTICE LOG
            </Typography>

            <Typography component="p" className="tournament-block__community-description">
              Empower your clients to take ownership of their improvement with
              a dynamic practice tracking system. Record sessions, track key
              stats, and build consistency through structured training.
              Transform practice into progress, creating a motivating
              experience that keeps your clients engaged, accountable, and
              continuously improving.
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
                PAYMENTS & REVENUE MANAGEMENT
              </Typography>

              <Typography
                component="p"
                className="tournament-block__premium-description"
                sx={{ textAlign: { xs: "center", md: "left" }, mx: { xs: "auto", md: 0 } }}
              >
                Take full control of your coaching business with a complete
                payment and revenue system. Track income from lessons,
                packages, clinics, tournaments, and pro shop sales all
                seamlessly connected to your clients and sessions. Everything
                is organized, recorded, and easy to manage, so you can focus
                on growing your business without the complexity. Being a coach
                and an entrepreneur has never been this simple.
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
          sx={{ pb: { md: "12px" } }}
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
                gridTemplateColumns: { md: "280px minmax(520px, 640px) 320px" },
              }}
            >
            <Box
              className="tournament-block__app-copy"
              sx={{
                width: { xs: "100%", md: "340px" },
                maxWidth: { xs: "100%", md: "340px" },
                mx: { xs: "auto", md: 0 },
                alignSelf: { xs: "center", md: "auto" },
                textAlign: { xs: "center", md: "left" },
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                pl: { xs: "18px", md: 0 },
              }}
            >
              <Typography
                component="h2"
                className="tournament-block__app-title"
                sx={{
                  textAlign: { xs: "center !important", md: "left" },
                  width: "100%",
                  mx: "auto",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    display: { xs: "block", md: "inline-block" },
                    fontSize: { xs: "2.25rem", sm: "2.8rem", md: "2.7rem" },
                    fontWeight: 900,
                    fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                    lineHeight: 1,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    paddingBottom: { xs: "22px", md: "16px" },
                    whiteSpace: { md: "nowrap" },
                    textAlign: { xs: "center", md: "left" },
                    mx: { xs: "auto", md: 0 },
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
                width: { xs: "100%", md: "560px" },
                maxWidth: { xs: "100%", md: "560px" },
                alignSelf: { xs: "center", md: "auto" },
                display: "flex",
                pl: { xs: "18px", md: 0 },
              }}
            >
              <Box
                component="img"
                src="/get-the-app.webp"
                alt="Get the app preview"
                sx={{
                  display: "block",
                  width: { xs: "min(100vw - 2px, 740px)", md: "660px" },
                  maxWidth: "100%",
                  height: "auto",
                  mx: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 18px 36px rgba(0,0,0,0.16))",
                }}
              />
            </Box>

            <Box
              className="tournament-block__app-actions"
                sx={{
                  display: "flex",
                  width: { xs: "332px", md: "auto" },
                  maxWidth: { xs: "none", md: "none" },
                  mr: { xs: 0, md: 0 },
                  justifyContent: { xs: "center", md: "flex-end" },
                gap: { xs: "14px", sm: "12px", md: "16px" },
                flexDirection: "row",
                flexWrap: "nowrap",
                alignSelf: { xs: "center", md: "auto" },
                position: { xs: "relative", md: "relative" },
                ml: { xs: 0, md: "auto" },
                mx: { xs: "auto", md: 0 },
                pl: { xs: 0, sm: 0, md: 0 },
                left: { xs: "auto", md: "auto" },
                  transform: {
                    xs: "translateX(-6px) !important",
                    md: "translateX(18px) scale(0.82) !important",
                  },
                justifySelf: { md: "end" },
                pr: { md: 0 },
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
                  width: { xs: "159px", sm: "218px", md: "auto" },
                  minWidth: { xs: "159px", sm: "218px", md: "194px" },
                  maxWidth: { xs: "159px", md: "none" },
                  px: { xs: "10px", md: undefined },
                  py: { xs: "12px", md: undefined },
                  mx: 0,
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
                  <Typography
                    component="span"
                    className="tournament-block__store-small"
                    sx={{ fontSize: { xs: "0.68rem", md: undefined } }}
                  >
                    GET IT ON
                  </Typography>
                  <Typography
                    component="span"
                    className="tournament-block__store-name"
                    sx={{ fontSize: { xs: "0.96rem", md: undefined } }}
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
                className="tournament-block__store-badge"
                aria-label="Download on the App Store"
                sx={{
                  width: { xs: "159px", sm: "218px", md: "auto" },
                  minWidth: { xs: "159px", sm: "218px", md: "194px" },
                  maxWidth: { xs: "159px", md: "none" },
                  px: { xs: "10px", md: undefined },
                  py: { xs: "12px", md: undefined },
                  mx: 0,
                }}
              >
                <AppleIcon className="tournament-block__store-icon" />
                <Box>
                  <Typography
                    component="span"
                    className="tournament-block__store-small"
                    sx={{ fontSize: { xs: "0.68rem", md: undefined } }}
                  >
                    Download on the
                  </Typography>
                  <Typography
                    component="span"
                    className="tournament-block__store-name"
                    sx={{ fontSize: { xs: "0.96rem", md: undefined } }}
                  >
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
