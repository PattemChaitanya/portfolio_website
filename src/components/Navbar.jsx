import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { SiEbox } from "react-icons/si";
import { MenuItems } from "../constants/MenuItem";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography } from "@mui/material";

const Navbar = () => {
    const [mobileView, setMobileView] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AppBar component={"nav"} position="fixed" color="info" elevation={2}>
            <Box sx={{ width: "100%" }}>
                <Toolbar disableGutters>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 3 }}
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginLeft: "2rem",
                            marginRight: "2rem",
                            backgroundColor: 'background.dark',
                            color: 'text.primary',
                            width: "100%"
                        }}
                    >
                        <ScrollLink to="intro" smooth={true} duration={500}>
                            <Typography
                                sx={{
                                    minWidth: '150px',
                                    cursor: 'pointer',
                                    fontWeight: { sm: 800, xs: 600 },
                                    fontSize: { sm: '1.25rem', xs: '1.125rem' },
                                    letterSpacing: 'wide',
                                }}
                            >
                                {isMobile ? "@Chaitanya" : "@Chaitanya_Pattem"}
                            </Typography>
                        </ScrollLink>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, display: { md: 'none' } }}
                            onClick={() => setMobileView(!mobileView)}
                        >
                            <SiEbox />
                        </IconButton>
                        <AnimatePresence>
                            {mobileView && (
                                <motion.div
                                    initial={{ opacity: 0, y: -200 }}
                                    exit={{ opacity: 0, y: -200 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    sx={{ position: 'absolute', top: 0, left: 0, width: '100%', minHeight: '100vh' }}
                                >
                                    <Box sx={{ flexDirection: 'column', p: 2, bgcolor: 'background.paper' }}>
                                        <IconButton
                                            sx={{ position: 'absolute', top: 16, right: 16 }}
                                            onClick={() => setMobileView(!mobileView)}
                                        >
                                            <AiFillCloseCircle />
                                        </IconButton>
                                        <Box sx={{ my: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
                                            <IconButton href="https://www.linkedin.com/in/chaitanya-pattem-6742b8139/" target="_blank" rel="noopener noreferrer">
                                                <BsLinkedin />
                                            </IconButton>
                                            <IconButton href="https://github.com/ChaitanyaPattem" target="_blank" rel="noopener noreferrer">
                                                <BsGithub />
                                            </IconButton>
                                            <IconButton href="mailto:pattemchaitu@gmail.com">
                                                <HiMailOpen />
                                            </IconButton>
                                        </Box>
                                        <List>
                                            {MenuItems?.map((menuItem) => (
                                                <ListItem button key={menuItem.id} onClick={() => setMobileView(!mobileView)}>
                                                    <ScrollLink to={menuItem.url} smooth={true} duration={1000}>
                                                        <ListItemText primary={menuItem.name} />
                                                    </ScrollLink>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
                            <List sx={{ display: 'flex' }}>
                                {MenuItems?.map((menuItem) => (
                                    <ListItem button key={menuItem.id}>
                                        <ScrollLink to={menuItem.url} smooth={true} duration={1000}>
                                            <ListItemText primary={menuItem.name} />
                                        </ScrollLink>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
                            <IconButton href="https://www.linkedin.com/in/chaitanya-pattem-6742b8139/" target="_blank" rel="noopener noreferrer">
                                <BsLinkedin />
                            </IconButton>
                            <IconButton href="https://github.com/ChaitanyaPattem" target="_blank" rel="noopener noreferrer">
                                <BsGithub />
                            </IconButton>
                            <IconButton href="mailto:pattemchaitu@gmail.com">
                                <HiMailOpen />
                            </IconButton>
                        </Box>
                    </motion.div>
                </Toolbar>
            </Box>
        </AppBar>
    );
};

export default Navbar;
