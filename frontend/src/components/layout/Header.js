import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box p={2} bgcolor="#e3f2fd" borderBottom="1px solid #ccc">
      <Typography variant="h6">Dashboard</Typography>
    </Box>
  );
};

export default Header;
