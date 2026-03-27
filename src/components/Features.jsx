import React, { useEffect, useRef, useState } from "react";
import { Alert, Box, Button, Container, Snackbar, Typography } from "@mui/material";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import "./css/Features.css";

function Features() {
  const sectionRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState([false, false, false]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

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

  return (
    <Box className="features-showcase">
      <Container maxWidth="lg" className="features-showcase__container">
        <Box
          ref={(el) => { sectionRefs.current[0] = el; }}
          data-feature-index="0"
          className={`features-showcase__copy features-showcase__copy--hero ${visibleSections[0] ? "features-showcase__reveal is-visible from-left" : "features-showcase__reveal from-left"}`}
        >
          <Box
            component="img"
            src="/calendar.webp"
            alt="Smart scheduling preview"
            sx={{
              display: "block",
              width: { xs: "88px", sm: "112px", md: "88px" },
              height: "auto",
              mx: "auto",
              mb: { xs: 2, md: 2.5 },
              filter: "drop-shadow(0 18px 28px rgba(0,0,0,0.16))",
            }}
          />

          <Typography
            component="h2"
            className="features-showcase__title"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "1.1rem", sm: "1.3rem", md: "2rem !important" },
              fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
              lineHeight: 1.08,
              letterSpacing: "0.03em",
              textAlign: "center",
              color: "#0b1c24",
              textShadow: "0 8px 18px rgba(0,0,0,0.08)",
            }}
          >
            <span className="features-showcase__title-desktop">
              SMART SCHEDULING
            </span>
            <span className="features-showcase__title-mobile">
              SMART
              <br />
              SCHEDULING
            </span>
          </Typography>

          <Typography
            component="p"
            className="features-showcase__description"
            sx={{ textAlign: "center", mx: "auto", lineHeight: 1.95 }}
          >
            Book lessons instantly, avoid back-and-forth messages, and manage
            everything with a fully integrated calendar in one seamless
            experience.
          </Typography>

          <Button
            className="features-showcase__button"
            variant="contained"
            onClick={handleComingSoon}
            sx={{
              minWidth: { xs: "280px", sm: "320px", md: "360px" },
              height: "54px",
              borderRadius: "14px",
              textTransform: "none",
              fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
              fontWeight: 700,
              color: "#fff",
              background:
                "linear-gradient(135deg, #36d98a, #1fbf75 45%, #148a58 85%)",
              backgroundSize: "200% 200%",
              animation: "greenGradientShift 8s ease infinite",
              boxShadow: "0 8px 18px rgba(31,191,117,.38)",
              position: "relative",
              overflow: "hidden",
              justifyContent: "center",
              maxWidth: { xs: "100%", md: "420px" },
              border: "2px solid rgba(88, 255, 173, 0.9)",
              zIndex: 1,
              "&:hover": {
                background: "linear-gradient(135deg,#30d482,#16a766)",
                boxShadow:
                  "0 0 8px rgba(67,255,170,.7), inset 0 0 6px rgba(255,255,255,0.22)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                inset: "-2px",
                borderRadius: "inherit",
                background:
                  "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.85) 10%, #b9ffd8 20%, rgba(255,255,255,0.85) 30%, transparent 40%)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "300% 300%",
                animation:
                  "greenShineBorder 3s linear infinite, greenPulseGlow 4s ease-in-out infinite",
                pointerEvents: "none",
                zIndex: 2,
                mask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                maskComposite: "exclude",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(130deg, transparent 40%, rgba(255,255,255,0.72) 50%, transparent 60%)",
                transform: "translateX(-100%)",
                animation: "greenShineDiagonal 4s ease-in-out infinite",
                borderRadius: "inherit",
                pointerEvents: "none",
                zIndex: 1,
              },
              "&:hover::after": {
                animation: "greenShineDiagonal 1.2s ease-in-out",
              },
              "@keyframes greenShineBorder": {
                "0%": { backgroundPosition: "-300% 0" },
                "100%": { backgroundPosition: "300% 0" },
              },
              "@keyframes greenPulseGlow": {
                "0%, 100%": { filter: "drop-shadow(0 0 6px rgba(88,255,173,.35))" },
                "50%": { filter: "drop-shadow(0 0 14px rgba(88,255,173,.72))" },
              },
              "@keyframes greenShineDiagonal": {
                "0%": { transform: "translateX(-120%) rotate(0deg)" },
                "100%": { transform: "translateX(120%) rotate(0deg)" },
              },
              "@keyframes greenGradientShift": {
                "0%": { backgroundPosition: "0% 50%" },
                "50%": { backgroundPosition: "100% 50%" },
                "100%": { backgroundPosition: "0% 50%" },
              },
            }}
          >
            See More Features
          </Button>
        </Box>
        <Box
          ref={(el) => { sectionRefs.current[1] = el; }}
          data-feature-index="1"
          className={`features-showcase__secondary features-showcase__secondary--boxed ${visibleSections[1] ? "features-showcase__reveal is-visible from-right" : "features-showcase__reveal from-right"}`}
        >
          <Box className="features-showcase__secondary-image-wrap">
            <Box className="features-showcase__image-frame features-showcase__image-frame--secondary" />
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
              PRO SHOP
            </Typography>

            <Typography component="p" className="features-showcase__secondary-description">
              Sell directly from your academy with an online store. Offer
              apparel, equipment, and your own brand while managing inventory
              and orders with a simple checkout experience.
            </Typography>

          <Button
            className="features-showcase__button"
            variant="contained"
            onClick={handleComingSoon}
          >
            Go to Shop
          </Button>
          </Box>
        </Box>

        <Box
          ref={(el) => { sectionRefs.current[2] = el; }}
          data-feature-index="2"
          className={`features-showcase__secondary features-showcase__secondary--reverse ${visibleSections[2] ? "features-showcase__reveal is-visible from-left" : "features-showcase__reveal from-left"}`}
        >
          <Box className="features-showcase__secondary-image-wrap">
            <img
              src="/Coaches.jpg"
              alt="Golf courses preview"
              className="features-showcase__secondary-image features-showcase__secondary-image--full"
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
              <Box component="span" sx={{ display: "block" }}>
                ADVANCED
              </Box>
              <Box component="span" sx={{ display: "block" }}>
                PERFORMANCE
              </Box>
              <Box component="span" sx={{ display: "block" }}>
                TRACKING
              </Box>
            </Typography>

            <Typography component="p" className="features-showcase__secondary-description">
              Track every aspect of your game from putting and short game to
              full swings, monitor progress over time, and measure real
              improvement with clear, data-driven insights.
            </Typography>

            <Button
              className="features-showcase__button"
              variant="contained"
              onClick={handleComingSoon}
            >
              View Courses
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
    </Box>
  );
}

export default Features;
