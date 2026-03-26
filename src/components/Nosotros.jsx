import { Box, Typography, Grid, Container, useTheme, useMediaQuery, Card, CardContent } from "@mui/material";
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
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    if (isMobile) {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isMobile]);

  useEffect(() => {
    const t = setTimeout(() => setSubrayadoActivo(true), 1000); // ⏱️ delay 1s
    return () => clearTimeout(t);
  }, []);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        minHeight: '100vh',
        width: '100%',
        py: 14,
        px: 0,
        pb: 3.5,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: isMobile ? 'url(fondo-blizz-2.webp)' : 'url(fondo-blizz-2.webp)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      {/* Título */}
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
              width: subrayadoActivo ? "100%" : "0%", // 👈 cambia dinámicamente
              height: "3px",
              borderRadius: "3px",
              background: "linear-gradient(90deg, #FF9800, #F57C00)",
              transition: "width 0.6s ease-out",
            },
          }}
        >
          {"Nosotros".split("").map((char, index) => (
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



      {/* Primera fila con animación */}
      <Box maxWidth="1200px" mx="auto">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box px={{ xs: 2, sm: 0 }}>
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <Card sx={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', borderRadius: 3, p: 2 }}>
                  <CardContent>
                    <Typography variant="h5" color="white" gutterBottom>
                      ¿Quiénes Somos?
                    </Typography>

                    <Typography variant="body2" sx={{ color: '#ccc', textAlign: 'justify', mb: 2 }}>
                      Somos una empresa especializada en soluciones de telecomunicaciones, infraestructura digital y conectividad segura, con más de 8 años de experiencia en proyectos para empresas e instituciones.
                    </Typography>

                    <Typography variant="body2" sx={{ color: '#ccc', textAlign: 'justify', mb: 2 }}>
                      Desarrollamos e implementamos redes estructuradas, fusiones de fibra óptica y obras conforme a la Ley de Ductos, asegurando cumplimiento normativo y eficiencia técnica en cada instalación.
                    </Typography>

                    <Typography variant="body2" sx={{ color: '#ccc', textAlign: 'justify' }}>
                      Acompañamos a nuestros clientes con soporte integral, asesoría técnica y mejoras continuas para garantizar que cada solución sea robusta, escalable y preparada para el futuro.
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
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <Box textAlign="center">
                <img
                  src="/logo-ingsnt.png"
                  alt="Logo"
                  style={{ maxWidth: isMobile ? '83%' : '100%', height: 'auto' }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          width: '100vw',
          position: 'relative',
          mt: 4,
          mb: 4,
          py: 4,
          backgroundImage: 'url(/developer-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: isMobile ? `center ${scrollY * 0.3}px` : 'center',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
          textAlign: 'right',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            width: '100%',
            px: 2,
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Typography
            variant={isMobile ? "h6" : "h4"}
            fontWeight={600}
            sx={{
              color: 'white',
              textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
              textAlign: 'right',
            }}
          >
            Ayudamos a hacer <span style={{ color: '#ffe037' }}>crecer</span> tu negocio
          </Typography>
        </Container>
      </Box>



      {/* Segunda fila con animación */}
      <Box maxWidth="1200px" mx="auto" mt={2}>
        <Grid container spacing={3} alignItems="flex-start">
          {/* Imagen a la izquierda con animación */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }} // 👈 mejora el comportamiento en scroll
            >
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)',
                  p: 0,
                  mt: isMobile ? -3 : 0
                }}
              >
                <img
                  src="mision-empresa.png"
                  alt="Logo React"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </Box>
            </motion.div>
          </Grid>

          {/* Misión + Visión a la derecha con animación */}
          <Grid item xs={12} md={6}>
            <Box px={{ xs: 2, sm: 0 }}>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }} // 👈 mejora el comportamiento en scroll
              >
                <Card sx={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', borderRadius: 3, p: 3 }}>
                  <CardContent>
                    <Typography variant="h5" color="white" gutterBottom>
                      Misión
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#ccc', textAlign: 'left', mb: 3 }}>
                      Entregar soluciones integrales en infraestructura de telecomunicaciones, conectividad y tecnologías de la información, garantizando instalaciones seguras, normativas y preparadas para los desafíos del futuro digital.
                    </Typography>

                    <Typography variant="h5" color="white" gutterBottom>
                      Visión
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#ccc', textAlign: 'left' }}>
                      Ser líderes en implementación de redes estructuradas, fibra óptica y cumplimiento de la Ley de Ductos, posicionándonos como un referente confiable en transformación tecnológica e infraestructura crítica a nivel nacional.
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
