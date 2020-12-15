import styled from 'styled-components';
import StyledInput from '../styledInput';

const Button = styled(StyledInput)`
    justify-content: center;
    text-transform: uppercase;
    width: 50%;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
`;

export default Button;
