import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import ActiveSprintPage from './pages/ActiveSprintPage';
import AdminPanelPage from './pages/AdminPanelPage';
import Navbar from './components/Navbar';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/active-sprint" element={<ActiveSprintPage />} />
                    <Route path="/admin" element={<AdminPanelPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
