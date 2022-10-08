import React from 'react';
import ReactLoading from 'react-loading';
const Loading = ({ type, color }) => {
    return (
        <div className='flex justify-center align-middle py-72'>
            <ReactLoading type={'spin'} color={color} height="20%" width='20%' />
        </div>
    );
};

export default Loading;