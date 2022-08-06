import React from 'react'
import { Container } from 'react-bootstrap'
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
    <h1>React home</h1>
  );
}

export default App;
