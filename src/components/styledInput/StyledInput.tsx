import styled from 'styled-components';

const Input = styled.input`
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
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

export default Input;
