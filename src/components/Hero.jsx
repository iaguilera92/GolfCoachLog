import { useEffect, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import SignalCellularAltRoundedIcon from "@mui/icons-material/SignalCellularAltRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import BatteryFullRoundedIcon from "@mui/icons-material/BatteryFullRounded";
import { motion } from "framer-motion";
import "./css/Hero.css";

const heroDashboardImages = ["/hero-1.jpeg", "/hero-0.jpeg", "/hero-2.jpeg"];

function Hero({ informationsRef, setVideoReady }) {
  const [dashboardImageIndex, setDashboardImageIndex] = useState(0);

  useEffect(() => {
    setVideoReady?.(true);
  }, [setVideoReady]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setDashboardImageIndex((current) => (current + 1) % heroDashboardImages.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleScrollToServices = () => {
    if (!informationsRef?.current) return;

    const isMobile = window.innerWidth < 768;
    const offset = isMobile ? -28 : -78;
    const y =
      informationsRef.current.getBoundingClientRect().top +
      window.scrollY +
      offset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleNextDashboardImage = () => {
    setDashboardImageIndex((current) => (current + 1) % heroDashboardImages.length);
  };

  return (
    <Box className="hero-coach">
      <Box className="hero-coach__overlay" />
      <Container maxWidth="xl" className="hero-coach__container">
        <Box className="hero-coach__grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 3.5 }}
            style={{ width: "100%" }}
          >
            <Box
              className="hero-coach__copy"
              sx={{
                position: { md: "relative" },
                left: { xs: 0, md: "150px" },
              }}
            >
              <Typography
                component="h1"
                className="hero-coach__title"
                sx={{
                  fontSize: { xs: "3rem", sm: "3.7rem", md: "4rem", lg: "4.4rem" },
                  lineHeight: { xs: 0.98, md: 0.92 },
                  letterSpacing: { xs: "-0.04em", md: "-0.055em" },
                  maxWidth: { xs: "100%", md: "11ch" },
                }}
              >
                <Box component="span" display="block">
                  Coach more.
                </Box>
                <Box component="span" display="block" className="hero-coach__title-accent">
                  Organize less.
                </Box>
                <Box component="span" display="block">
                  Grow faster.
                </Box>
              </Typography>

              <Typography
                className="hero-coach__description"
                sx={{
                  fontSize: { xs: "1.02rem", sm: "1.12rem", md: "1.02rem", lg: "1.08rem" },
                  lineHeight: { xs: 1.55, md: 1.58 },
                  maxWidth: { xs: "100%", md: "34rem" },
                }}
              >
                The all-in-one platform to manage your schedule, analyze swings,
                run programs and grow your coaching business.
              </Typography>

              <Box className="hero-coach__actions">
                <Button
                  variant="outlined"
                  className="hero-coach__cta hero-coach__cta--secondary"
                  onClick={handleScrollToServices}
                  startIcon={<PlayCircleOutlineRoundedIcon sx={{ fontSize: 24 }} />}
                >
                  Watch Demo
                </Button>
              </Box>

              <Box className="hero-coach__meta">
                <Box className="hero-coach__meta-item">
                  <Box className="hero-coach__meta-dot">✓</Box>
                  <Typography className="hero-coach__meta-text">
                    No credit card required
                  </Typography>
                </Box>
              </Box>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 3.5 }}
          >
            <Box
              className="hero-coach__visual"
              sx={{
                position: { md: "relative" },
                right: { xs: 0, md: "28px" },
              }}
            >
              <Box
                className="hero-coach__phone-shell"
                sx={{
                  width: { xs: "332px", md: "clamp(290px, 30vw, 290px)" },
                  height: { xs: "540px", md: "clamp(540px, 58vw, 540px)" },
                }}
              >
                <Box className="hero-coach__notch" />

                <Box className="hero-coach__screen">
                  <Box className="hero-coach__screen-bg" />

                  <Box className="hero-coach__brand">
                    <Box className="hero-coach__statusbar">
                      <Typography className="hero-coach__time">10:30</Typography>
                      <Box className="hero-coach__status-icons">
                        <SignalCellularAltRoundedIcon sx={{ fontSize: 17 }} />
                        <WifiRoundedIcon sx={{ fontSize: 17 }} />
                        <BatteryFullRoundedIcon
                          sx={{
                            fontSize: 18,
                            transform: "rotate(90deg)",
                          }}
                        />
                      </Box>
                    </Box>
                    <Box
                      component="img"
                      src="/logo-golfcoachlog.png"
                      alt="Golf Coach Log"
                      className="hero-coach__brand-logo"
                    />
                  </Box>

                  <Box
                    className="hero-coach__dashboard-image-wrap"
                    onClick={handleNextDashboardImage}
                  >
                    <Box
                      key={heroDashboardImages[dashboardImageIndex]}
                      component="img"
                      src={heroDashboardImages[dashboardImageIndex]}
                      alt="Golf coach dashboard preview"
                      className="hero-coach__dashboard-image"
                      sx={{
                        transform:
                          heroDashboardImages[dashboardImageIndex] === "/hero-2.jpeg"
                            ? "translateY(-18px)"
                            : "translateY(-10px)",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;

