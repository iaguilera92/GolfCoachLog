import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./css/Features.css";

function Features() {
  const navigate = useNavigate();

  return (
    <Box className="features-showcase">
      <Container maxWidth="lg" className="features-showcase__container">
        <Box className="features-showcase__copy features-showcase__copy--hero">
          <Typography
            component="h2"
            className="features-showcase__title"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "1.28rem", sm: "1.58rem", md: "1.7rem" },
              fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
              lineHeight: 1.18,
              textAlign: "center",
            }}
          >
            <span className="features-showcase__title-desktop">
              THE #1 RATED
              <br />
              GOLF GPS APP
            </span>
            <span className="features-showcase__title-mobile">
              THE #1 RATED
              <br />
              GOLF GPS
              <br />
              APP
            </span>
          </Typography>

          <Typography
            component="p"
            className="features-showcase__description"
            sx={{ textAlign: "center", mx: "auto", lineHeight: 1.95 }}
          >
            Get accurate GPS distances, track scores, stats, and your handicap,
            and compete with friends in one simple golf experience.
          </Typography>

          <Button
            className="features-showcase__button"
            variant="contained"
            onClick={() => navigate("/servicios")}
          >
            See More Features
          </Button>
        </Box>
        <Box className="features-showcase__secondary features-showcase__secondary--boxed">
          <Box className="features-showcase__secondary-image-wrap">
            <Box className="features-showcase__image-frame features-showcase__image-frame--secondary">
              <img
                src="/hero-2.png"
                alt="AI golf coach preview"
                className="features-showcase__secondary-image"
              />
            </Box>
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
              <Box component="span" sx={{ display: { xs: "inline", md: "block" } }}>
                AI-POWERED SWING
              </Box>
              <Box component="span" sx={{ display: { xs: "inline", md: "block" } }}>
                ANALYZER &amp; COACH
              </Box>
            </Typography>

            <Typography component="p" className="features-showcase__secondary-description">
              Breakthrough technology that helps golfers analyze their swing and
              improve with smarter feedback.
            </Typography>

            <Button
              className="features-showcase__button"
              variant="contained"
              onClick={() => navigate("/servicios")}
            >
              See It In Action
            </Button>
          </Box>
        </Box>

        <Box className="features-showcase__secondary features-showcase__secondary--reverse">
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
              <Box component="span" sx={{ display: { xs: "inline", md: "block" } }}>
                DISCOVER OVER
              </Box>
              <Box component="span" sx={{ display: { xs: "inline", md: "block" } }}>
                40,000 COURSES
              </Box>
            </Typography>

            <Typography component="p" className="features-showcase__secondary-description">
              Preview course GPS and scorecards for your next round, then explore
              reviews and photos from other golfers.
            </Typography>

            <Button
              component="a"
              href="https://18birdies.com/golf-courses/"
              target="_blank"
              rel="noopener noreferrer"
              className="features-showcase__button"
              variant="contained"
            >
              View Courses
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Features;
