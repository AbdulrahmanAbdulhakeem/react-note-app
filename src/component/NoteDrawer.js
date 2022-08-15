import React, {useState} from 'react'
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {navbarItems} from './navbarItems'
import {myStyle} from '../pages/const/styles'
import {useNavigate} from 'react-router-dom'
import Brightness4Icon from '@mui/icons-material/Brightness4';


function NoteDrawer () {
  const navigate = useNavigate()
  const [dark , setDark] = useState(false)

  const darkMode = () => {
    if(dark) {
      document.body.style.background = '#f2f2f2'
    }else{
      document.body.style.background = 'white'
    }
  }

  return (
    <div sx ={myStyle.root} style={{
      backgroundColor: dark ? 'white' : 'false',
    }}>
      <AppBar >
          <Toolbar sx = {{
            marginLeft : '220px'
          }}>
            <Typography variant="h6" component="div">
              Welcome To My Note app
            </Typography>
            <Brightness4Icon onClick = {() => {
              setDark(prev => !prev)
              darkMode()
            } } />
          </Toolbar>
          
        </AppBar>
         <Drawer
        sx={myStyle.drawer}
        variant="permanent"
        anchor="left"
        width = '10%'
      >
        <Toolbar />
        <Typography variant='h4' align='center' color = 'textSecondary'>
          My Notes
        </Typography>
        <Divider />
        <List>
          {navbarItems.map((item, index) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={() => navigate(item.route)} >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
      </Drawer>
    </div>
  )
}

export default NoteDrawer