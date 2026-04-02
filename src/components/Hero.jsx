import { useEffect } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import SmartDisplayRoundedIcon from "@mui/icons-material/SmartDisplayRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import SignalCellularAltRoundedIcon from "@mui/icons-material/SignalCellularAltRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import BatteryFullRoundedIcon from "@mui/icons-material/BatteryFullRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { motion } from "framer-motion";
import "./css/Hero.css";

const dashboardCards = [
  {
    title: "Smart Schedule",
    icon: <CalendarMonthRoundedIcon sx={{ fontSize: 50 }} />,
    accent: "#45db5c",
  },
  {
    title: "Video Analysis",
    icon: <SmartDisplayRoundedIcon sx={{ fontSize: 50 }} />,
    accent: "#7d73ff",
  },
  {
    title: "Messages",
    icon: <ChatRoundedIcon sx={{ fontSize: 50 }} />,
    accent: "#45db5c",
  },
  {
    title: "Pro Shop",
    icon: <ShoppingBagOutlinedIcon sx={{ fontSize: 50 }} />,
    accent: "#45db5c",
  },
];

function Hero({ informationsRef, setVideoReady }) {
  useEffect(() => {
    setVideoReady?.(true);
  }, [setVideoReady]);

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

  return (
    <Box className="hero-coach">
      <Box className="hero-coach__overlay" />
      <Container maxWidth="xl" className="hero-coach__container">
        <Box className="hero-coach__grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <Box className="hero-coach__copy">
              <Box className="hero-coach__badge">
                <PublicRoundedIcon sx={{ fontSize: 18, color: "#59dd69" }} />
                <Typography className="hero-coach__badge-text">
                  TRUSTED BY 1,000+ GOLF COACHES WORLDWIDE
                </Typography>
              </Box>

              <Typography component="h1" className="hero-coach__title">
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

              <Typography className="hero-coach__description">
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
                <Box className="hero-coach__meta-item">
                  <Box className="hero-coach__meta-dot">✓</Box>
                  <Typography className="hero-coach__meta-text">
                    Free 14-day trial
                  </Typography>
                </Box>
              </Box>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 34, y: 12 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.08 }}
          >
            <Box className="hero-coach__visual">
              <Box className="hero-coach__phone-shell">
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
                    <Typography className="hero-coach__brand-text">
                      GOLF COACH <span>LOG</span>
                    </Typography>
                  </Box>

                  <Box className="hero-coach__screen-topline">
                    <ArrowBackIosNewRoundedIcon className="hero-coach__screen-topline-icon" />
                    <Typography className="hero-coach__screen-muted">
                      Dashboard
                    </Typography>
                    <CloseRoundedIcon className="hero-coach__screen-topline-icon" />
                  </Box>

                  <Typography className="hero-coach__welcome">
                    Welcome back, Coach!
                  </Typography>
                  <Typography className="hero-coach__subtitle">
                    Manage everything from one place.
                  </Typography>

                  <Box className="hero-coach__card-grid">
                    {dashboardCards.map((card) => (
                      <Box
                        key={card.title}
                        className="hero-coach__card"
                        sx={{
                          "--card-accent": card.accent,
                        }}
                      >
                        <Box className="hero-coach__card-icon">{card.icon}</Box>
                        <Typography className="hero-coach__card-title">
                          {card.title}
                        </Typography>
                      </Box>
                    ))}
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
