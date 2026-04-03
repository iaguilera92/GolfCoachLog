import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import SportsGolfRoundedIcon from "@mui/icons-material/SportsGolfRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";

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
        className="app-reviews"
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
                gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
                gap: { xs: "14px", md: "18px" },
                maxWidth: "1120px",
                justifyContent: "center",
                opacity: reviewsInView ? 1 : 0,
                transform: reviewsInView ? "translate3d(0, 0, 0)" : "translate3d(0, 90px, 0)",
                transition:
                  "opacity 820ms cubic-bezier(0.22, 1, 0.36, 1), transform 820ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {areaCards.map((card) => (
                <Box
                  key={card.title}
                  className="areas-overview__card"
                  sx={{
                    minHeight: { xs: "auto", md: "242px" },
                    pt: { xs: "90px", md: "98px" },
                    px: { xs: "20px", md: "24px" },
                    pb: { xs: "20px", md: "22px" },
                    borderRadius: "22px",
                    border: "1px solid rgba(70, 221, 95, 0.42)",
                    background:
                      "linear-gradient(180deg, rgba(5, 16, 10, 0.92) 0%, rgba(6, 14, 10, 0.96) 100%)",
                    boxShadow:
                      "0 18px 30px rgba(0, 0, 0, 0.22), inset 0 0 0 1px rgba(134, 255, 153, 0.04)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box className="areas-overview__icon-wrap" sx={{ top: { xs: "-12px", md: "-14px" } }}>
                    <Box
                      className="areas-overview__icon"
                      sx={{
                        width: { xs: "108px", md: "118px" },
                        height: { xs: "98px", md: "108px" },
                        borderRadius: "24px",
                        background:
                          "radial-gradient(circle at 50% 38%, rgba(75, 223, 90, 0.16) 0%, rgba(75, 223, 90, 0.04) 54%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, rgba(12, 27, 15, 0.96) 0%, rgba(7, 17, 11, 0.98) 100%)",
                        border: "1px solid rgba(71, 229, 98, 0.82)",
                        boxShadow:
                          "0 0 0 1px rgba(71, 229, 98, 0.14), 0 0 18px rgba(71, 229, 98, 0.32), inset 0 0 18px rgba(71, 229, 98, 0.08)",
                        "& .MuiSvgIcon-root": {
                          fontSize: { xs: "3.2rem", md: "3.45rem" },
                          transform: "scaleX(1.08)",
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
                        mt: { xs: "4px", md: "2px" },
                        fontWeight: 800,
                        fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                        fontSize: { xs: "1.08rem", sm: "1.12rem", md: "1.12rem" },
                        lineHeight: 1.12,
                        letterSpacing: "0.04em",
                        color: "#46da53",
                        textTransform: "uppercase",
                        display: "block",
                        textAlign: "center",
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
                      lineHeight: 1.42,
                      fontSize: { xs: "0.94rem", md: "0.98rem" },
                      fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                      maxWidth: "258px",
                      color: "rgba(238, 245, 238, 0.82)",
                      mt: "10px",
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


