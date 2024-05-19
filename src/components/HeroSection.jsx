import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
import { useRef, Suspense } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Box, Button, Typography, CircularProgress, Grid } from '@mui/material';

const HeroSection = () => {
  const refContent = useRef(null);
  const inViewContent = useInView(refContent, { once: true });

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center" id="intro" height="100vh">
      {/* Image section */}
      <Grid item xs={12} sm={5} sx={{ mt: '1rem', position: 'relative', height: '200px', width: '100%' }}>
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, x: 100, scale: 0.8, filter: "blur(6px)" }}
          animate={inViewContent ? { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8 }}
          style={{ height: '100%', width: '100%' }}
        >
          <Suspense fallback={<CircularProgress />}>
            <Box
              component="img"
              src="/images/heroImg.png"
              alt="Hero Icon"
              loading="lazy"
              sx={{
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
                top: '50%',
                left: '50%',
                width: { xs: '300px', sm: '400px' },
                height: { xs: '300px', sm: '400px' }
              }}
            />
          </Suspense>
        </motion.div>
      </Grid>
      {/* Intro section */}
      <Grid item xs={12} sm={7}>
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={inViewContent ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h1" color="secondary" gutterBottom sx={{ fontSize: 60 }}>
            Hi, I&apos;m <Typography component="span" color="secondary.light" sx={{ fontSize: 60 }}>Chaitanya Pattem</Typography>, a <Typography component="span" color="secondary.light" sx={{ fontSize: 60 }}>self-taught</Typography> Software Developer.
          </Typography>

          <TypeAnimation
            sequence={[
              500,
              "I'm a MERN Stack Developer.",
              1000,
              "I build interactive UI using React and Next.js.",
              1000,
              "I convert designs into Modern UI.",
              1000,
              "I make ideas & things alive.",
              500,
            ]}
            style={{ color: "#000"}}
            speed={50}
            className="MuiTypography-h6"
            repeat={Infinity}
          />

          <Typography variant="body1" color="textSecondary" paragraph>
            Stick around to see some of my work.
          </Typography>
          <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems="center" gap={2}>
            <ScrollLink to="contact" smooth={true} duration={1000}>
              <Button variant="contained" color="primary">
                Hire Me
              </Button>
            </ScrollLink>
            <Button
              href="https://drive.google.com/file/d/1wEDlamry-sl0mYrE4tbxitZaHy-s7jSX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              color="inherit"
            >
              Download CV
            </Button>
          </Box>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
