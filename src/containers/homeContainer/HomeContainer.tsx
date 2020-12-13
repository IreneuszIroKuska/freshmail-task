import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchComment } from '../../store/actions/comments/comments.actions';
import Comment from '../../components/comment';
import Loader from '../../components/loader';

interface data {
    name: string;
    email: string;
    body?: string;
    id: number;
}

interface props {
    loading: any;
    fetchComment: () => {};
    comments: Array<data>;
    error: boolean,
}

const elementMapper = (data:data[]) => {
    return data.map(item => {
        return (
            <Comment id={item.id} name={item.name} email={item.email} body={item.body} key={item.id} />
        )
    })
}

const HomeContainer:FC<props> = ({ fetchComment, loading, comments, error }) => {
    const loadingState:string = 'LOADING';
    const isLoading = loading.COMMENTS_GET_REQUEST === loadingState && !comments.length;

    useEffect(() => {
        if(!comments.length) {
            fetchComment();
        }
    }, [fetchComment])

    if(error) {
        return (
            <div> ...Ooops something went wrong</div>
        )
    }

    return !isLoading ? elementMapper(comments) : <Loader />
}

const mapStateToProps = state => ({
    loading: state.commentsReducer.loadingState,
    comments: state.commentsReducer.comments,
    error: state.commentsReducer.error,
});

export default connect(mapStateToProps, { fetchComment })(HomeContainer);
