import styled from 'styled-components';

export const Container = styled.nav`
    background: linear-gradient(150deg, #53f 15%, #05d5ff);

    > ul {
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 0 21px;
    }
`;

export const DropdownStyles = styled.div`
    .dropdown-options{
        padding: 20px 21px;
        outline: 0;
        color: #fff;
        font-size: 18px;

        transition: opacity 0.2s;

        &:hover, &:focus {
            opacity: 0.55
        }
    }
    .dropdown-root {
        z-index: 10;
        position: absolute;
    }

    .dropdown-arrow{
        position: relative;

        &::before{
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            background: #fff;

            border-radius: 4px 0 0 0;
            top: -6.5px;
            left: 8px;
            transform: rotate(45deg);
        }
    }

    .dropdown-container {
        position: absolute;
        overflow: hidden;
        box-shadow: 0, 8px,8px, rgba(0,0,0,3);

        background: #fff;
        border-radius: 4px;
    }
    
    .dropdown-section {
        position: absolute;
    }

    .dropdown-background {
        position: absolute;
        bottom: 0;
        background: #000;
        width: 100%;
    }
`;
