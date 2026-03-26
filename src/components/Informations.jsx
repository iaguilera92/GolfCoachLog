import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import "./css/Informations.css";

function Informations() {
  return (
    <Box className="tournament-block">
      <Box className="tournament-block__panel tournament-block__panel--full">
        <Container maxWidth="lg" className="tournament-block__container">
          <Box className="tournament-block__copy">
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
                HOST A
              </Box>
              <Box component="span" sx={{ display: { xs: "inline", md: "block" } }}>
                TOURNAMENT
              </Box>
            </Typography>

            <Typography
              component="p"
              className="tournament-block__description"
              sx={{ textAlign: "center", mx: "auto" }}
            >
              We&apos;ve made it easier than ever to run your own tournament with
              registration, live scoring, and more.
            </Typography>

            <Button
              component="a"
              href="/tournaments"
              variant="contained"
              className="tournament-block__button"
              sx={{ mt: "32px" }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" className="tournament-block__container">
        <Box className="tournament-block__community">
          <Box className="tournament-block__community-image-wrap">
            <img
              src="/informations.png"
              alt="Golf community preview"
              className="tournament-block__community-image"
            />
          </Box>

          <Box className="tournament-block__community-copy">
            <Typography
              component="h2"
              className="tournament-block__community-title"
              sx={{
                fontWeight: 900,
                fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                fontSize: { xs: "2rem", sm: "2.25rem", md: "2.7rem" },
              }}
            >
              JOIN THE COMMUNITY
            </Typography>

            <Typography component="p" className="tournament-block__community-description">
              Connect with other golfers, compare stats, and compete in
              tournaments no matter where you are in the world.
            </Typography>

            <Button
              component="a"
              href="/#"
              variant="contained"
              className="tournament-block__button"
            >
              See More
            </Button>
          </Box>
        </Box>
      </Container>

      <Box className="tournament-block__premium tournament-block__premium--full">
          <Container
            maxWidth={false}
            className="tournament-block__container tournament-block__container--premium"
            sx={{ px: { xs: 3, md: 6, lg: 10 } }}
          >
          <Box
            className="tournament-block__premium-inner"
            sx={{ px: { xs: 1, md: 10, lg: 14 } }}
          >
            <Box className="tournament-block__premium-copy">
              <Typography
                component="h2"
                className="tournament-block__premium-title"
                sx={{
                  fontWeight: 900,
                  textAlign: { xs: "center", md: "left" },
                  fontSize: { xs: "2.25rem", sm: "2.8rem", md: "2.7rem" },
                  fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                  whiteSpace: { md: "nowrap" },
                  lineHeight: 1.04,
                  mb: "8px",
                }}
              >
                Play With Confidence
              </Typography>

              <Typography
                component="p"
                className="tournament-block__premium-description"
                sx={{ textAlign: { xs: "center", md: "left" }, mx: { xs: "auto", md: 0 } }}
              >
                Get personalized insights and powerful tools to shoot lower scores
                and hit your personal best every round.
              </Typography>
            </Box>

            <Box
              className="tournament-block__premium-action"
              sx={{ pr: { md: "56px", lg: "84px" }, pl: { md: "56px", lg: "84px" } }}
            >
              <Button
                component="a"
                href="/premium/"
                variant="contained"
                className="tournament-block__button"
              >
                Explore Premium
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" className="tournament-block__container">
        <Box className="tournament-block__app">
          <Box className="tournament-block__app-layout">
            <Box className="tournament-block__app-copy">
              <Typography component="h2" className="tournament-block__app-title" sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Box
                  component="span"
              sx={{
                display: "inline-block",
                fontSize: { xs: "2.25rem", sm: "2.8rem", md: "2.7rem" },
                fontWeight: 900,
                fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
                lineHeight: 1,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                paddingBottom: { xs: "10px", md: "16px" },
                whiteSpace: { md: "nowrap" },
              }}
            >
                  Get The App
                </Box>
              </Typography>
            </Box>

            <Box className="tournament-block__app-visual">
              <img
                src="/hero-0.png"
                alt="Golf app preview 1"
                className="tournament-block__app-phone tournament-block__app-phone--left"
              />
              <img
                src="/hero-1.png"
                alt="Golf app preview 2"
                className="tournament-block__app-phone tournament-block__app-phone--center"
              />
              <img
                src="/hero-2.png"
                alt="Golf app preview 3"
                className="tournament-block__app-phone tournament-block__app-phone--right"
              />
            </Box>

            <Box className="tournament-block__app-actions">
            <a
              href="https://18birdies.onelink.me/IdkR/3fc1cc20"
              target="_blank"
              rel="noopener noreferrer"
              className="tournament-block__store-badge"
              aria-label="Get it on Google Play"
            >
              <svg
                viewBox="0 0 36 40"
                aria-hidden="true"
                className="tournament-block__store-icon tournament-block__store-icon--play"
              >
                <path fill="#00D2FF" d="M3.76 2.57 21.58 20 3.76 37.43A3.66 3.66 0 0 1 3 35.12V4.88c0-.88.28-1.69.76-2.31Z" />
                <path fill="#00F076" d="M3.76 2.57a3.3 3.3 0 0 1 4.06-.36L28.8 14.1 21.58 20 3.76 2.57Z" />
                <path fill="#FFBD00" d="m28.8 14.1 4.27 2.45c2.57 1.47 2.57 5.43 0 6.9L28.8 25.9 21.58 20l7.22-5.9Z" />
                <path fill="#FF3A44" d="M3.76 37.43 21.58 20l7.22 5.9-20.98 11.89a3.3 3.3 0 0 1-4.06-.36Z" />
              </svg>
              <Box>
                <Typography component="span" className="tournament-block__store-small">
                  GET IT ON
                </Typography>
                <Typography component="span" className="tournament-block__store-name">
                  Google Play
                </Typography>
              </Box>
            </a>

            <a
              href="https://18birdies.onelink.me/IdkR/4412480a"
              target="_blank"
              rel="noopener noreferrer"
              className="tournament-block__store-badge"
              aria-label="Download on the App Store"
            >
              <AppleIcon className="tournament-block__store-icon" />
              <Box>
                <Typography component="span" className="tournament-block__store-small">
                  Download on the
                </Typography>
                <Typography component="span" className="tournament-block__store-name">
                  App Store
                </Typography>
              </Box>
            </a>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Informations;
