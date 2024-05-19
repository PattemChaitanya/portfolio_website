/* eslint-disable react/prop-types */
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Box, Grid, Typography, Link, Tooltip } from '@mui/material';

const RightView = ({ name, description, img, tech, source, demo }) => {
    const refContent = useRef(null);
    const inViewContent = useInView(refContent);
    const [isMouseOver, setIsMouseOver] = useState(false);

    return (
        <Grid container spacing={2} sx={{ mt: { xs: '80px', lg: '120px' }, px: { md: '10' } }}>
            <Grid item xs={12} lg={7}>
                <motion.div
                    ref={refContent}
                    initial={{ opacity: 0, filter: "blur(6px) brightness(50%)" }}
                    animate={
                        inViewContent
                            ? { opacity: 1, filter: "blur(0px) brightness(100%)" }
                            : { opacity: 1, filter: "blur(6px) brightness(50%)" }
                    }
                    transition={{ duration: 1 }}
                    onMouseEnter={() => setIsMouseOver(true)}
                    onMouseLeave={() => setIsMouseOver(false)}
                    sx={{
                        filter: isMouseOver ? 'brightness(100%)' : 'brightness(50%)',
                        transition: 'all ease-in-out 700ms',
                        '&:hover': {
                            transform: 'scale(1.05)',
                            zIndex: 20,
                        },
                    }}
                >
                    <Link href={demo} target="_blank" rel="noreferrer">
                        <Box
                            component="img"
                            src={img}
                            alt={name}
                            sx={{
                                borderRadius: 2,
                                minHeight: '100%',
                                cursor: 'pointer',
                                boxShadow: 3,
                            }}
                        />
                    </Link>
                </motion.div>
            </Grid>
            <Grid item xs={12} lg={5}>
                <motion.div
                    ref={refContent}
                    initial={{ opacity: 0, x: -50 }}
                    animate={
                        inViewContent
                            ? { opacity: 1, x: 0 }
                            : { opacity: 1, x: -50 }
                    }
                    transition={{ duration: 1 }}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        alignItems: 'flex-end',
                        position: 'relative',
                    }}
                >
                    {/* project tagline */}
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 600,
                            width: '100%',
                            textAlign: 'right',
                            py: 2,
                            px: 3,
                            transition: 'all ease-in-out 300ms',
                            ...(isMouseOver && { color: 'text.secondary' }),
                        }}
                    >
                        {name}
                    </Typography>
                    {/* description absolute */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '40px',
                            right: 0,
                            width: '100%',
                            maxWidth: '500px',
                            borderRadius: 2,
                            bgcolor: 'background.paper',
                            p: 2,
                            boxShadow: 1,
                            mt: 1,
                            transition: 'all ease-in-out 300ms',
                            ...(isMouseOver && { color: 'text.secondary' }),
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{ cursor: 'pointer' }}
                        >
                            {description}
                        </Typography>
                    </Box>
                    {/* tech stack */}
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2,
                            alignItems: 'center',
                            mt: 4,
                            typography: 'caption',
                            color: 'text.primary',
                        }}
                    >
                        {tech?.map((item, i) => (
                            <Typography key={i}>{item}</Typography>
                        ))}
                    </Box>
                    {/* links */}
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 8,
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            width: '100%',
                            mt: 5,
                            typography: 'body2',
                            fontWeight: 500,
                        }}
                    >
                        <Tooltip title="Source Code" placement="top" arrow>
                            <Link href={source} target="_blank" rel="noreferrer">
                                <GitHubIcon />
                            </Link>
                        </Tooltip>
                        {demo && (
                            <Tooltip title="Demo" placement="top" arrow>
                                <Link href={demo} target="_blank" rel="noreferrer">
                                    <LaunchIcon />
                                </Link>
                            </Tooltip>
                        )}
                    </Box>
                </motion.div>
            </Grid>
        </Grid>
    );
};

export default RightView;
