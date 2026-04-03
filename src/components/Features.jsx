import React, { useEffect, useRef, useState } from "react";
import { Alert, Box, Button, Container, Dialog, DialogContent, IconButton, Snackbar, Typography } from "@mui/material";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { motion } from "framer-motion";
import "./css/Features.css";

function Features() {
  const sectionRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState([false, false]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openSchedulingDialog, setOpenSchedulingDialog] = useState(false);
  const [openLessonDialog, setOpenLessonDialog] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-feature-index"));
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.28 }
    );

    sectionRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  const handleComingSoon = () => {
    setOpenSnackbar(true);
  };

  const overviewCards = [
    {
      title: "SMART SCHEDULE",
      headline: "Book less. Coach more.",
      description:
        "Manage availability, automate bookings and keep your calendar organized.",
      icon: (
        <Box
          component="img"
          src="/calendar.png"
          alt="Smart schedule"
          className="features-showcase__overview-icon-image"
        />
      ),
    },
    {
      title: "VIDEO ANALYSIS",
      headline: "See it. Analyze it. Improve it.",
      description:
        "Record, draw, compare and track every swing to help players get better faster.",
      icon: (
        <Box
          component="img"
          src="/video.png"
          alt="Video analysis"
          className="features-showcase__overview-icon-image"
        />
      ),
    },
    {
      title: "CLIENT COMMUNICATION",
      headline: "Communicate. Guide. Elevate.",
      description:
        "Keep every conversation, update and announcement in one organized place.",
      icon: (
        <Box
          component="img"
          src="/comunication.png"
          alt="Client communication"
          className="features-showcase__overview-icon-image"
        />
      ),
    },
  ];

  return (
    <Box className="features-showcase" sx={{ mt: "-2px" }}>
      <Container maxWidth="lg" className="features-showcase__container">
        <Box
          ref={(el) => { sectionRefs.current[0] = el; }}
          data-feature-index="0"
          className="features-showcase__overview"
        >
          <Box className={visibleSections[0] ? "features-showcase__reveal is-visible from-left" : "features-showcase__reveal from-left"}>
            <Box className="features-showcase__overview-header">
              <Box className="features-showcase__overview-line" />
              <Typography
                component="h2"
                className="features-showcase__overview-title"
                sx={{
                  fontSize: { xs: "1.75rem", sm: "1.95rem", md: "2.45rem" },
                  lineHeight: 1.02,
                }}
              >
                The all-in-one platform for golf coaches
              </Typography>
              <Box className="features-showcase__overview-line" />
            </Box>

            <Box className="features-showcase__overview-grid">
              {overviewCards.map((card, index) => (
                <Box
                  key={card.title}
                  className={`features-showcase__overview-card ${index === 0 ? "features-showcase__overview-card--featured" : ""}`}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Box className="features-showcase__overview-icon-wrap">
                    <Box className="features-showcase__overview-icon">
                      {card.icon}
                    </Box>
                  </Box>

                  <Typography
                    component="h3"
                    className="features-showcase__overview-card-title"
                    sx={{ textAlign: "center", width: "100%" }}
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    component="p"
                    className="features-showcase__overview-card-headline"
                    sx={{ textAlign: "center", width: "100%" }}
                  >
                    {card.headline}
                  </Typography>

                  <Typography
                    component="p"
                    className="features-showcase__overview-card-description"
                    sx={{ textAlign: "center", width: "100%", mx: "auto" }}
                  >
                    {card.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          ref={(el) => { sectionRefs.current[1] = el; }}
          data-feature-index="1"
          className={`features-showcase__secondary features-showcase__secondary--reverse ${visibleSections[1] ? "features-showcase__reveal is-visible from-right" : "features-showcase__reveal from-right"}`}
          sx={{ pb: { xs: "10px", md: 0 } }}
        >
          <Box className="features-showcase__secondary-image-wrap">
            <img
              src="/comunication.png"
              alt="Golf courses preview"
              className="features-showcase__secondary-image features-showcase__secondary-image--full"
              style={{
                transform: "translateY(-8px)",
                maxWidth: "78%",
                width: "66%",
                maxHeight: "360px",
                height: "auto",
                objectFit: "contain",
                margin: "0 auto",
                display: "block",
              }}
            />
          </Box>

          <Box className="features-showcase__secondary-copy">
            <Typography
              component="h2"
              className="features-showcase__secondary-title"
              sx={{
                fontWeight: 900,
                fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                fontSize: { xs: "1.8rem", sm: "2.15rem", md: "2.6rem" },
                lineHeight: 1.08,
              }}
            >
              GOLF LESSON MANAGEMENT
            </Typography>

            <Typography component="p" className="features-showcase__secondary-description">
              Plan lessons across every area of the game, keep session records
              organized, and follow each client&apos;s progress with a clear,
              structured coaching system.
            </Typography>

            <Button
              className="features-showcase__button"
              variant="contained"
              onClick={() => setOpenLessonDialog(true)}
            >
              Explore More
            </Button>
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
        open={openSchedulingDialog}
        onClose={() => setOpenSchedulingDialog(false)}
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
              onClick={() => setOpenSchedulingDialog(false)}
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
                Smart Scheduling
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
              Scheduling That Works For Coaches
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
              Effortlessly manage your schedule with an intelligent booking system
              designed for modern golf coaches. Clients can check real-time
              availability, book sessions instantly, and prepay for lessons or
              packages all in one place. Seamlessly synced with your personal
              calendar, it keeps your availability always up to date, avoids
              conflicts, and ensures clear, reliable scheduling for both you and
              your clients. Built-in prepayment options, partial or full, ensure
              commitment, protecting your time and reducing no-shows so you can
              focus on coaching with confidence.
            </Typography>

            <Box
              component="img"
              src="/calendar.webp"
              alt="Smart scheduling"
              sx={{
                display: "block",
                width: { xs: "92px", md: "118px" },
                height: "auto",
                mx: "auto",
                mt: 1.5,
                filter: "drop-shadow(0 16px 24px rgba(0,0,0,0.14))",
              }}
            />
          </Box>
        </DialogContent>
      </Dialog>

      <Dialog
        open={openLessonDialog}
        onClose={() => setOpenLessonDialog(false)}
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
              onClick={() => setOpenLessonDialog(false)}
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
                Golf Lesson Management
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
              Golf Lesson Management
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
              Plan, structure, and track your lessons across all areas of the
              game, including swing, fundamentals, short game, putting, and
              course management. Create personalized coaching plans, keep
              detailed session records, and follow each client&apos;s progress,
              ensuring a more organized, consistent, and effective coaching
              experience.
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default Features;
