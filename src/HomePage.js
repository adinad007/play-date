import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Our Business Application</h1>
            <p>This is the homepage of our application.</p>
            <Link to="/admin">Go to Admin</Link>
        </div>
    );
}

export default HomePage;