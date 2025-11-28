import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import Analytics from './Analytics';
import Tasks from './Tasks';
import Settings from './Settings';
import Profile from './Profile';
import Security from './Security';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='analytics' element={<Analytics />} />
          <Route path='Tasks' element={<Tasks />} />
          <Route path='Settings' element={<Settings />} >
            <Route path='profile' element={<Profile />} />
            <Route path='security' element={<Security />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
