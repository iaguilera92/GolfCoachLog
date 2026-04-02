import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import SportsGolfRoundedIcon from "@mui/icons-material/SportsGolfRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";

const areaCards = [
  {
    title: "GOLF CLINICS",
    description:
      "Schedule group clinics, handle registration and communicate details to participants.",
    icon: <SchoolRoundedIcon />,
  },
  {
    title: "GOLF LESSON MANAGEMENT",
    description:
      "Organize bookings, playing areas and student history in one place.",
    icon: <SportsGolfRoundedIcon />,
  },
  {
    title: "PRACTICE LOG",
    description:
      "Players can log practice sessions, notes and progress over time.",
    icon: <AssignmentTurnedInRoundedIcon />,
  },
  {
    title: "PAYMENT & REVENUE MANAGEMENT",
    description:
      "Collect payments, track transactions and grow your teaching revenue.",
    icon: <AccountBalanceWalletRoundedIcon />,
  },
];

function Areas() {
  const { ref: reviewsRef, inView: reviewsInView } = useInView({
    triggerOnce: true,
    threshold: 0.22,
    rootMargin: "0px 0px -6% 0px",
  });

  return (
    <Box
      className="app-stats"
      sx={{
        background: 'url("/fondo-18.png") center/cover no-repeat',
      }}
    >
      <Container
        maxWidth={false}
        className={`app-reviews app-section-reveal app-section-reveal--up ${reviewsInView ? "is-visible" : ""}`}
        sx={{
          px: 0,
          mt: 0,
          mb: 0,
          position: "relative",
          zIndex: 2,
        }}
        ref={reviewsRef}
      >
        <Box
          className="app-reviews__panel"
          sx={{
            pt: { xs: "18px", md: "30px" },
            pb: { xs: "18px", md: "24px" },
            background: "transparent",
          }}
        >
          <Box className="areas-overview">
            <Box className="areas-overview__grid">
              {areaCards.map((card) => (
                <Box key={card.title} className="areas-overview__card">
                  <Box className="areas-overview__icon-wrap">
                    <Box className="areas-overview__icon">
                      {card.icon}
                    </Box>
                  </Box>
                  <Typography component="h3" className="areas-overview__title">
                    {card.title}
                  </Typography>
                  <Typography component="p" className="areas-overview__description">
                    {card.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Areas;


