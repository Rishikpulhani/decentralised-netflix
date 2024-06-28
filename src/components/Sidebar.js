import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Divider, Avatar, Button, Typography, IconButton } from '@mui/material';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EntertainmentIcon from '@mui/icons-material/TheaterComedy';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';


const drawerWidth = 240;

const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${drawerWidth}px;
  height: 100%;
`;

const ButtonDiv = styled.div`
  margin: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid grey 1px;
`;

const UserInfo = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Sidebar = ({ open, handleLogin, handleLogout, toggleSidebar, loggedIn, setLoggedIn, user}) => {
  

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      onClose={toggleSidebar}
    >
      <DrawerContainer>
        <List>
          {[
            { text: 'Home', icon: <HomeIcon /> },
            { text: 'Movies', icon: <MovieIcon /> },
            { text: 'TV Shows', icon: <TvIcon /> },
            { text: 'Anime', icon: <SportsEsportsIcon /> },
            { text: 'Entertainment', icon: <EntertainmentIcon /> },
            { text: 'Kids', icon: <ChildFriendlyIcon /> },
          ].map((item) => (
            <ListItem button key={item.text}>
              <IconButton color="inherit">
                {item.icon}
              </IconButton>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <UserInfo>
          <Divider />
          {user ? (
            <>
              <Avatar alt="User Name" src={user.photoURL} />
              <div>
                <Typography variant="body2">{user.email}</Typography>
                <Button color="secondary" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <ButtonDiv>
              <Button style={{width: "100%"}} color="primary" onClick={handleLogin}>
                Login
              </Button>
            </ButtonDiv>
          )}
        </UserInfo>
      </DrawerContainer>
    </Drawer>
  );
};

export default Sidebar;
