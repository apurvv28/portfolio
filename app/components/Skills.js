"use client"
import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', level: 95 },
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'Material UI', level: 90 },
  { name: 'CSS/SCSS', level: 85 },
  { name: 'TypeScript', level: 75 },
  { name: 'GraphQL', level: 70 },
];

export default function Skills() {
  return (
    <Box id="skills" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container>
        <Typography variant="h3" align="center" fontWeight="bold" mb={6}>
          Skills
        </Typography>
        
        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box sx={{ 
                  textAlign: 'center',
                  p: 3,
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  boxShadow: 3,
                  height: '100%'
                }}>
                  <Box sx={{ 
                    position: 'relative',
                    width: 120,
                    height: 120,
                    mx: 'auto',
                    mb: 2
                  }}>
                    <svg viewBox="0 0 36 36" width="100%" height="100%">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#eee"
                        strokeWidth="3"
                      />
                      <motion.path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#3f51b5"
                        strokeWidth="3"
                        strokeDasharray={`${skill.level}, 100`}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: skill.level / 100 }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </svg>
                    <Typography variant="h5" sx={{ 
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontWeight: 'bold'
                    }}>
                      {skill.level}%
                    </Typography>
                  </Box>
                  <Typography variant="h6" fontWeight="bold">
                    {skill.name}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}