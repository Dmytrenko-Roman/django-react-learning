import React, { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomeRoute from './routers/HomeRoute';
import CarRoute from './routers/CarRoute';
import CartRoute from './routers/CartRoute';

function App() {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Routes>
                        <Route path="/" element={<HomeRoute />} exact />
                        <Route path="/car/:id" element={<CarRoute />} />
                        <Route path="/cart" element={<CartRoute />} />
                        <Route path="/cart/:id" element={<CartRoute />} />
                    </Routes>
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
