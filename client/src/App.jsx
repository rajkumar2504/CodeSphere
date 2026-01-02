import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Problems from './pages/Problems';
import ProblemPage from './pages/ProblemPage';
import Profile from './pages/Profile';
import Contests from './pages/Contests';
import Discuss from './pages/Discuss';
import Leaderboard from './pages/Leaderboard';
import Roadmap from './pages/Roadmap';
import MockInterview from './pages/MockInterview';
import Companies from './pages/Companies';
import Compiler from './pages/Compiler';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/problem/:slug" element={<ProblemPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contests" element={<Contests />} />
            <Route path="/discuss" element={<Discuss />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/mock-interview" element={<MockInterview />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/compiler" element={<Compiler />} />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
