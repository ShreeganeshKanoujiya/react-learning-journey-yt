import React from 'react';
import { useParams } from 'react-router';

const User = () => {
    const { userId } = useParams();
    return (
        <div className='flex flex-wrap justify-center align-center mt-10 mb-10'>User: {userId}</div>
    )
}

export default User