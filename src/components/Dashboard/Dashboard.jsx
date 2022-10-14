import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='text-9xl text-center text-white'>Dashboard page</h1>
            <button on onClick={() => navigate('/')} className='btn btn-primary p-5 mx-auto' >back home</button>
        </div>
    );
};

export default Dashboard;