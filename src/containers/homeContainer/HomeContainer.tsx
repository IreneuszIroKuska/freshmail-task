import React, { useState, useEffect } from 'react';
import Comment from '../../components/comment';
import Loader from '../../components/loader';

interface data {
    name: string;
    email: string;
    body?: string;
    id: number;
}

const elementMapper = (data:data[]) => {
    return data.map(item => {
        return (
            <Comment name={item.name} email={item.email} body={item.body} key={item.id} />
        )
    })
}

const HomeContainer = () => {
    const [data, setData] = useState<data[]>([]);
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(data => data.json())
            .then(data => {
                setData(data)
                setIsLoaded(true);
            })
            .catch(error => {
                console.error(error)
                setIsError(true);
            });
    };

    useEffect(() => {
        fetchData()
    }, [])

    if(isError) {
        return (
            <div> ...Ooops something went bad</div>
        )
    }

    return isLoaded ? elementMapper(data) : <Loader />
}

export default HomeContainer;
