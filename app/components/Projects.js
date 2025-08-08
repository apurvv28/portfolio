"use client"
import { useState } from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Full-featured online store with payment integration',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool',
    technologies: ['Next.js', 'Firebase', 'Material UI']
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather data visualization',
    technologies: ['React', 'D3.js', 'Weather API']
  },
  {
    title: 'Fitness Tracker',
    description: 'Mobile-first workout tracking application',
    technologies: ['React Native', 'Redux', 'GraphQL']
  }
];

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  
  const handleNext = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <Box id="projects" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h3" align="center" fontWeight="bold" mb={6}>
          Projects
        </Typography>
        
        <Box sx={{ maxWidth: 800, mx: 'auto', position: 'relative' }}>
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ 
              bgcolor: 'background.default', 
              p: 4, 
              borderRadius: 2,
              boxShadow: 3,
              textAlign: 'center'
            }}>
              <Box sx={{ 
                height: 300, 
                bgcolor: 'grey.200', 
                borderRadius: 1,
                mb: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Typography>Project Image</Typography>
              </Box>
              
              <Typography variant="h4" fontWeight="bold" mb={2}>
                {projects[currentProject].title}
              </Typography>
              
              <Typography variant="body1" mb={3}>
                {projects[currentProject].description}
              </Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {projects[currentProject].technologies.map((tech, index) => (
                  <Box key={index} sx={{ 
                    bgcolor: 'primary.main', 
                    color: 'white', 
                    px: 2, 
                    py: 1, 
                    borderRadius: 20,
                    fontSize: 14
                  }}>
                    {tech}
                  </Box>
                ))}
              </Box>
            </Box>
          </motion.div>
          
          <IconButton 
            onClick={handlePrev}
            sx={{ 
              position: 'absolute', 
              left: -60, 
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'background.paper',
              boxShadow: 3
            }}
          >
            <KeyboardArrowLeft fontSize="large" />
          </IconButton>
          
          <IconButton 
            onClick={handleNext}
            sx={{ 
              position: 'absolute', 
              right: -60, 
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'background.paper',
              boxShadow: 3
            }}
          >
            <KeyboardArrowRight fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}