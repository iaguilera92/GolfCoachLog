import React, { useEffect, useRef, useState } from "react";
import { Alert, Box, Button, Container, Dialog, DialogContent, IconButton, Snackbar, Typography } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./css/Informations.css";

function Informations() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openTournamentDialog, setOpenTournamentDialog] = useState(false);
  const [openPracticeDialog, setOpenPracticeDialog] = useState(false);
  const [openPaymentsDialog, setOpenPaymentsDialog] = useState(false);
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
              Create exciting golf competitions that motivate your clients,
              boost engagement, and turn every event into a memorable reason
              to keep improving.
            </Typography>

            <Button
              variant="contained"
              className="tournament-block__button"
              sx={{ mt: "32px" }}
              onClick={() => setOpenTournamentDialog(true)}
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
              Help your clients stay accountable, build better habits, and turn
              practice into measurable progress with a system they can follow
              consistently.
            </Typography>

            <Button
              variant="contained"
              className="tournament-block__button"
              onClick={() => setOpenPracticeDialog(true)}
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
                Manage lessons, packages, clinics, tournaments, and shop sales
                in one clear system that keeps your revenue organized and your
                coaching business easier to grow.
              </Typography>
            </Box>

            <Box
              className="tournament-block__premium-action"
              sx={{ pr: { md: "56px", lg: "84px" }, pl: { md: "56px", lg: "84px" } }}
            >
              <Button
                variant="contained"
                className="tournament-block__button"
                onClick={() => setOpenPaymentsDialog(true)}
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

      <Dialog
        open={openTournamentDialog}
        onClose={() => setOpenTournamentDialog(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "24px",
            overflow: "hidden",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(247,250,251,0.98) 100%)",
            boxShadow: "0 28px 80px rgba(0,0,0,0.22)",
          },
        }}
      >
        <DialogContent sx={{ p: 0 }}>
          <Box
            sx={{
              position: "relative",
              px: { xs: 3, md: 4 },
              py: { xs: 3, md: 4 },
              background:
                "linear-gradient(135deg, rgba(31,191,117,0.12) 0%, rgba(20,138,88,0.05) 55%, rgba(255,255,255,0.9) 100%)",
            }}
          >
            <IconButton
              onClick={() => setOpenTournamentDialog(false)}
              sx={{
                position: "absolute",
                top: 14,
                right: 14,
                color: "#18302a",
                backgroundColor: "rgba(255,255,255,0.72)",
                animation: "dialogCloseSpin 0.8s ease-out 1",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.95)",
                },
                "@keyframes dialogCloseSpin": {
                  "0%": { transform: "rotate(0deg)" },
                  "100%": { transform: "rotate(720deg)" },
                },
              }}
            >
              <CloseRoundedIcon />
            </IconButton>

            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography
                component="p"
                sx={{
                  m: 0,
                  color: "#1fbf75",
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                }}
              >
                Tournaments
              </Typography>
            </Box>

            <Typography
              component="h3"
              sx={{
                mt: 1,
                mb: 1.5,
                color: "#0c1c22",
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                lineHeight: 1,
                fontWeight: 900,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
              }}
            >
              Tournaments & Competitions
            </Typography>

            <Typography
              component="p"
              sx={{
                m: 0,
                color: "#5f6f76",
                fontSize: "1rem",
                lineHeight: 1.82,
              }}
            >
              Create, manage, and track tournaments effortlessly while delivering
              a competitive experience your clients will love. From custom
              formats to rankings and point systems, you can turn every event
              into a powerful motivation tool, encouraging consistency,
              performance, and long-term engagement.
            </Typography>

            <Box
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Box
                component="img"
                src="/tournament.jpeg"
                alt="Tournament preview"
                sx={{
                  display: "block",
                  width: { xs: "160px", md: "210px" },
                  height: { xs: "250px", md: "330px" },
                  objectFit: "cover",
                  borderRadius: "18px",
                  border: "2px solid rgba(255, 205, 84, 0.95)",
                  boxShadow:
                    "0 0 0 1px rgba(255,235,170,0.4), 0 0 18px rgba(255,196,45,0.34), 0 14px 24px rgba(0,0,0,0.12)",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,215,120,0.06))",
                  animation: "goldCardPulse 2.8s ease-in-out infinite",
                  "@keyframes goldCardPulse": {
                    "0%, 100%": {
                      boxShadow:
                        "0 0 0 1px rgba(255,235,170,0.4), 0 0 18px rgba(255,196,45,0.34), 0 14px 24px rgba(0,0,0,0.12)",
                    },
                    "50%": {
                      boxShadow:
                        "0 0 0 1px rgba(255,235,170,0.6), 0 0 24px rgba(255,210,85,0.55), 0 16px 28px rgba(0,0,0,0.14)",
                    },
                  },
                }}
              />
              <Box
                component="img"
                src="/tournament-2.jpeg"
                alt="Tournament preview 2"
                sx={{
                  display: "block",
                  width: { xs: "160px", md: "210px" },
                  height: { xs: "250px", md: "330px" },
                  objectFit: "cover",
                  borderRadius: "18px",
                  border: "2px solid rgba(255, 205, 84, 0.95)",
                  boxShadow:
                    "0 0 0 1px rgba(255,235,170,0.4), 0 0 18px rgba(255,196,45,0.34), 0 14px 24px rgba(0,0,0,0.12)",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,215,120,0.06))",
                  animation: "goldCardPulse 2.8s ease-in-out infinite",
                }}
              />
            </Box>
          </Box>
        </DialogContent>
      </Dialog>

      <Dialog
        open={openPracticeDialog}
        onClose={() => setOpenPracticeDialog(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "24px",
            overflow: "hidden",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(247,250,251,0.98) 100%)",
            boxShadow: "0 28px 80px rgba(0,0,0,0.22)",
          },
        }}
      >
        <DialogContent sx={{ p: 0 }}>
          <Box
            sx={{
              position: "relative",
              px: { xs: 3, md: 4 },
              py: { xs: 3, md: 4 },
              background:
                "linear-gradient(135deg, rgba(31,191,117,0.12) 0%, rgba(20,138,88,0.05) 55%, rgba(255,255,255,0.9) 100%)",
            }}
          >
            <IconButton
              onClick={() => setOpenPracticeDialog(false)}
              sx={{
                position: "absolute",
                top: 14,
                right: 14,
                color: "#18302a",
                backgroundColor: "rgba(255,255,255,0.72)",
                animation: "dialogCloseSpin 0.8s ease-out 1",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.95)",
                },
                "@keyframes dialogCloseSpin": {
                  "0%": { transform: "rotate(0deg)" },
                  "100%": { transform: "rotate(720deg)" },
                },
              }}
            >
              <CloseRoundedIcon />
            </IconButton>

            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography
                component="p"
                sx={{
                  m: 0,
                  color: "#1fbf75",
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                }}
              >
                Practice Log
              </Typography>
            </Box>

            <Typography
              component="h3"
              sx={{
                mt: 1,
                mb: 1.5,
                color: "#0c1c22",
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                lineHeight: 1,
                fontWeight: 900,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
              }}
            >
              Practice Log
            </Typography>

            <Typography
              component="p"
              sx={{
                m: 0,
                color: "#5f6f76",
                fontSize: "1rem",
                lineHeight: 1.82,
              }}
            >
              Empower your clients to take ownership of their improvement with a
              dynamic practice tracking system. Record sessions, track key
              stats, and build consistency through structured training.
              Transform practice into progress, creating a motivating
              experience that keeps your clients engaged, accountable, and
              continuously improving.
            </Typography>

            <Box
              component="img"
              src="/log.jpeg"
              alt="Practice log preview"
              sx={{
                display: "block",
                width: { xs: "175px", md: "225px" },
                height: "auto",
                mx: "auto",
                mt: 2,
                borderRadius: "18px",
                filter: "drop-shadow(0 16px 24px rgba(0,0,0,0.14))",
              }}
            />
          </Box>
        </DialogContent>
      </Dialog>

      <Dialog
        open={openPaymentsDialog}
        onClose={() => setOpenPaymentsDialog(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "24px",
            overflow: "hidden",
            maxHeight: "88vh",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(247,250,251,0.98) 100%)",
            boxShadow: "0 28px 80px rgba(0,0,0,0.22)",
          },
        }}
      >
        <DialogContent sx={{ p: 0, overflow: "hidden" }}>
          <Box
            sx={{
              position: "relative",
              px: { xs: 3, md: 4 },
              py: { xs: 2.5, md: 3 },
              overflow: "hidden",
              background:
                "linear-gradient(135deg, rgba(31,191,117,0.12) 0%, rgba(20,138,88,0.05) 55%, rgba(255,255,255,0.9) 100%)",
            }}
          >
            <IconButton
              onClick={() => setOpenPaymentsDialog(false)}
              sx={{
                position: "absolute",
                top: 14,
                right: 14,
                color: "#18302a",
                backgroundColor: "rgba(255,255,255,0.72)",
                animation: "dialogCloseSpin 0.8s ease-out 1",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.95)",
                },
                "@keyframes dialogCloseSpin": {
                  "0%": { transform: "rotate(0deg)" },
                  "100%": { transform: "rotate(720deg)" },
                },
              }}
            >
              <CloseRoundedIcon />
            </IconButton>

            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography
                component="p"
                sx={{
                  m: 0,
                  color: "#1fbf75",
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                }}
              >
                Payments
              </Typography>
            </Box>

            <Typography
              component="h3"
              sx={{
                mt: 1,
                mb: 1.5,
                color: "#0c1c22",
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                lineHeight: 1,
                fontWeight: 900,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
              }}
            >
              Payments & Revenue Management
            </Typography>

            <Typography
              component="p"
              sx={{
                m: 0,
                color: "#5f6f76",
                fontSize: "0.96rem",
                lineHeight: 1.68,
              }}
            >
              Take full control of your coaching business with a complete payment
              and revenue system. Track income from lessons, packages, clinics,
              tournaments, and pro shop sales all seamlessly connected to your
              clients and sessions. Everything is organized, recorded, and easy
              to manage, so you can focus on growing your business without the
              complexity. Being a coach and an entrepreneur has never been this
              simple.
            </Typography>

            <Box
              sx={{
                width: "100vw",
                ml: "calc(50% - 50vw)",
                mr: "calc(50% - 50vw)",
                mt: { xs: 1.2, sm: 1.8 },
                background: "#ffffff",
                borderTop: "1px solid rgba(31,60,51,0.18)",
                borderBottom: "1px solid rgba(31,60,51,0.18)",
                py: 0.7,
                overflow: "hidden",
              }}
            >
              <Typography
                sx={{
                  color: "#183a30",
                  fontWeight: 800,
                  fontSize: { xs: "0.72rem", sm: "0.8rem" },
                  mb: 0.7,
                  letterSpacing: "0.02em",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 0.5,
                  textTransform: "uppercase",
                }}
              >
                <LockRoundedIcon sx={{ fontSize: { xs: 13, sm: 15 }, color: "#183a30" }} />
                Secure Payments
              </Typography>

              <Box sx={{ overflow: "hidden", px: 0.5 }}>
                <motion.div
                  animate={{ x: [0, -390] }}
                  transition={{ duration: 18, ease: "linear", repeat: Infinity }}
                  style={{ display: "flex", width: "max-content", willChange: "transform" }}
                >
                  {[0, 1].map((copyIndex) => (
                    <Box
                      key={copyIndex}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        pr: 1,
                        flexShrink: 0,
                      }}
                    >
                      {[
                        { src: "/paypal.png", alt: "PayPal" },
                        { src: "/mastercard.webp", alt: "MasterCard" },
                        { src: "/visa.avif", alt: "Visa" },
                        { src: "/american-express.png", alt: "American Express" },
                        { src: "/google-pay.png", alt: "Google Pay" },
                        { src: "/apple-pay.png", alt: "Apple Pay" },
                      ].map((brand) => (
                        <Box
                          key={`${copyIndex}-${brand.alt}`}
                          component="img"
                          src={brand.src}
                          alt={brand.alt}
                          loading="lazy"
                          decoding="async"
                          sx={{
                            width: brand.alt.includes("Google Pay") ? { xs: 42, sm: 62 } : { xs: 48, sm: 70 },
                            height: brand.alt.includes("Google Pay") ? { xs: 26, sm: 34 } : { xs: 26, sm: 34 },
                            objectFit: "contain",
                            bgcolor: "transparent",
                            p: 0.2,
                            border: "1px solid rgba(31,60,51,0.14)",
                          }}
                        />
                      ))}
                    </Box>
                  ))}
                </motion.div>
              </Box>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default Informations;
