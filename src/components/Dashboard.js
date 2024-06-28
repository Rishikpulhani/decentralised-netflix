import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import styled from 'styled-components';
import { fetchVideos } from '../data';
const drawerWidth = 240;

const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
  transition: margin-left 0.3s;
  margin-left: ${(props) => (props.open ? drawerWidth : 0)}px;
`;

const Dashboard = ({ open }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedVideos = await fetchVideos(); 
        setVideos(fetchedVideos);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <DashboardContainer open={open}>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </DashboardContainer>
  );
};

export default Dashboard;
