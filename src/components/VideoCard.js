import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/video/${video.id}`);
  };

  return (
    <Card style={{display: "flex", justifyContent: "space-between", flexDirection: "column", width: "20rem", overflow: "hidden"}} onClick={handleClick}>
      <div>
      <CardMedia component="img" height="140" image={video.primaryThumbnail} alt={video.title} />
      <CardContent>
        <Typography variant="h5">{video.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {video.description}
        </Typography>
      </CardContent>
      </div>
      
      <CardContent style={{padding: "0px"}}>
      <Typography style={{marginLeft: "16px", padding: "2px", borderRadius: "5px" ,backgroundColor: "lightblue"}} variant='caption' >
          {video.label}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
