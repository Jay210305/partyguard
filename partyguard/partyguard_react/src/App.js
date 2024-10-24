// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import EventDashboard from './components/EventDashboard';
// import EventDetail from './components/EventDetail';
// import './App.css';

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 {/* Dashboard donde se ven los eventos y se crean */}
//                 <Route path="/" element={<EventDashboard />} />

//                 {/* Detalles de un evento específico */}
//                 <Route path="/event/:eventId" element={<EventDetail />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventDashboard from './components/EventDashboard';
import EventDetail from './components/EventDetail';
import Navbar from './components/Navbar'; // Importar la Navbar
import './App.css'

const App = () => {
    return (
        <Router>
            {/* Navbar se muestra en todas las rutas */}
            <Navbar />

            <Routes>
                <Route path="/" element={<EventDashboard />} />
                <Route path="/event/:eventId" element={<EventDetail />} />
                {/* Puedes agregar más rutas aquí */}
            </Routes>
        </Router>
    );
};

export default App;
