import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";

const stats = [
  { value: "9", suffix: "M", label: "Global\nUsers" },
  { value: "120", suffix: "M", label: "Rounds\nScored" },
  { value: "46K", suffix: "", label: "Courses\nWorldwide" },
];

const reviews = [
  {
    quote:
      "I've tried a few GPS apps and this is my favorite. Great shot planning, easy score tracking, and clear round insights from start to finish.",
    author: "Luke MacDonald",
  },
  {
    quote:
      "This golf app has all the tools I need to play my best. The interface is intuitive and keeps me focused while tracking the full round.",
    author: "Jim Coffing",
  },
  {
    quote:
      "Best app on the market. The free version is phenomenal and makes it easy to track my shots, rounds, and progress as a golfer.",
    author: "Weston Willard",
  },
  {
    quote:
      "Who needs a range finder when the app does it for you? I love seeing it match expensive devices and still keep everything simple.",
    author: "Julio Aluiso",
  },
];

function Areas() {
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <Box className="app-stats">
      <Container
        maxWidth={false}
        className="app-stats__container"
        sx={{ px: { xs: 2, md: 6, lg: 10 } }}
      >
        {stats.map((stat, index) => (
          <Box key={stat.label} className="app-stats__item">
            <Typography
              component="h2"
              className="app-stats__value"
              sx={{
                width: "100%",
                textAlign: "center",
                fontSize: {
                  xs: index === 1 ? "2.8rem" : "3.4rem",
                  sm: index === 1 ? "4.2rem" : "4.6rem",
                  md: index === 1 ? "5.2rem" : "5.8rem",
                },
                fontWeight: 900,
                fontFamily: "Roboto-BoldCondensed, sans-serif",
                lineHeight: 0.78,
                letterSpacing: index === 1 ? "-0.05em" : "-0.08em",
                color: "#ffffff",
                "& span": {
                  color: "#ffffff",
                },
              }}
            >
              {stat.suffix ? (
                <>
                  <span>{stat.value}</span>
                  {stat.suffix}
                </>
              ) : (
                stat.value
              )}
            </Typography>

            <Typography
              component="small"
              className="app-stats__label"
              sx={{
                display: "block",
                marginTop: { xs: "16px", md: "20px" },
                fontSize: { xs: "0.68rem", sm: "0.8rem", md: "0.9rem" },
                fontWeight: 700,
                fontFamily: "Roboto-BoldCondensed, sans-serif",
                lineHeight: 1.1,
              }}
            >
              {stat.label.split("\n").map((line) => (
                <span key={line} className="app-stats__label-line">
                  {line}
                </span>
              ))}
            </Typography>
          </Box>
        ))}
      </Container>

      <Container
        maxWidth={false}
        className="app-reviews"
        sx={{ px: { xs: 2, md: 6, lg: 10 } }}
      >
        <Box className="app-reviews__panel">
          <Box className="app-reviews__slider">
            {reviews.map((review, index) => (
              <blockquote
                key={review.author}
                className={`app-reviews__quote ${index === activeReview ? "is-active" : ""}`}
              >
                <Typography component="p" className="app-reviews__text">
                  <Box
                    component="span"
                    sx={{
                      display: "block",
                      maxWidth: { xs: "100%", md: "520px" },
                      mx: "auto",
                    }}
                  >
                    {review.quote}
                  </Box>
                </Typography>
                <Typography component="cite" className="app-reviews__author">
                  {review.author}
                </Typography>
              </blockquote>
            ))}
          </Box>

          <Box className="app-reviews__dots" aria-label="Review pagination">
            {reviews.map((review, index) => (
              <button
                key={review.author}
                type="button"
                className={`app-reviews__dot ${index === activeReview ? "is-active" : ""}`}
                onClick={() => setActiveReview(index)}
                aria-label={`Show review ${index + 1}`}
              />
            ))}
          </Box>

          <Box className="app-reviews__cta-wrap">
            <a
              className="app-reviews__cta"
              href="https://apps.apple.com/us/app/18birdies-golf-gps-scorecard/id892700751"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: "18px" }}
            >
              See More Reviews
            </a>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Areas;
