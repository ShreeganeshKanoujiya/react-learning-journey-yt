import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

function GitHub() {
    
    const data = useLoaderData();

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/shreeganeshkanoujiya')
    //     .then(res => res.json())
    //     .then(data => setData(data));
    //     }, [])

    return (
        <div className='flex flex-col justify-center items-center text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <h1 className='mb-5'>GitHub followers: {data.followers}</h1>
            <img src={data.avatar_url} alt="Avatar" width={300}/>
        </div>
    );
}

export default GitHub;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/shreeganeshkanoujiya');
    return response.json();
}