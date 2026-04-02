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
          pb: 0,
        }}
        ref={reviewsRef}
      >
        <Box
          className="app-reviews__panel"
          sx={{
            pt: 0,
            pb: 0,
            background: "transparent",
          }}
        >
          <Box
            className="areas-overview"
            sx={{
              minHeight: { xs: "560px", md: "380px" },
              px: { xs: "26px", md: "26px" },
              pt: { xs: "46px", md: "72px" },
              pb: { xs: "46px", md: "28px" },
              background:
                'linear-gradient(180deg, rgba(4, 12, 7, 0.82) 0%, rgba(6, 16, 9, 0.72) 100%), url("/fondo-7.jpg") center/cover no-repeat',
            }}
          >
            <Box
              className="areas-overview__grid"
              sx={{
                gap: { xs: "14px", md: "14px" },
                maxWidth: "1120px",
                justifyContent: "center",
              }}
            >
              {areaCards.map((card) => (
                <Box
                  key={card.title}
                  className="areas-overview__card"
                  sx={{
                    minHeight: { xs: "auto", md: "228px" },
                    pt: { xs: "92px", md: "88px" },
                    px: { xs: "20px", md: "22px" },
                    pb: { xs: "22px", md: "20px" },
                    borderRadius: "20px",
                    border: "1px solid rgba(83, 244, 114, 0.56)",
                    background:
                      "linear-gradient(180deg, rgba(3, 12, 8, 0.9) 0%, rgba(4, 10, 7, 0.95) 100%)",
                    boxShadow:
                      "0 0 0 1px rgba(83, 244, 114, 0.18), 0 0 16px rgba(83, 244, 114, 0.18), inset 0 0 0 1px rgba(134, 255, 153, 0.04)",
                  }}
                >
                  <Box className="areas-overview__icon-wrap" sx={{ top: "-18px" }}>
                    <Box
                      className="areas-overview__icon"
                      sx={{
                        width: { xs: "104px", md: "110px" },
                        height: { xs: "92px", md: "96px" },
                        borderRadius: "22px",
                        background:
                          "radial-gradient(circle at 50% 38%, rgba(75, 223, 90, 0.14) 0%, rgba(75, 223, 90, 0.03) 54%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, rgba(8, 23, 12, 0.96) 0%, rgba(5, 14, 9, 0.98) 100%)",
                        border: "1px solid rgba(71, 229, 98, 0.88)",
                        boxShadow:
                          "0 0 0 1px rgba(71, 229, 98, 0.16), 0 0 18px rgba(71, 229, 98, 0.38), inset 0 0 18px rgba(71, 229, 98, 0.08)",
                        "& .MuiSvgIcon-root": {
                          fontSize: { xs: "3.2rem", md: "3.35rem" },
                          transform: "scaleX(1.02)",
                        },
                      }}
                    >
                      {card.icon}
                    </Box>
                  </Box>
                  <Typography component="h3" className="areas-overview__title">
                    <Box
                      component="span"
                      sx={{
                        mt: { xs: "8px", md: "10px" },
                        fontWeight: 900,
                        fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                        fontSize: { xs: "0.98rem", sm: "1.06rem", md: "0.98rem" },
                        lineHeight: 1.08,
                        letterSpacing: "0.02em",
                        color: "#46da53",
                        textTransform: "uppercase",
                        display: "block",
                      }}
                    >
                      {card.title}
                    </Box>
                  </Typography>
                  <Typography
                    component="p"
                    className="areas-overview__description"
                    sx={{
                      textAlign: "center",
                      mx: "auto",
                      lineHeight: 1.34,
                      fontSize: { xs: "0.92rem", md: "0.92rem" },
                      fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                      maxWidth: "252px",
                      color: "rgba(238, 245, 238, 0.8)",
                      mt: "8px",
                    }}
                  >
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


