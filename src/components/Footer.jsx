import { Box, Container, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
  { href: "https://www.twitter.com/18BirdiesApp", label: "X", Icon: XIcon },
  { href: "https://www.youtube.com/18birdies", label: "YouTube", Icon: YouTubeIcon },
  { href: "https://www.instagram.com/18BirdiesApp", label: "Instagram", Icon: InstagramIcon },
  { href: "https://www.linkedin.com/company/18birdies", label: "LinkedIn", Icon: LinkedInIcon },
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
  return (
    <Box component="footer" className="footer-modern">
      <Container maxWidth="lg" className="footer-modern__container">
        <Box className="footer-modern__top">
          <nav className="footer-modern__nav" aria-label="Footer navigation">
            <FooterColumn title="Company" links={companyLinks} />
            <FooterColumn title="Features" links={featureLinks} />
            <FooterColumn title="Resources" links={resourceLinks} />
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
            © GolfCoachLog. All Rights Reserved. Designed by{" "}
            <a
              href="https://www.plataformas-web.cl"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.plataformas-web.cl
            </a>
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
      </Container>
    </Box>
  );
}

export default Footer;
