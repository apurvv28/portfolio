"use client"
import { Box, Typography, Container, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';

const experiences = [
  {
    period: '2021-Present',
    position: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    description: 'Leading frontend team in building responsive web applications.'
  },
  {
    period: '2019-2021',
    position: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    description: 'Developed and maintained multiple client projects.'
  },
  {
    period: '2018-2019',
    position: 'Junior Developer',
    company: 'StartUp Hub',
    description: 'Assisted in building MVP products for startups.'
  }
];

export default function Experience() {
  return (
    <Box id="experience" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h3" align="center" fontWeight="bold" mb={6}>
          Professional Experience
        </Typography>
        
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box sx={{ 
                display: 'flex', 
                mb: 4,
                position: 'relative',
                pl: 4
              }}>
                <Box sx={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bgcolor: 'primary.main',
                  borderRadius: '50%',
                  width: 24,
                  height: 24,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <WorkIcon sx={{ color: 'white', fontSize: 16 }} />
                </Box>
                
                <Box sx={{ 
                  bgcolor: 'background.default', 
                  p: 3, 
                  borderRadius: 2,
                  boxShadow: 2,
                  width: '100%'
                }}>
                  <Typography variant="h6" color="primary.main" fontWeight="bold">
                    {exp.period}
                  </Typography>
                  <Typography variant="h5" fontWeight="bold" mt={1}>
                    {exp.position}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" mt={1}>
                    {exp.company}
                  </Typography>
                  <Typography variant="body1" mt={2}>
                    {exp.description}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}