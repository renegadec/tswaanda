import React from 'react';
import ReactLoading from 'react-loading';
const Loading = ({ type, color }) => {
    return (
        <div className='flex justify-center align-middle py-52'>
            <ReactLoading type={type} color={color} height="100%" width='50%' />
        </div>
    );
};

export default Loading;