import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 12px;

    span {
        color: red;
        font-weight: bold;
    }
`;

const StyledSelect = styled.select`
    display: flex;
    align-items: center;
    width: 50%;
    height: 40px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray.light};
    color: ${({ theme }) => theme.colors.black};
    border-radius: ${({ theme }) => theme.radius.siteRadius};
    font-style: normal;
    font-size: 14px;
    line-height: 16px;
`;

const StyledGroup = styled.div`
    display: flex;
    width: 100%;
    gap: 24px;
    align-items: center;
`;

export {
    StyledForm,
    StyledSelect,
    StyledGroup,
}