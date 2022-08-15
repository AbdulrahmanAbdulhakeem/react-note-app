import Create from "./pages/Create";
import {BrowserRouter  , Routes , Route} from 'react-router-dom'
import Note from "./pages/Note";
import NoteDrawer from './component/NoteDrawer'

function App() {
  return (
    <BrowserRouter>
    <NoteDrawer />
    <Routes>
      <Route path = '/' element = {<Note />} />
      <Route path = 'create' element = {<Create />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
