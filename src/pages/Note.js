import React , {useEffect, useState} from 'react'
import Container from '@mui/material/Container'; 
import axios from 'axios'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Masonry from '@mui/lab/Masonry';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

function Note() {
  const [note , setNote] = useState([])

  const getNotes = async () => {
    const api = await axios.get('http://localhost:8000/notes')
    const data = await api.data
    setNote(data)
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/notes/${id}`)

    const newNotes = note.filter(notes => notes.id !== id)

    setNote(newNotes)
  }

  useEffect(() => {
    getNotes()
  } , [])

  

  return (
    <Container style = {{margin:'70px 0px 0px 200px'}}>
    <Masonry columns={{xs:1 , sm:1 , md:1 , lg:3}} spacing={{ xs: 1, sm: 2, md: 1 , lg:2}}>
    {note.map(notes => (
  <div key = {notes.id}>
    <Card sx={{ maxWidth: 345 , overflow:'hidden'} } elevation = {1}>
  <CardHeader
    action={
      <IconButton aria-label="settings" onClick = {() => handleDelete(notes.id)}>
        <DeleteIcon  />
      </IconButton>
    }
    title={notes.title}
    subheader={notes.category}
  />
  <CardContent>
    <Typography variant="body2" color="textSecondary">
      {notes.details}
    </Typography>
  </CardContent>
 
</Card>
  </div>
))}
      </Masonry>
    </Container>
  )
}

export default Note