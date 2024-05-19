/* eslint-disable react/prop-types */
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Box, Typography, Link, Stack, Tooltip } from '@mui/material';

const LeftView = ({ name, description, img, tech, source, demo }) => {
    const refContent = useRef(null);
    const inViewContent = useInView(refContent);
    const [isMouseOver, setIsMouseOver] = useState(false);

    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: { lg: 'repeat(12, 1fr)' }, mt: { xs: '80px', lg: '120px' }, px: { md: '10' } }}>
            <motion.div
                ref={refContent}
                initial={{ opacity: 0, x: -50 }}
                animate={
                    inViewContent
                        ? { opacity: 1, x: 0 }
                        : { opacity: 1, x: -50 }
                }
                transition={{ duration: 1 }}
                sx={{ gridColumn: { xs: 'span 12', lg: 'span 5' }, display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'flex-start', position: 'relative', order: { xs: 2, lg: 1 } }}
            >
                {/* project tagline */}
                <Box sx={{ typography: 'h3', fontWeight: 600, width: '100%', textAlign: 'left', py: { xs: 2, lg: 0 }, px: 3, transition: 'all ease-in-out 300ms', ...(isMouseOver && { color: 'text.secondary' }) }}>
                    <Typography variant="h3">{name}</Typography>
                </Box>
                {/* description absolute */}
                <Box sx={{ position: { lg: 'absolute' }, top: { lg: '40px' }, left: 0, zIndex: 10, width: '100%', maxWidth: { lg: '500px' }, p: 3, borderRadius: 2, bgcolor: 'background.paper', py: { md: 2 }, boxShadow: 1, mt: 1, transition: 'all ease-in-out 300ms', ...(isMouseOver && { color: 'text.secondary' }) }}>
                    <Typography variant="body1" sx={{ cursor: 'pointer' }}>
                        {description}
                    </Typography>
                </Box>
                {/* tech stack */}
                <Stack direction="row" spacing={{ xs: 2, md: 3 }} sx={{ mt: { xs: 4, lg: '200px' }, typography: { xs: 'caption', md: 'body2' }, color: 'text.primary' }}>
                    {tech?.map((item, i) => (
                        <Typography key={i}>{item}</Typography>
                    ))}
                </Stack>
                {/* links */}
                <Stack direction="row" spacing={5} sx={{ mt: 5, typography: 'body2', fontWeight: 500, justifyContent: 'flex-start', width: '100%' }}>
                    <Tooltip title="Source Code" placement="top" arrow>
                        <Link href={source} target="_blank" rel="noreferrer" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', animation: 'bounce 1s infinite' }}>
                            <GitHubIcon />
                        </Link>
                    </Tooltip>
                    {demo && (
                        <Tooltip title="Demo" placement="top" arrow>
                            <Link href={demo} target="_blank" rel="noreferrer" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', animation: 'bounce 1s infinite' }}>
                                <LaunchIcon />
                            </Link>
                        </Tooltip>
                    )}
                </Stack>
            </motion.div>
            {/* project image */}
            <motion.div
                ref={refContent}
                initial={{ opacity: 0, filter: "blur(6px)" }}
                animate={
                    inViewContent
                        ? { opacity: 1, filter: "blur(0px)" }
                        : { opacity: 1, filter: "blur(6px)" }
                }
                transition={{ duration: 1 }}
                sx={{ gridColumn: { xs: 'span 12', lg: 'span 7' }, order: { xs: 1, lg: 2 }, transition: 'all ease-in-out 700ms', '&:hover': { transform: 'scale(1.05)', zIndex: 20 }, boxShadow: 2 }}
                onMouseEnter={() => setIsMouseOver(true)}
                onMouseLeave={() => setIsMouseOver(false)}
            >
                <Link href={demo} target="_blank" rel="noreferrer">
                    <Box component="img" src={img} alt={name} loading="lazy" sx={{ borderRadius: 1, minHeight: '100%', cursor: 'pointer' }} />
                </Link>
            </motion.div>
        </Box>
    );
};

export default LeftView;
