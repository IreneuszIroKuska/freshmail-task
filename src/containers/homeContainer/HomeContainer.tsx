import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WithErrorBoundary from '../../hoc/withErrorBoundary';
import { fetchComment } from '../../store/actions/comments/comments.actions';
import Comment from '../../components/comment';
import Loader from '../../components/loader';

interface data {
    name: string;
    email: string;
    body?: string;
    id: number;
}

const elementMapper = (data:data[]) => {
    if (data) {
        const sliceStart: number = data.length - 20;
        const sliceEnd: number = data.length;
        return data.slice(sliceStart, sliceEnd).map(item => {
            return (
                <Comment id={item.id} name={item.name} email={item.email} body={item.body} key={item.id} />
            )
        })
    }
    return <></>
}

const HomeContainer = () => {
    const commentsData = useSelector(store => store.commentsReducer);
    const comments = commentsData.comments;
    const loading = commentsData.loadingState;
    const error = commentsData.error;

    const dispatch = useDispatch();
    const loadingState:string = 'LOADING';
    const isLoading:boolean = loading.COMMENTS_GET_REQUEST === loadingState && !comments.length;

    useEffect(() => {
        if(!comments.length) {
            dispatch(fetchComment());
        }

        return () => {}
    }, [fetchComment])

    if(error) {
        return (
            <div>...Ooops something went wrong</div>
        )
    }

    return !isLoading ? elementMapper(comments) : <Loader />
}

export default WithErrorBoundary(HomeContainer);
