// VideoPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import { fetchVideos } from '../data';

const VideoPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videos = await fetchVideos();
        const selectedVideo = videos.find(v => v.id === id);
        setVideo(selectedVideo);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchData();
  }, [id]); // Fetch data whenever id changes

  if (!video) {
    return <p>Loading...</p>; // Optional: Handle loading state
  }

  return (
    <>
      <Container style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <video width="70%" controls>
          <source src={`/path/to/video${id}.mp4`} type="video/mp4" />
        </video>
      </Container>
      <Container style={{ margin: "1rem" }}>
        <Typography variant="h4">{video.title}</Typography>
        <Typography variant="body1">{video.description}</Typography>
        <Button style={{ margin: "4px" }} variant="contained" color="primary">
          Take a Subscription - $99
        </Button>
        <Button variant="contained" color="secondary">
          Rent - {video.price}
        </Button>
      </Container>
    </>
  );
};

export default VideoPage;
