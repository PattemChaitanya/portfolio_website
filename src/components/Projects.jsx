import LeftView from "./projectType/LeftView";
import RightView from "./projectType/RightView";
import { ProjectList } from "../constants/ProjectList";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Box, Typography, Container } from '@mui/material';

const Projects = () => {
    const refHeading = useRef(null);
    const inViewHeading = useInView(refHeading);

    const variants1 = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <Container sx={{ py: 10 }} id="projects">
            <Box ref={refHeading} sx={{ display: 'flex', alignItems: 'center', gap: 2, pt: 10 }}>
            <motion.div
                ref={refHeading}
                variants={variants1}
                initial="initial"
                animate={inViewHeading ? "animate" : "initial"}
                transition={{ duration: 0.6 }}
            >
                <Typography variant="h1" component="h1" sx={{ color: 'secondary',fontSize: 48, fontWeight: 800 }}>
                    Latest Projects
                </Typography>
                </motion.div>
                <Box sx={{ flexGrow: 1, mt: 0.5, height: '4px', backgroundColor: 'text.primary' }} />
                </Box>
            {/* Projects */}
            {ProjectList?.map((project, i) => {
                return project.id % 2 === 0 ? (
                    <LeftView key={i} {...project} />
                ) : (
                    <RightView key={i} {...project} />
                );
            })}
        </Container>
    );
};

export default Projects;
