import { useState } from "react";
import { Alert, Box, Container, Snackbar, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import "./css/Footer.css";

const companyLinks = [
  { label: "About Us", href: "/nosotros" },
  { label: "Our Mission", href: "/nosotros" },
  { label: "Featured In", href: "/nosotros" },
  { label: "Shop", href: "/catalogo" },
];

const featureLinks = [
  { label: "Digital Caddy", href: "/servicios" },
  { label: "School", href: "/servicios" },
  { label: "AI Swing Analyzer", href: "/servicios" },
  { label: "Community", href: "/servicios" },
  { label: "Tournaments", href: "/servicios" },
  { label: "Golf Courses", href: "/servicios" },
];

const resourceLinks = [
  { label: "Contact Us", href: "mailto:support@golfcoachlog.com" },
  { label: "Become an Ambassador", href: "/contacto" },
  { label: "FAQs", href: "/contacto" },
  { label: "Premium Membership", href: "/servicios" },
];

const legalLinks = [
  { label: "Legal Information", href: "/contacto" },
  { label: "Terms of Service", href: "/contacto" },
  { label: "Privacy Policy", href: "/contacto" },
];

const socials = [
  { href: "https://www.facebook.com/18birdies", label: "Facebook", Icon: FacebookIcon },
  { href: "https://www.youtube.com/18birdies", label: "YouTube", Icon: YouTubeIcon },
  { href: "https://www.instagram.com/18BirdiesApp", label: "Instagram", Icon: InstagramIcon },
];

function FooterColumn({ title, links }) {
  return (
    <ul className="footer-modern__links">
      <li>
        <Typography component="h3" className="footer-modern__heading">
          {title}
        </Typography>
      </li>
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  );
}

function Footer() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleComingSoon = (event) => {
    event.preventDefault();
    setOpenSnackbar(true);
  };

  return (
    <Box component="footer" className="footer-modern">
      <Container maxWidth="lg" className="footer-modern__container">
        <Box className="footer-modern__top">
          <nav className="footer-modern__nav" aria-label="Footer navigation">
            <ul className="footer-modern__links">
              <li>
                <Typography component="h3" className="footer-modern__heading">
                  Company
                </Typography>
              </li>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={handleComingSoon}>{link.label}</a>
                </li>
              ))}
            </ul>

            <ul className="footer-modern__links">
              <li>
                <Typography component="h3" className="footer-modern__heading">
                  Features
                </Typography>
              </li>
              {featureLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={handleComingSoon}>{link.label}</a>
                </li>
              ))}
            </ul>

            <ul className="footer-modern__links">
              <li>
                <Typography component="h3" className="footer-modern__heading">
                  Resources
                </Typography>
              </li>
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={handleComingSoon}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <Box className="footer-modern__social">
            <Typography component="h3" className="footer-modern__social-title">
              Follow Us
            </Typography>
            <ul className="footer-modern__social-list">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" title={label}>
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </Box>
        </Box>

        <Box className="footer-modern__bottom">
          <Typography component="div" className="footer-modern__copyright">
            © GolfCoachLog. All Rights Reserved.
          </Typography>

          <nav aria-label="Legal navigation">
            <ul className="footer-modern__legal">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={handleComingSoon}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </Box>

        <Box className="footer-modern__credits">
          <Typography component="div" className="footer-modern__credits-text">
            Designed by{" "}
            <a
              href="https://www.plataformas-web.cl"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.plataformas-web.cl
            </a>
          </Typography>
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
    </Box>
  );
}

export default Footer;
