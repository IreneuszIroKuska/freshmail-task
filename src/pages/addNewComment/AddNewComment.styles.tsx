import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    width: 75%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
`;

const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 12px;
    border: 1px solid;
    font-size: 20px;
`;

const StyledTitle = styled.h3`
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 1px gray;
    padding: 10px;
    border-radius: 12px;
`

const StyledTextarea = styled.textarea`
    width: 100%;
    border-radius: 12px;
    border: 1px solid;
    font-size: 20px;
`;

export {
    StyledForm,
    StyledInput,
    StyledTitle,
    StyledWrapper,
    StyledTextarea,
};
