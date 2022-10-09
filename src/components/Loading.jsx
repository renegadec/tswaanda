import React from 'react';
import ReactLoading from 'react-loading';
const Loading = () => {
    return (
        <div className='flex justify-center align-middle py-72'>
            <ReactLoading type={'spin'} color={'green'} height="20%" width='20%' />
        </div>
    );
};

export default Loading;