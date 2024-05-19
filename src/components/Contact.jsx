import { useForm, ValidationError } from "@formspree/react";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BsGithub } from "react-icons/bs";
import { Box, Container, Grid, Typography, TextField, Button, Link, Stack } from '@mui/material';

const Contact = () => {
    const refHeading = useRef(null);
    const inViewHeading = useInView(refHeading);
    const refContent = useRef(null);
    const inViewContent = useInView(refContent);

    const [show, setShow] = useState(false);
    const formId = "myForm";
    const [state, handleSubmit] = useForm(formId);
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const variants1 = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (state.succeeded) {
            setShow(true);
            setFormData({
                email: "",
                subject: "",
                message: "",
            });
        }
    }, [state.succeeded]);

    return (
        <Container sx={{ pt: 10 }} id="contact">
            <Box ref={refHeading} sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 10 }}>
            <motion.div
                ref={refHeading}
                variants={variants1}
                initial="initial"
                animate={inViewHeading ? "animate" : "initial"}
                transition={{ duration: 0.6 }}
            >
                <Typography variant="h1" component="h1" sx={{ fontWeight: 800, color: 'secondary' }}>
                    Get In Touch
                </Typography>
                </motion.div>
                <Box sx={{ flexGrow: 1, mt: 1, height: '4px', backgroundColor: 'text.primary' }} />
                </Box>
            <Grid container spacing={4} sx={{ mt: 4, py: 12 }}>
                <Grid item xs={12} md={6}>
                    <motion.div
                        ref={refContent}
                        initial={{ opacity: 0, y: -50 }}
                        animate={
                            inViewContent
                                ? { opacity: 1, y: 0 }
                                : { opacity: 1, y: -50 }
                        }
                        transition={{ duration: 1 }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'text.primary', my: 2 }}>
                            Let&apos;s Connect
                        </Typography>
                        <Typography sx={{ color: 'text.primary', maxWidth: 'md' }}>
                            I&apos;m actively seeking new opportunities, and I
                            welcome your messages. Whether you have inquiries or
                            simply want to say hello, feel free to reach out. <br />
                            I&apos;ll try my best to get back to you!
                        </Typography>
                        <Stack direction="row" spacing={5} sx={{ mt: 6 }}>
                            <Link
                                href="https://github.com/aashish-dhiman/"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ position: 'relative', '&:hover': { transform: 'translateY(-2px)' }, transition: 'all 0.5s ease-in-out' }}
                            >
                                <BsGithub size={28} />
                                <Typography variant="caption" sx={{ position: 'absolute', top: 40, left: -12, opacity: 0, '&:hover': { opacity: 1 } }}>
                                    Github
                                </Typography>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/aashish-dhiman/"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ position: 'relative', '&:hover': { transform: 'translateY(-2px)' }, transition: 'all 0.5s ease-in-out' }}
                            >
                                <Box component="img" src={linkedin} alt="Linkedin Icon" />
                                <Typography variant="caption" sx={{ position: 'absolute', top: 40, left: -16, opacity: 0, '&:hover': { opacity: 1 } }}>
                                    Linkedin
                                </Typography>
                            </Link>
                            <Link
                                href="https://twitter.com/aashish_dhimaan"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ position: 'relative', '&:hover': { transform: 'translateY(-2px)' }, transition: 'all 0.5s ease-in-out' }}
                            >
                                <Box component="img" src={twitter} alt="Twitter Icon" />
                                <Typography variant="caption" sx={{ position: 'absolute', top: 40, left: -12, opacity: 0, '&:hover': { opacity: 1 } }}>
                                    Twitter
                                </Typography>
                            </Link>
                        </Stack>
                    </motion.div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <motion.div
                        ref={refContent}
                        initial={{ opacity: 0, y: -50 }}
                        animate={
                            inViewContent
                                ? { opacity: 1, y: 0 }
                                : { opacity: 1, y: -50 }
                        }
                        transition={{ duration: 1 }}
                        sx={{ mt: { xs: 10, md: 0 } }}
                    >
                        {/* after form submission greetings */}
                        {show ? (
                            <Box sx={{ mt: 6, width: '80%' }}>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    Thank you for reaching out! I appreciate your
                                    interest and will get back to you as soon as
                                    possible. In the meantime, feel free to explore
                                    more of my portfolio.
                                </Typography>
                            </Box>
                        ) : (
                            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Box sx={{ mb: 6 }}>
                                    <TextField
                                        label="Your email"
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        fullWidth
                                        sx={{ backgroundColor: '#18191E', input: { color: 'text.primary' } }}
                                        placeholder="abc@gmail.com"
                                        variant="filled"
                                    />
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                    />
                                </Box>
                                <Box sx={{ mb: 6 }}>
                                    <TextField
                                        label="Subject"
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        fullWidth
                                        sx={{ backgroundColor: '#18191E', input: { color: 'text.primary' } }}
                                        placeholder="Just saying hi"
                                        variant="filled"
                                    />
                                    <ValidationError
                                        prefix="Subject"
                                        field="subject"
                                        errors={state.errors}
                                    />
                                </Box>
                                <Box sx={{ mb: 6 }}>
                                    <TextField
                                        label="Message"
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        sx={{ backgroundColor: '#18191E', input: { color: 'text.primary' } }}
                                        placeholder="Let's talk about..."
                                        variant="filled"
                                    />
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                    />
                                </Box>
                                <Button
                                    type="submit"
                                    disabled={state.submitting}
                                    variant="outlined"
                                    color="primary"
                                    fullWidth
                                    sx={{ py: 1, borderColor: 'text.primary', color: 'text.primary', '&:hover': { backgroundColor: 'action.hover' } }}
                                >
                                    Send Message
                                </Button>
                            </Box>
                        )}
                    </motion.div>
                </Grid>
            </Grid>

            <Box component="footer" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 6 }}>
                <Typography sx={{ color: 'text.secondary' }}>
                    All Rights Reserved © {new Date().getFullYear()} - Aashish Dhiman
                </Typography>
            </Box>
        </Container>
    );
};

export default Contact;
