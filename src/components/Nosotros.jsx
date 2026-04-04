import {
  Box,
  Typography,
  Grid,
  Container,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Nosotros = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [scrollY, setScrollY] = useState(0);
  const [subrayadoActivo, setSubrayadoActivo] = useState(false);

  const letterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.4 + i * 0.1 },
    }),
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    if (isMobile) {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isMobile]);

  useEffect(() => {
    const t = setTimeout(() => setSubrayadoActivo(true), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        minHeight: "100vh",
        width: "100%",
        py: 14,
        px: 0,
        pb: 3.5,
        position: "relative",
        overflow: "hidden",
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.58)), url(/fondo-feature.avif)',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <Box textAlign="center" mb={4}>
        <Typography
          variant={isMobile ? "h5" : "h3"}
          fontWeight={700}
          sx={{
            color: "white",
            display: "inline-flex",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -2,
              left: 0,
              width: subrayadoActivo ? "100%" : "0%",
              height: "3px",
              borderRadius: "3px",
              background: "linear-gradient(90deg, #FF9800, #F57C00)",
              transition: "width 0.6s ease-out",
            },
          }}
        >
          {"About Us".split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
            >
              {char}
            </motion.span>
          ))}
        </Typography>
      </Box>

      <Box maxWidth="1200px" mx="auto">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box px={{ xs: 2, sm: 0 }}>
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                    borderRadius: 3,
                    p: 2,
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" color="white" gutterBottom>
                      Who We Are
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ color: "#ccc", textAlign: "justify", mb: 2 }}
                    >
                      Golf Coach Log is an all-in-one platform built for modern
                      golf coaches who want to organize, scale, and deliver a
                      better coaching experience from one place.
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ color: "#ccc", textAlign: "justify", mb: 2 }}
                    >
                      We bring together smart scheduling, swing analysis, lesson
                      management, tournaments, practice tracking, payments,
                      revenue tools, and pro shop capabilities into a single
                      connected system.
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ color: "#ccc", textAlign: "justify" }}
                    >
                      Our goal is simple: help coaches spend less time
                      organizing and more time coaching, building stronger
                      client relationships, and growing a more professional golf
                      business.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Box textAlign="center">
                <img
                  src="/logo-golfcoachlog.png"
                  alt="Golf Coach Log"
                  style={{
                    maxWidth: isMobile ? "83%" : "100%",
                    height: "auto",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          width: "100vw",
          position: "relative",
          mt: 4,
          mb: 4,
          py: 4,
          backgroundImage: "url(/fondo-hero.avif)",
          backgroundSize: "cover",
          backgroundPosition: isMobile ? `center ${scrollY * 0.3}px` : "center",
          backgroundAttachment: isMobile ? "scroll" : "fixed",
          textAlign: "right",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.7)",
            zIndex: 1,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            width: "100%",
            px: 2,
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography
            variant={isMobile ? "h6" : "h4"}
            fontWeight={600}
            sx={{
              color: "white",
              textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
              textAlign: "right",
            }}
          >
            We help golf coaches <span style={{ color: "#ffe037" }}>grow</span>{" "}
            smarter
          </Typography>
        </Container>
      </Box>

      <Box maxWidth="1200px" mx="auto" mt={2}>
        <Grid container spacing={3} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(10px)",
                  p: 0,
                  mt: isMobile ? -3 : 0,
                }}
              >
                <img
                  src="mision-empresa.png"
                  alt="Golf Coach Log Mission"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box px={{ xs: 2, sm: 0 }}>
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                    borderRadius: 3,
                    p: 3,
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" color="white" gutterBottom>
                      Mission
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#ccc", textAlign: "left", mb: 3 }}
                    >
                      To give golf coaches a complete platform that simplifies
                      operations, improves communication, and helps every
                      lesson, program, and player journey feel more organized,
                      measurable, and professional.
                    </Typography>

                    <Typography variant="h5" color="white" gutterBottom>
                      Vision
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#ccc", textAlign: "left" }}
                    >
                      To become the platform golf coaches trust to manage
                      scheduling, video feedback, tournaments, payments,
                      clinics, and business growth in one seamless ecosystem
                      built specifically for coaching.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Nosotros;
