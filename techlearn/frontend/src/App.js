import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
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
        <Routes path='/'>
          <Route index element={<HomeScreen />} />
          <Route path='login' element={<LoginScreen />} />
          <Route path='register' element={<RegisterScreen />} />
          <Route path='about' element={<AboutScreen />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
