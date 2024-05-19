import { useState,  useRef, Suspense } from "react";
// import TabbedComponent from "./TabbedComponent";
import { Skills } from "../constants/Skills";
import { motion, useInView } from "framer-motion";
import Loading from "./Loading";
import { Box, Typography, Container, Grid, Tab, Tabs, AppBar } from '@mui/material';

const About = () => {
    const [tab, setTab] = useState("skills");
    // const [, startTransition] = useTransition();
    const refHeading = useRef(null);
    const refContent = useRef(null);
    const inViewHeading = useInView(refHeading);
    const inViewContent = useInView(refContent, { once: true });

    // function selectTab(nextTab) {
    //     startTransition(() => {
    //         setTab(nextTab);
    //     });
    // }
    const variants1 = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <Container id="about" height="100vh">
            <Box ref={refHeading} sx={{ display: 'flex', alignItems: 'center', gap: 2, pt: 10 }}>
                <motion.div
                    variants={variants1}
                    initial="initial"
                    animate={inViewHeading ? "animate" : "initial"}
                    transition={{ duration: 0.6 }}
                >
                    <Typography variant="h1" component="h1" sx={{ fontWeight: 800, fontSize: 48, color: 'secondary' }}>
                        About Me
                    </Typography>
                </motion.div>
                <Box sx={{ flexGrow: 1, mt: 1, height: '4px', backgroundColor: 'text.primary' }} />
            </Box>
            <Grid container spacing={6} alignItems="center" justifyContent="space-between">
                <Grid item xs={12} md={5}>
                    <motion.div
                        ref={refContent}
                        initial={{
                            opacity: 0,
                            x: -100,
                            scale: 0.8,
                            filter: "blur(6px)",
                        }}
                        animate={
                            inViewContent
                                ? {
                                    opacity: 1,
                                    x: 0,
                                    scale: 1,
                                    filter: "blur(0px)",
                                }
                                : { opacity: 1, x: -100, scale: 0.8 }
                        }
                        transition={{ duration: 0.8 }}
                    >
                        <Suspense fallback={<Loading />}>
                            <img
                                src="/images/about.png"
                                alt="meme"
                                loading="lazy"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Suspense>
                    </motion.div>
                </Grid>
                <Grid item xs={12} md={7}>
                    <motion.div
                        ref={refContent}
                        initial={{ opacity: 0, x: 100, scale: 0.8 }}
                        animate={
                            inViewContent
                                ? { opacity: 1, x: 0, scale: 1 }
                                : { opacity: 0, x: 100, scale: 0.8 }
                        }
                        transition={{ duration: 0.8 }}
                    >
                        <Typography variant="body1" sx={{ color: 'text.primary', p: 4 }}>
                            I am a passionate MERN Stack Developer and a Problem Solver, dedicated to creating impactful codes that thrive on the internet.
                            <br />
                            I have experience working with C, C++, JavaScript, TypeScript, Python, HTML, CSS, React.js, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, and Git.
                            <br />I am a quick learner and I am always looking to expand my knowledge and skill set.
                        </Typography>

                        <AppBar position="static">
                            <Tabs value={tab} onChange={(event, newValue) => setTab(newValue)} aria-label="simple tabs example">
                                <Tab label="Skills" />
                                <Tab label="Education" />
                                <Tab label="Work Experience" />
                            </Tabs>
                        </AppBar>
                        <Box sx={{ mt: 8, pl: 4, maxWidth: '100%', minHeight: '140px', display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                            {tab === "skills" ? (
                                Skills?.map((skill, i) => (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        key={i}
                                        sx={{ position: 'relative', '&:hover': { transform: 'translateY(-4px)' }, transition: 'all 0.5s ease-in-out', cursor: 'pointer' }}
                                    >
                                        <img
                                            src={skill.img}
                                            alt={skill.description}
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                        <Typography variant="caption" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'grey.800', color: 'text.primary', borderRadius: '4px', p: 1, display: 'none', '&:hover': { display: 'block' } }}>
                                            {skill.description}
                                        </Typography>
                                    </motion.div>
                                ))
                            ) : tab === "education" ? (
                                <ul>
                                    <motion.li
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                    >
                                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                            Gautam Buddha University, Greater Noida
                                        </Typography>
                                        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Box sx={{ width: '15px', height: '2px', backgroundColor: 'text.primary' }} />
                                            <Typography variant="body1">
                                                Bachelor of Technology in Computer Science & Engineering
                                                <br />
                                                2021-2025
                                            </Typography>
                                        </Box>
                                    </motion.li>
                                </ul>
                            ) : (
                                <ul>
                                    <motion.li
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                    >
                                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                            SDE Intern <Typography variant="body2" component="span" sx={{ fontWeight: 500 }}> - FinGPT</Typography>
                                        </Typography>
                                        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Box sx={{ width: '15px', height: '2px', backgroundColor: 'text.primary' }} />
                                            <Typography variant="body1">
                                                Working on a trading platform for a stealth-mode startup based in California, USA. Integrating AI capabilities and enhancing user experience of the platform using Next.js, TypeScript, NextAuth, Tailwind CSS, React Query and Open AI.
                                            </Typography>
                                        </Box>
                                        <Box sx={{ ml: 6, mt: 1, color: 'grey.500', fontWeight: 'medium', display: 'flex', justifyContent: 'space-between', maxWidth: '95%' }}>
                                            <Typography variant="body2">
                                                Jan 2024 - Present
                                            </Typography>
                                            <Typography variant="body2">
                                                Remote
                                            </Typography>
                                        </Box>
                                    </motion.li>
                                    {/* Additional work experiences would be listed here */}
                                </ul>
                            )}
                        </Box>
                    </motion.div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;
