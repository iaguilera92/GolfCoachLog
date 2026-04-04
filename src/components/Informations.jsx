import React, { useEffect, useRef, useState } from "react";
import { Alert, Box, Button, Container, Dialog, DialogContent, IconButton, Snackbar, Typography } from "@mui/material";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ChildCareRoundedIcon from "@mui/icons-material/ChildCareRounded";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./css/Informations.css";

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

function Informations() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openTournamentDialog, setOpenTournamentDialog] = useState(false);
  const [openPracticeDialog, setOpenPracticeDialog] = useState(false);
  const [openPaymentsDialog, setOpenPaymentsDialog] = useState(false);
  const [openLessonDialog, setOpenLessonDialog] = useState(false);
  const [openRoleDialog, setOpenRoleDialog] = useState(false);
  const [selectedRole, setSelectedRole] = useState(userRoles[0]);
  const [rolesIntroPlayed, setRolesIntroPlayed] = useState(false);
  const [showRolesHint, setShowRolesHint] = useState(true);

  const sectionOneRef = useRef(null);
  const sectionThreeRef = useRef(null);
  const rolesSliderRef = useRef(null);
  const { ref: sectionTwoRef, inView: sectionTwoInView } = useInView({
    triggerOnce: true,
    threshold: 0.22,
    rootMargin: "0px 0px -8% 0px",
  });
  const { ref: sectionFourRef, inView: sectionFourInView } = useInView({
    triggerOnce: true,
    threshold: 0.22,
    rootMargin: "0px 0px -8% 0px",
  });

  const [sectionOneInView, setSectionOneInView] = useState(false);
  const [sectionThreeInView, setSectionThreeInView] = useState(false);

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

  useEffect(() => {
    if (!sectionTwoInView || rolesIntroPlayed || typeof window === "undefined") return;
    if (window.innerWidth >= 900) return;

    const slider = rolesSliderRef.current;
    if (!slider) return;

    const maxScroll = slider.scrollWidth - slider.clientWidth;
    if (maxScroll <= 0) return;

    const timeoutId = window.setTimeout(() => {
      slider.scrollLeft = maxScroll;

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          slider.scrollTo({
            left: 0,
            behavior: "smooth",
          });
          setRolesIntroPlayed(true);
        });
      });
    }, 220);

    return () => window.clearTimeout(timeoutId);
  }, [sectionTwoInView, rolesIntroPlayed]);

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
  }, [sectionTwoInView]);

  const closeSpinSx = {
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
  };

  const dialogPaperSx = {
    borderRadius: "24px",
    overflow: "hidden",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(247,250,251,0.98) 100%)",
    boxShadow: "0 28px 80px rgba(0,0,0,0.22)",
  };

  const greenKicker = (text) => (
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
        {text}
      </Typography>
    </Box>
  );

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

  return (
    <Box className="tournament-block">
      <Box
        sx={{
          background: 'url("/fondo-18.png") center/cover no-repeat',
          minHeight: { xs: "480px", md: "360px !important" },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container
          maxWidth="lg"
          className="tournament-block__container"
          sx={{ px: { xs: "20px", md: "30px" }, width: "100%" }}
        >
          <Box
            className={`features-showcase__secondary features-showcase__secondary--reverse app-section-reveal app-section-reveal--left ${sectionTwoInView ? "is-visible" : ""}`}
            ref={sectionTwoRef}
            sx={{
              background: "transparent",
              boxShadow: "none",
              minHeight: { md: "340px !important" },
              mt: 0,
              px: { xs: 0, md: "40px" },
              py: { xs: "12px", md: "8px !important" },
              mb: 0,
              gap: { xs: "24px", md: "44px" },
            }}
          >
            <Box
              className="features-showcase__secondary-image-wrap"
              sx={{
                flex: { xs: "0 0 100%", md: "0 0 min(100%, 350px)" },
                width: { xs: "min(100%, 320px)", md: "auto" },
                minHeight: { md: 0 },
              }}
            >
              <img
                src="/golf-lesson.png"
                alt="Golf lesson management"
                className="features-showcase__secondary-image features-showcase__secondary-image--full"
                style={{
                  width: "50%",
                  maxWidth: "72%",
                  height: "auto",
                  maxHeight: "330px",
                  minHeight: 0,
                  borderRadius: 0,
                  objectFit: "contain",
                  boxShadow: "none",
                  animation: "none",
                  transform: "none",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </Box>

            <Box
              className="features-showcase__secondary-copy"
              sx={{
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
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

              <Typography
                component="p"
                className="features-showcase__secondary-description"
              >
                Plan lessons across every area of the game, keep session records organized, and follow each client&apos;s progress with a clear, structured coaching system.
              </Typography>

              <Button
                variant="contained"
                className="features-showcase__button"
                sx={{ alignSelf: { xs: "center", md: "flex-start" } }}
                onClick={() => setOpenLessonDialog(true)}
              >
                Explore More
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          background: 'url("/fondo-18.png") center/cover no-repeat',
          minHeight: { xs: "410px", md: "410px" },
          display: "none",
          alignItems: "center",
          mb: { xs: -0.5, md: -1 },
        }}
      >
        <Container
          maxWidth="lg"
          className="tournament-block__container"
          sx={{ px: { xs: "20px", md: "30px" }, width: "100%" }}
        >
          <Box
            className={`tournament-block__community app-section-reveal app-section-reveal--left ${sectionTwoInView ? "is-visible" : ""}`}
            sx={{
              minHeight: { md: "362px" },
              display: "block",
              background: "transparent",
              pt: { xs: 1.1, md: 1.5 },
            }}
          >
            <Box sx={{ maxWidth: "1180px", mx: "auto", color: "#fff" }}>
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
                    USER ROLES – GOLF COACH LOG
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
                    “Tap a role to explore responsibilities, role scope, and how each profile connects inside the platform.”
                  </Box>
                  <Box component="span" sx={{ display: { xs: "inline", sm: "none" } }}>
                    “Tap a role to explore each profile.”
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
                  const isOpen = selectedRole?.title === role.title;
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
                        transition: "transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease, background 180ms ease",
                        transform: isOpen ? "translateY(-2px)" : "translateY(0)",
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
        </Container>
      </Box>

      <Dialog
        open={openRoleDialog}
        onClose={() => setOpenRoleDialog(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: dialogPaperSx }}
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
            <IconButton onClick={() => setOpenRoleDialog(false)} sx={closeSpinSx}>
              <CloseRoundedIcon />
            </IconButton>

            {greenKicker("User Roles")}

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

      <Box
        className="tournament-block__panel tournament-block__panel--full"
        ref={sectionOneRef}
        sx={{
          background:
            'linear-gradient(90deg, rgba(7, 18, 28, 0.56), rgba(7, 18, 28, 0.32)), url("/fondo-17.avif") center 18%/cover no-repeat',
        }}
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

      <Box
        sx={{
          background: 'url("/fondo-18.png") center/cover no-repeat',
          minHeight: { xs: "500px", md: "290px" },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container
          maxWidth="lg"
          className="tournament-block__container"
          sx={{ px: { xs: "20px", md: "30px" }, width: "100%" }}
        >
          <Box
            className={`tournament-block__community app-section-reveal app-section-reveal--left ${sectionFourInView ? "is-visible" : ""}`}
            ref={sectionFourRef}
            sx={{ minHeight: { md: "250px" }, py: 0 }}
          >
            <Box
              className="tournament-block__community-image-wrap"
              sx={{ flex: { xs: "0 0 100%", md: "0 0 min(100%, 350px)" } }}
            >
              <img
                src="/payment.png"
                alt="Practice log preview"
                className="tournament-block__community-image"
                style={{
                  width: "60%",
                  maxWidth: "72%",
                  height: "auto",
                  maxHeight: "330px",
                  borderRadius: 0,
                  objectFit: "contain",
                  boxShadow: "none",
                  animation: "none",
                  transform: "none",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </Box>

            <Box
              className="tournament-block__community-copy"
              sx={{
                textAlign: { xs: "center", md: "right" },
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-end" },
                mr: { md: "38px" },
              }}
            >
              <Typography
                component="h2"
                className="tournament-block__community-title"
                sx={{
                  fontWeight: 900,
                  fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                  fontSize: { xs: "2rem", sm: "2.25rem", md: "2.7rem" },
                  textAlign: { xs: "center", md: "right" },
                }}
              >
                PAYMENTS &amp; REVENUE MANAGEMENT
              </Typography>

              <Typography
                component="p"
                className="tournament-block__community-description"
                sx={{ textAlign: { xs: "center", md: "right" } }}
              >
                Collect payments, track transactions and grow your teaching revenue.
              </Typography>

              <Button
                variant="contained"
                className="tournament-block__button"
                sx={{ alignSelf: { xs: "center", md: "flex-end" } }}
                onClick={() => setOpenPracticeDialog(true)}
              >
                See More
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        className="tournament-block__premium tournament-block__premium--full"
        ref={sectionThreeRef}
        sx={{
          background:
            'linear-gradient(90deg, rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.56)), url("/fondo-feature.avif") center/cover no-repeat',
        }}
      >
        <Container
          maxWidth={false}
          className="tournament-block__container tournament-block__container--premium"
          sx={{ px: { xs: 3, md: 6, lg: 10 } }}
        >
          <Box
            className={`tournament-block__premium-inner app-section-reveal app-section-reveal--left ${sectionThreeInView ? "is-visible" : ""}`}
            sx={{
              px: { xs: 0, md: 4, lg: 6 },
              display: "grid",
              gap: { xs: 2, md: 2.2 },
              width: "100%",
              maxWidth: { xs: "100%", md: "1100px", lg: "1160px" },
              mx: "auto",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1.1fr" },
                gap: { xs: 2, md: 2.2 },
                alignItems: "stretch",
              }}
            >
              <Box
                sx={{
                  borderRadius: "22px",
                  border: "1px solid rgba(79, 235, 102, 0.65)",
                  background:
                    "linear-gradient(180deg, rgba(5,16,10,0.84) 0%, rgba(7,16,10,0.72) 100%)",
                  boxShadow: "0 0 0 1px rgba(79,235,102,0.12), 0 0 24px rgba(79,235,102,0.12)",
                  p: { xs: 2.2, md: 2.8 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      alignItems: "start",
                      gap: 1.2,
                      maxWidth: "520px",
                      mx: "auto",
                    }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        color: "#52e65e",
                        fontSize: "2.4rem",
                        fontWeight: 900,
                        lineHeight: 1,
                        mt: -0.25,
                        fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                      }}
                    >
                      {"\u201C\u201C"}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#ffffff",
                        fontStyle: "italic",
                        fontSize: { xs: "0.98rem", md: "1.05rem" },
                        lineHeight: 1.6,
                        maxWidth: "38ch",
                      }}
                    >
                      <Box component="span" sx={{ display: "block" }}>
                        Golf Coach Log saves me hours every week. My students book
                        easily and my calendar is always up to date.
                      </Box>
                      <Box
                        component="span"
                        sx={{
                          display: "block",
                          mt: 1,
                          color: "#59dd69",
                          fontWeight: 800,
                          fontStyle: "normal",
                          fontSize: "0.92rem",
                          fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                        }}
                      >
                        <Box component="span" sx={{ display: "block" }}>
                          Coach Sergio Murtinho "Crandon Golf academy"
                        </Box>
                        <Box component="span" sx={{ display: "block" }}>
                          Key Biscayne, Florida
                        </Box>
                      </Box>
                    </Typography>
                  </Box>
                </Box>

                {/*
                  Metrics block hidden for now.
                  Keep this section for future reactivation.

                <Box
                  sx={{
                    mt: 2,
                    pt: 1.8,
                    borderTop: "1px solid rgba(106, 236, 119, 0.35)",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: 1.2,
                  }}
                >
                  {[
                    { icon: <StarRoundedIcon sx={{ fontSize: 52 }} />, value: "290K+", label: "App Ratings" },
                    { icon: <GroupsRoundedIcon sx={{ fontSize: 52 }} />, value: "1,000+", label: "Golf Coaches" },
                    { icon: <PublicRoundedIcon sx={{ fontSize: 52 }} />, value: "40+", label: "Countries" },
                  ].map((item) => (
                    <Box key={item.label} sx={{ textAlign: "center" }}>
                      <Box sx={{ color: "#58e056", display: "flex", justifyContent: "center", mb: 0.5 }}>
                        {item.icon}
                      </Box>
                      <Typography sx={{ color: "#ffffff", fontWeight: 800, fontSize: { xs: "1rem", md: "1.15rem" } }}>
                        {item.value}
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.72)", fontSize: "0.78rem", lineHeight: 1.2 }}>
                        {item.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                */}
              </Box>

              <Box
                sx={{
                  borderRadius: "22px",
                  border: "1px solid rgba(79, 235, 102, 0.65)",
                  background:
                    'linear-gradient(180deg, rgba(4,11,7,0.82) 0%, rgba(5,12,8,0.88) 100%), url("/fondo-hero.png") center/cover no-repeat',
                  boxShadow: "0 0 0 1px rgba(79,235,102,0.12), 0 0 24px rgba(79,235,102,0.12)",
                  p: { xs: 2.2, md: 2.8 },
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
                  gap: 2,
                  alignItems: "center",
                  minHeight: { md: "290px" },
                }}
              >
                <Box
                  sx={{
                    justifySelf: { xs: "stretch", md: "start" },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "stretch", md: "center" },
                    justifyContent: "center",
                    gap: 1.1,
                    minWidth: { md: "220px" },
                  }}
                >
                  <Box
                    component="img"
                    src="/shop.png"
                    alt="Shop preview"
                    sx={{
                      display: "block",
                      width: { xs: "86px", md: "106px" },
                      height: "auto",
                      mx: { xs: "auto", md: 0 },
                    }}
                  />

                  <Box
                    sx={{
                      width: "100%",
                      borderRadius: "18px",
                      border: "1px solid rgba(87, 230, 96, 0.45)",
                      background: "linear-gradient(180deg, rgba(6,15,9,0.78) 0%, rgba(9,22,13,0.88) 100%)",
                      p: 1.8,
                      minWidth: { md: "220px" },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.75)",
                        fontSize: "0.78rem",
                        textAlign: { xs: "center", md: "left" },
                      }}
                    >
                      Total Revenue
                    </Typography>
                    <Typography
                      sx={{
                        color: "#58e056",
                        fontWeight: 900,
                        fontSize: { xs: "1.65rem", md: "1.9rem" },
                        lineHeight: 1.1,
                        mt: 0.35,
                        textAlign: { xs: "center", md: "left" },
                      }}
                    >
                      $2,540.00
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.7)",
                        fontSize: "0.72rem",
                        mt: 0.45,
                        textAlign: { xs: "center", md: "left" },
                      }}
                    >
                      This Month
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <Typography
                    component="h2"
                    sx={{
                      m: 0,
                      color: "#ffffff",
                      fontWeight: 900,
                      fontSize: { xs: "1.45rem", md: "1.8rem" },
                      lineHeight: 1,
                      fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                      whiteSpace: "nowrap",
                    }}
                  >
                    PRO SHOP &amp; REVENUE
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1.2,
                      color: "rgba(255,255,255,0.82)",
                      fontSize: { xs: "0.88rem", md: "0.95rem" },
                      lineHeight: 1.55,
                      maxWidth: "40ch",
                    }}
                  >
                    Sell products, manage inventory and increase your revenue
                    directly from the app.
                  </Typography>

                  <Button
                    variant="outlined"
                    onClick={() => setOpenPaymentsDialog(true)}
                    endIcon={<ArrowForwardRoundedIcon />}
                    sx={{
                      mt: 2.2,
                      borderRadius: "999px",
                      px: 2.1,
                      py: 1,
                      color: "#58e056",
                      borderColor: "rgba(88,224,86,0.82)",
                      fontWeight: 800,
                      textTransform: "none",
                      fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                      "&:hover": {
                        borderColor: "#66ef70",
                        backgroundColor: "rgba(88,224,86,0.08)",
                      },
                    }}
                  >
                    Explore Pro Shop
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                borderRadius: "22px",
                border: "1px solid rgba(79, 235, 102, 0.65)",
                background:
                  "linear-gradient(180deg, rgba(5,16,10,0.84) 0%, rgba(7,16,10,0.74) 100%)",
                boxShadow: "0 0 0 1px rgba(79,235,102,0.12), 0 0 24px rgba(79,235,102,0.12)",
                px: { xs: 2.2, md: 3.2 },
                py: { xs: 2, md: 2.3 },
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "stretch", md: "center" },
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontWeight: 900,
                    fontSize: { xs: "1.55rem", md: "2rem" },
                    lineHeight: 1,
                    fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                  }}
                >
                  Start coaching smarter today.
                </Typography>
                <Typography sx={{ mt: 0.7, color: "rgba(255,255,255,0.76)", fontSize: "0.95rem" }}>
                  Join Golf Coach Log and focus on what matters most: your players.
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "stretch", md: "flex-end" } }}>
                <Button
                  variant="contained"
                  onClick={() => setOpenPaymentsDialog(true)}
                  endIcon={<ArrowForwardRoundedIcon />}
                  sx={{
                    borderRadius: "999px",
                    px: 3,
                    py: 1.15,
                    minWidth: { xs: "100%", md: "230px" },
                    background: "linear-gradient(135deg, #5fe25f 0%, #2db44f 100%)",
                    color: "#ffffff",
                    fontWeight: 800,
                    textTransform: "none",
                    fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                    boxShadow: "0 10px 24px rgba(46,180,79,0.28)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #70ea6f 0%, #34bf56 100%)",
                    },
                  }}
                >
                  Start Free Trial
                </Button>
                <Typography
                  sx={{
                    mt: 0.8,
                    color: "rgba(255,255,255,0.72)",
                    fontSize: "0.74rem",
                    textAlign: "center",
                    width: { xs: "100%", md: "230px" },
                  }}
                >
                  No credit card required
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

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

      <Dialog open={openTournamentDialog} onClose={() => setOpenTournamentDialog(false)} maxWidth="sm" fullWidth PaperProps={{ sx: dialogPaperSx }}>
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
            <IconButton onClick={() => setOpenTournamentDialog(false)} sx={closeSpinSx}>
              <CloseRoundedIcon />
            </IconButton>

            {greenKicker("Tournaments")}

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
              Tournaments &amp; Competitions
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
        PaperProps={{ sx: { ...dialogPaperSx, overflow: "hidden" } }}
      >
        <DialogContent sx={{ p: 0, overflow: "hidden" }}>
          <Box
            sx={{
              position: "relative",
              px: { xs: 3, md: 4 },
              py: { xs: 3, md: 4 },
              background:
                "linear-gradient(135deg, rgba(31,191,117,0.12) 0%, rgba(20,138,88,0.05) 55%, rgba(255,255,255,0.9) 100%)",
            }}
          >
            <IconButton onClick={() => setOpenPracticeDialog(false)} sx={closeSpinSx}>
              <CloseRoundedIcon />
            </IconButton>

            {greenKicker("Payments")}

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
              Payments &amp; Revenue Management
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
              Take full control of your coaching business with a complete
              payment and revenue system. Track income from lessons, packages,
              clinics, tournaments, and pro shop sales-all seamlessly
              connected to your clients and sessions.
              <br />
              Everything is organized, recorded, and easy to manage-so you can
              focus on growing your business without the complexity.
              <br />
              Being a coach and an entrepreneur has never been this simple.
            </Typography>

            <Box
              sx={{
                width: "calc(100% + 48px)",
                ml: "-24px",
                mr: "-24px",
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
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                  style={{ display: "flex", width: "max-content", willChange: "transform" }}
                >
                  {[0, 1].map((copyIndex) => (
                    <Box
                      key={copyIndex}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.2,
                        pr: 1.2,
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

      <Dialog
        open={openLessonDialog}
        onClose={() => setOpenLessonDialog(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: dialogPaperSx }}
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
            <IconButton onClick={() => setOpenLessonDialog(false)} sx={closeSpinSx}>
              <CloseRoundedIcon />
            </IconButton>

            {greenKicker("Golf Lesson Management")}

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
              Plan, structure, and track your lessons across all areas of the game, including swing, fundamentals, short game, putting, and course management. Create personalized coaching plans, keep detailed session records, and follow each client&apos;s progress, ensuring a more organized, consistent, and effective coaching experience.
            </Typography>
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
            ...dialogPaperSx,
            maxHeight: "88vh",
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
            <IconButton onClick={() => setOpenPaymentsDialog(false)} sx={closeSpinSx}>
              <CloseRoundedIcon />
            </IconButton>

            {greenKicker("Revenue")}

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
              Pro Shop &amp; Revenue
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
              Sell products, manage inventory, and grow your coaching revenue
              from one place. Keep your pro shop connected to your academy and
              turn every sale into part of a more organized business system.
              <br />
              Start free, simplify operations, and create a smoother buying
              experience for your players directly from the app.
            </Typography>

            <Box
              component="img"
              src="/feature-3.jpeg"
              alt="Payments and revenue preview"
              sx={{
                display: "block",
                width: { xs: "230px", md: "310px" },
                height: "auto",
                mx: "auto",
                mt: 1.8,
                mb: 1.8,
                borderRadius: "18px",
                filter: "drop-shadow(0 16px 24px rgba(0,0,0,0.14))",
              }}
            />

          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default Informations;
