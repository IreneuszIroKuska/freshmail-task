import React, { useState, useEffect } from 'react';
import Comment from '../../components/comment';

interface data {
    name: string;
    email: string;
    body?: string;
    id: number;
}

const HomeContainer = () => {
    const [data, setData] = useState<data[]>([]);
    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(data => data.json())
            .then(data => setData(data));
    };

    useEffect(() => {
        fetchData()
    }, [])

    return data.slice(0, 20).map(item => {
            return (
                <Comment name={item.name} email={item.email} body={item.body} key={item.id} />
            )
        }
    )
}

export default HomeContainer;
