import { Box, Container, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./css/Footer.css";

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

function Footer() {
  return (
    <Box component="footer" className="footer-modern">
      <Container maxWidth="lg" className="footer-modern__container">
        <Box className="footer-modern__top">
          <Box className="footer-modern__brand">
            <Typography component="h2" className="footer-modern__brand-title">
              GolfCoachLog
            </Typography>
            <Typography component="p" className="footer-modern__brand-copy">
              Modern tools for coaches who want to stay organized, connected and focused on their players.
            </Typography>
          </Box>

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
            Copyright GolfCoachLog. All Rights Reserved.
          </Typography>

          <nav aria-label="Legal navigation">
            <ul className="footer-modern__legal">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
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
    </Box>
  );
}

export default Footer;
