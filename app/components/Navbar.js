"use client"
import React, { useState, useEffect, useContext } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  useScrollTrigger, 
  useMediaQuery,
  Switch,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link as ScrollLink } from 'react-scroll';
import { ThemeContext } from '../layout';

const sections = [
  { id: 'hero', name: 'Home' },
  { id: 'education', name: 'Education' },
  { id: 'experience', name: 'Experience' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:900px)');
  const trigger = useScrollTrigger({ threshold: 100 });
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <AppBar position="fixed" sx={{ 
      bgcolor: trigger ? 'background.paper' : 'transparent', 
      boxShadow: trigger ? 1 : 'none',
      transition: 'all 0.3s ease'
    }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {!isMobile ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {sections.map((section) => (
              <ScrollLink
                key={section.id}
                to={section.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Box sx={{ 
                  mx: 2, 
                  py: 2, 
                  cursor: 'pointer', 
                  color: trigger ? 'text.primary' : 'common.white',
                  fontWeight: 500,
                  '&:hover': { color: 'primary.main' }
                }}>
                  {section.name}
                </Box>
              </ScrollLink>
            ))}
          </Box>
        ) : (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: trigger ? 'text.primary' : 'common.white' }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Theme Toggle Button */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={toggleTheme} color="inherit">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          {!isMobile && (
            <Typography variant="body2" sx={{ ml: 1 }}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Typography>
          )}
        </Box>
      </Toolbar>

      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ '& .MuiDrawer-paper': { bgcolor: 'background.paper' } }}
      >
        <List>
          {sections.map((section) => (
            <ListItem key={section.id} disablePadding>
              <ScrollLink
                to={section.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleDrawerToggle}
                style={{ width: '100%' }}
              >
                <Box sx={{ 
                  py: 2, 
                  px: 4, 
                  width: '100%', 
                  textAlign: 'center',
                  '&:hover': { bgcolor: 'action.hover' }
                }}>
                  {section.name}
                </Box>
              </ScrollLink>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <Box 
              onClick={() => {
                toggleTheme();
                handleDrawerToggle();
              }}
              sx={{ 
                py: 2, 
                px: 4, 
                width: '100%', 
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': { bgcolor: 'action.hover' }
              }}
            >
              {darkMode ? <Brightness7Icon sx={{ mr: 1 }} /> : <Brightness4Icon sx={{ mr: 1 }} />}
              <Typography>Toggle Theme</Typography>
            </Box>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}