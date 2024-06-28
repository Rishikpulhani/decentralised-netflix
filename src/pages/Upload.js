import React from 'react';
import { Button } from '@mui/material';

const Upload = ({ toggleUploadModal }) => {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={toggleUploadModal}>
        Upload Video
      </Button>
    </div>
  );
};

export default Upload;
