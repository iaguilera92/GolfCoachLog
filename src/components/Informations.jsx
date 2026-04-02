import React, { useEffect, useRef, useState } from "react";
import { Alert, Box, Button, Container, Dialog, DialogContent, IconButton, Snackbar, Typography } from "@mui/material";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
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
      </Box>`r`n`r`n      <Snackbar
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



