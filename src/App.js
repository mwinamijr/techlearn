import { Container } from 'react-bootstrap'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import NotesListScreen from './components/NotesList'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import AboutScreen from './screens/AboutScreen'
import SecNotesList from './screens/notes/secondary/SrNotesListScreen'
import PrNotesList from './screens/notes/primary/PrNotesListScreen'

function App() {
  return (
    <Router>
        <Header />
      <main className="py-3">
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/about' component={AboutScreen} />
          <Route path='/notes/notes-list' component={NotesListScreen} />
          <Route path='/notes/sec/notes-list' component={SecNotesList} />
          <Route path='/notes/primary/notes-list' component={PrNotesList} />
          
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
