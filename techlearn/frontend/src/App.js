import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import NotesListScreen from './components/NotesList'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import AboutScreen from './screens/AboutScreen'
import ContactScreen from './screens/ContactScreen'
import OLNotesList from './screens/notes/secondary/OLNotesListScreen'
import PrNotesList from './screens/notes/primary/PrNotesListScreen'
import SubjectsListScreen from './screens/notes/secondary/SubjectsListScreen'
import TopicListScreen from './screens/notes/secondary/TopicListScreen'
import TopicDetailsScreen from './screens/notes/secondary/TopicDetailsScreen'
import UserListScreen from './screens/userListScreen'
import UserEditScreen from './screens/UsersEditScreen'

function App() {
  return (
    <Router>
      <Header />
        <Routes path='/'>
          <Route index element={<HomeScreen />} />
          <Route path='about' element={<AboutScreen />} />
          <Route path='contact-us' element={<ContactScreen />} />
          <Route path='admin/'>
            <Route path='userlist' element={<UserListScreen />} />
            <Route path='user/:id/edit' element={<UserEditScreen />} />
          </Route>
          <Route path='notes/'>
            <Route path='primary/'>
              <Route path='' element={<PrNotesList />} />
            </Route>
            <Route path='o-level/'>
              <Route path='' element={<OLNotesList />} />
              <Route path='subjects/' element={<SubjectsListScreen />} />
              <Route path='subjects/topics/' element={<TopicListScreen />} />
              <Route path='subjects/topics/:id' element={<TopicDetailsScreen />} />
            </Route>
          </Route>

          <Route path='login' element={<LoginScreen />} />
          <Route path='register' element={<RegisterScreen />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
