import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addComment } from '../../store/actions/comments/comments.actions';
import { 
    StyledForm,
    StyledInput,
    StyledWrapper,
    StyledTitle,
    StyledTextarea,
 } from './AddNewComment.styles';

type Inputs = {
    name: string,
    email: string,
    text: string,
};

enum errors {
    required = "required",
    min = 'minLength',
    pattern = 'pattern'
};

enum errorText {
    required = "This filed is required",
    min = "you entered too few characters",
    pattern = "you enter bad character",
    unknown = "unknown error, panic!",
};

const errorHandler = (error: string) => {
    if (error === errors.required) {
        return errorText.required;
    } 
    if (error === errors.min) {
        return errorText.min;
    }
    if (error === errors.pattern) {
        return errorText.pattern;
    }
    
    return errorText.unknown;
}

const AddNewComment = () => {
    const { register, handleSubmit, watch, errors } = useForm<Inputs>();
    const dispatch = useDispatch()
    const count = useSelector(store => store.commentsReducer.comments);

    const onSubmit = data => {
        const lastElementId = count.length ? count[count.length - 1].id : 501;
        const id = lastElementId ? lastElementId + 1 : 501;
        if (data) {
            dispatch(addComment(data, id));
        }
    };

    return (
        <StyledWrapper>
            <StyledTitle> Add new comment </StyledTitle>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <StyledInput type="text" placeholder="name" name="name" ref={register({required: true, minLength: 3, pattern: /^[a-zA-Z]+$/})} />
                {errors.name && <span>{errorHandler(errors.name.type)}</span>}
                <StyledInput type="email" placeholder="email" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})}/>
                {errors.email && <span>{errorHandler(errors.email.type)}</span>}
                <StyledTextarea placeholder="text" name="text" rows={10} cols={30} ref={register({ required: true, minLength: 2})} />
                {errors.name && <span>{errorHandler(errors.name.type)}</span>}
                <Button type="submit">Send</Button>
            </StyledForm>
        </StyledWrapper>
    )}
;

export default AddNewComment;
