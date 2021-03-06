import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    width: 75%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;

    span {
        color: red;
        font-weight: bold;
    }
`;

const StyledTitle = styled.h3`
    font-size: 32px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 16px 16px 24px 16px;
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
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray.light};
    color: ${({ theme }) => theme.colors.black};
    box-sizing: border-box;
    border-radius: ${({ theme }) => theme.radius.siteRadius};
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
`;

export {
    StyledForm,
    StyledTitle,
    StyledWrapper,
    StyledTextarea,
};
