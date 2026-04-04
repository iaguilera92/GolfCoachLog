import React, { useEffect, useRef, useState } from "react";
import { Alert, Box, Button, Container, Dialog, DialogContent, IconButton, Snackbar, Typography } from "@mui/material";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ChildCareRoundedIcon from "@mui/icons-material/ChildCareRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { motion } from "framer-motion";
import "./css/Features.css";

const userRoles = [
  {
    title: "Academy Coach",
    icon: GroupsRoundedIcon,
    summary: "Coach managing groups, tournaments, rankings, and academy-wide communication.",
    description:
      "Coach working within an academy or managing a structured group of players. Has tools to organize groups, run tournaments, manage rankings, communicate at scale, and oversee coaching operations.",
    connections: [
      "Works with multiple Players and Junior Players",
      "Can collaborate with and manage other Coaches within the same academy",
      "Can assign lessons, clinics, or sessions to other coaches",
      "Oversees overall player and coach development",
    ],
  },
  {
    title: "Coach",
    icon: SchoolRoundedIcon,
    summary: "Independent pro who manages lessons, feedback, and player progress.",
    description:
      "Independent professional who manages lessons and players. Can log sessions, analyze swings, provide feedback, and track each player's progress.",
    connections: [
      "Works directly with Players and Junior Players",
      "Can operate independently or within an Academy Coach structure",
    ],
  },
  {
    title: "Player",
    icon: PersonRoundedIcon,
    summary: "Golfer who accesses lessons, videos, stats, and training plans.",
    description:
      "Golfer training with a coach or independently. Can access lessons, videos, stats, and training plans to improve performance.",
    connections: [
      "Connects with one or multiple Coaches or Academy Coaches",
      "Receives feedback, assignments, and progress tracking",
    ],
  },
  {
    title: "Junior Player",
    icon: ChildCareRoundedIcon,
    summary: "Young golfer following a structured pathway for long-term development.",
    description:
      "Developing golfer (kids or teens), typically part of a program or academy. Follows a more structured pathway focused on learning, progression, and long-term development.",
    connections: [
      "Connected to Coaches or Academy Coaches",
      "Often part of an academy or structured program",
      "(Future) Can include parent connection for tracking and communication",
    ],
  },
];

function Features() {
  const sectionRefs = useRef([]);
  const rolesSliderRef = useRef(null);
  const [visibleSections, setVisibleSections] = useState([false, false]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openSchedulingDialog, setOpenSchedulingDialog] = useState(false);
  const [openRoleDialog, setOpenRoleDialog] = useState(false);
  const [selectedRole, setSelectedRole] = useState(userRoles[0]);
  const [rolesIntroPlayed, setRolesIntroPlayed] = useState(false);
  const [showRolesHint, setShowRolesHint] = useState(true);

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

  useEffect(() => {
    if (!visibleSections[1] || rolesIntroPlayed || typeof window === "undefined") return;
    if (window.innerWidth >= 900) return;

    const slider = rolesSliderRef.current;
    if (!slider) return;

    const maxScroll = slider.scrollWidth - slider.clientWidth;
    if (maxScroll <= 0) return;

    const timeoutId = window.setTimeout(() => {
      slider.scrollLeft = maxScroll;
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          slider.scrollTo({ left: 0, behavior: "smooth" });
          setRolesIntroPlayed(true);
        });
      });
    }, 220);

    return () => window.clearTimeout(timeoutId);
  }, [visibleSections, rolesIntroPlayed]);

  useEffect(() => {
    const slider = rolesSliderRef.current;
    if (!slider || typeof window === "undefined") return;

    const updateHint = () => {
      if (window.innerWidth >= 900) {
        setShowRolesHint(false);
        return;
      }

      const maxScroll = slider.scrollWidth - slider.clientWidth;
      const isAtEnd = slider.scrollLeft >= maxScroll - 8;
      setShowRolesHint(!isAtEnd);
    };

    updateHint();
    slider.addEventListener("scroll", updateHint, { passive: true });
    window.addEventListener("resize", updateHint);

    return () => {
      slider.removeEventListener("scroll", updateHint);
      window.removeEventListener("resize", updateHint);
    };
  }, [visibleSections]);

  const handleComingSoon = () => {
    setOpenSnackbar(true);
  };

  const handleRolesHintClick = () => {
    const slider = rolesSliderRef.current;
    if (!slider) return;

    const firstCard = slider.firstElementChild;
    const step = firstCard ? firstCard.getBoundingClientRect().width + 20 : slider.clientWidth * 0.82;

    slider.scrollTo({
      left: Math.min(slider.scrollLeft + step, slider.scrollWidth - slider.clientWidth),
      behavior: "smooth",
    });
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

            <Box
              className="features-showcase__overview-grid"
              sx={{ mt: { xs: "56px", sm: 0, md: 0 } }}
            >
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
          sx={{
            background: 'url("/fondo-18.png") center/cover no-repeat',
            borderRadius: { xs: "28px", md: "34px" },
            px: { xs: 2, md: 3 },
            py: { xs: 2.2, md: 3 },
            mb: { xs: 2, md: 2.8 },
          }}
        >
          <Box className={visibleSections[1] ? "features-showcase__reveal is-visible from-left" : "features-showcase__reveal from-left"}>
            <Box sx={{ maxWidth: "1180px", mx: "auto" }}>
              <Box sx={{ textAlign: "center", mb: { xs: 2.2, md: 3.1 } }}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "minmax(40px, 1fr) auto minmax(40px, 1fr)" },
                    alignItems: "center",
                    gap: { xs: "10px", md: "16px" },
                    margin: "0 auto 14px",
                    maxWidth: "980px",
                  }}
                >
                  <Box
                    sx={{
                      height: "2px",
                      borderRadius: "999px",
                      maxWidth: { xs: "160px", md: "none" },
                      width: "100%",
                      justifySelf: { xs: "center", md: "stretch" },
                      background:
                        "linear-gradient(90deg, rgba(35, 191, 76, 0) 0%, rgba(49, 212, 82, 0.9) 100%)",
                    }}
                  />
                  <Typography
                    component="h2"
                    sx={{
                      color: "#0f231b",
                      fontWeight: 900,
                      fontSize: { xs: "1.34rem", sm: "2.5rem", md: "3.2rem" },
                      lineHeight: { xs: 1.06, sm: 0.96, md: 0.96 },
                      letterSpacing: { xs: "-0.015em", sm: "-0.03em", md: "-0.03em" },
                      textShadow: "0 8px 24px rgba(255,255,255,0.16)",
                      fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                      maxWidth: "900px",
                      mx: "auto",
                      px: { xs: 1, sm: 0 },
                    }}
                  >
                    USER ROLES - GOLF COACH LOG
                  </Typography>
                  <Box
                    sx={{
                      height: "2px",
                      borderRadius: "999px",
                      maxWidth: { xs: "160px", md: "none" },
                      width: "100%",
                      justifySelf: { xs: "center", md: "stretch" },
                      background:
                        "linear-gradient(90deg, rgba(49, 212, 82, 0.9) 0%, rgba(35, 191, 76, 0) 100%)",
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    mt: -0.55,
                    color: "rgba(12, 28, 22, 0.6)",
                    lineHeight: 1.55,
                    fontSize: { xs: "0.84rem", md: "0.9rem" },
                    fontWeight: 500,
                    maxWidth: "680px",
                    mx: "auto",
                  }}
                >
                  <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
                    "Tap a role to explore responsibilities, role scope, and how each profile connects inside the platform."
                  </Box>
                  <Box component="span" sx={{ display: { xs: "inline", sm: "none" } }}>
                    "Tap a role to explore each profile."
                  </Box>
                </Typography>
              </Box>

              <Box
                onClick={handleRolesHintClick}
                sx={{
                  display: { xs: "flex", md: "none" },
                  visibility: showRolesHint ? "visible" : "hidden",
                  opacity: showRolesHint ? 1 : 0,
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: 0.5,
                  mb: 0.9,
                  pr: 0.2,
                  color: "rgba(12, 28, 22, 0.66)",
                  transition: "opacity 180ms ease",
                  cursor: "pointer",
                  WebkitTapHighlightColor: "transparent",
                  userSelect: "none",
                  outline: "none",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                  }}
                >
                  Swipe
                </Typography>
                <ArrowForwardRoundedIcon sx={{ fontSize: "1rem" }} />
              </Box>

              <Box
                ref={rolesSliderRef}
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "repeat(4, minmax(220px, 1fr))", md: "repeat(4, minmax(0, 1fr))" },
                  gap: { xs: 1.25, md: 1.6 },
                  overflowX: { xs: "auto", md: "visible" },
                  scrollSnapType: { xs: "x mandatory", md: "none" },
                  pb: 0.7,
                  px: { xs: 0.2, md: 0 },
                  "&::-webkit-scrollbar": { display: "none" },
                }}
              >
                {userRoles.map((role) => {
                  const RoleIcon = role.icon;
                  return (
                    <Box
                      key={role.title}
                      onClick={() => {
                        setSelectedRole(role);
                        setOpenRoleDialog(true);
                      }}
                      sx={{
                        minWidth: { xs: "220px", md: "auto" },
                        minHeight: { xs: "228px", md: "auto" },
                        scrollSnapAlign: { xs: "center", md: "none" },
                        borderRadius: "22px",
                        border: "1px solid rgba(18, 56, 40, 0.72)",
                        background:
                          "linear-gradient(180deg, rgba(16,36,28,0.92) 0%, rgba(9,22,16,0.86) 100%)",
                        boxShadow: "0 10px 18px rgba(0,0,0,0.14)",
                        p: { xs: 1.55, md: 1.8 },
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        transition: "transform 180ms ease",
                        "&:hover": { transform: { md: "translateY(-2px)" } },
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 44, md: 50 },
                          height: { xs: 44, md: 50 },
                          borderRadius: "14px",
                          display: "grid",
                          placeItems: "center",
                          mb: 1.2,
                          background: "linear-gradient(180deg, rgba(39,176,86,0.28) 0%, rgba(12,40,24,0.56) 100%)",
                          border: "1px solid rgba(123, 230, 138, 0.5)",
                        }}
                      >
                        <RoleIcon sx={{ color: "#7be68a", fontSize: { xs: "1.4rem", md: "1.55rem" } }} />
                      </Box>

                      <Typography
                        sx={{
                          color: "#ffffff",
                          fontWeight: 800,
                          fontSize: { xs: "1rem", md: "1.08rem" },
                          lineHeight: 1.1,
                          fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                          textAlign: "left",
                          width: "100%",
                        }}
                      >
                        {role.title}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 0.85,
                          color: "rgba(255,255,255,0.72)",
                          fontSize: { xs: "0.84rem", md: "0.9rem" },
                          lineHeight: 1.55,
                          minHeight: { xs: "78px", md: "66px" },
                          textAlign: "left",
                          width: "100%",
                        }}
                      >
                        {role.summary}
                      </Typography>

                      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: "auto", pt: 1.2 }}>
                        <Box
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: "32px",
                            px: 1.2,
                            borderRadius: "999px",
                            border: "1px solid rgba(123, 230, 138, 0.38)",
                            background: "linear-gradient(180deg, rgba(39,176,86,0.16) 0%, rgba(12,40,24,0.3) 100%)",
                            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#7be68a",
                              fontSize: "0.74rem",
                              fontWeight: 800,
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                              lineHeight: 1,
                            }}
                          >
                            Role Details
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
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
        open={openRoleDialog}
        onClose={() => setOpenRoleDialog(false)}
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
              onClick={() => setOpenRoleDialog(false)}
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
                User Roles
              </Typography>
            </Box>

            <Typography
              component="h3"
              sx={{
                mt: 1,
                mb: 1.4,
                color: "#0c1c22",
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                lineHeight: 1,
                fontWeight: 900,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
              }}
            >
              {selectedRole?.title}
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
              {selectedRole?.description}
            </Typography>

            <Typography
              sx={{
                mt: 1.5,
                color: "#1fbf75",
                fontSize: "0.78rem",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
              }}
            >
              Connections
            </Typography>

            <Box sx={{ mt: 1, display: "grid", gap: 0.75 }}>
              {selectedRole?.connections.map((connection) => (
                <Typography
                  key={connection}
                  sx={{
                    m: 0,
                    color: "#5f6f76",
                    fontSize: "0.98rem",
                    lineHeight: 1.72,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 0.75,
                  }}
                >
                  <Box component="span" sx={{ color: "#1fbf75" }}>
                    •
                  </Box>
                  <Box component="span">{connection}</Box>
                </Typography>
              ))}
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default Features;
