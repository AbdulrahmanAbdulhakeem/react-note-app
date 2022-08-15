import NotesIcon from '@mui/icons-material/Notes';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const navbarItems = [
    {
        id:0,
        label:'My Notes',
        icon:<NotesIcon />,
        route:'/'
    },
    {
        id:1,
        label:'Create Notes',
        icon:<AddCircleOutlineIcon />,
        route:'create'
    },
]