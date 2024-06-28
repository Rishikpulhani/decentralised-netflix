import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';

const drawerWidth = 240;

const NavbarContainer = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 1.8rem;
  z-index: 1300; 
  transition: margin-left 0.3s;
  margin-left: ${(props) => (props.open ? drawerWidth : 0)}px;
`;

const Search = styled.div`
  margin: 0 auto;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 40px;
  width: 50%;
  border: solid white 1px;
`;

const Navbar = ({ toggleSidebar, open, user, toggleUploadModal}) => {
  return (
    <NavbarContainer open={open}>
      <AppBar position='relative'>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            YouTube
          </Typography>
          <Search>
            <InputBase style={{color: "white"}} placeholder="Search…" />
          </Search>
          <Button onClick={() => user? toggleUploadModal() : alert("Please login first !!")}  color="inherit">Upload</Button>
        </Toolbar>
      </AppBar>
    </NavbarContainer>
  );
};

export default Navbar;
