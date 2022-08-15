import React, { useState } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {myStyle} from './const/styles'
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
 

function Create() {
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [details , setDetail] = useState('')
  const [category , setCategory] = useState('todos')

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:8000/notes' , {title,details,category })
    .then(() => navigate('/') )

  }

  return (
    <Container size = 'sm' style = {{margin:'65px 0px 0px 220px'}}>
      <Typography variant = 'h5' color = 'textPrimary' style = {{marginLeft:'20px'}}>Create A New Note</Typography>

      <form onSubmit={handleSubmit}>
      <TextField 
      sx = {myStyle.field}
      value = {title}
      onChange = {(e) => setTitle(e.target.value)}
      id="outlined-basic" 
      label="Note Title" 
      variant="outlined" 
      autoComplete='off'
      gutterbottom = 'true'
      // fullWidth
      required
      />

     <TextField 
      sx = {myStyle.field}
      value = {details}
      onChange = {(e) => setDetail(e.target.value)}
      id="outlined-basic" 
      label="Details" 
      variant="outlined" 
      autoComplete='off'
      gutterbottom = 'true'
      multiline
      rows={4}
      // fullWidth
      required
      />

  <FormControl
  sx ={{
    display:'block',
    marginLeft:'20px'
  }}
  >
      <FormLabel color = 'info'>Note Category</FormLabel>
      <RadioGroup value={category} onChange ={(e) => setCategory(e.target.value)}>
        <FormControlLabel value="todos" control={<Radio />} label="Todos" />
        <FormControlLabel value="work" control={<Radio />} label="Work" />
        <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
        <FormControlLabel value="money" control={<Radio />} label="Money" />
      </RadioGroup>
    </FormControl>

    <Button 
    type = 'submit'
    variant="contained"
    endIcon = {<ArrowForwardIosIcon />}
    style = {{marginLeft:'20px'}}
    >Submit</Button>
      </form>
    </Container>
  )
}

export default Create