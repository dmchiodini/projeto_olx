import styled from 'styled-components';

export const HeaderArea = styled.div`
  background-color: #FFF;
  height: 60px;
  border-bottom: 1px solid #CCC;

.container {
    max-width: 1000px;
    margin: auto;
    display: flex;
}

a {
    text-decoration: none;
}

.logo {
    flex: 1;
    display: flex;
    align-items: center;

    .logo-1,
    .logo-2,
    .logo-3 {
        font-size: 27px;
        font-weight: bold;
    }
    .logo-1 { color: #FF0000 }
    .logo-2 { color: #00FF00 }
    .logo-3 { color: #0000FF }
}

nav {
    padding-top: 10px;
    padding-bottom: 10px;

    ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    ul {
        display: flex;
        align-items: center;
        height: 40px;
    }

    li {
        margin-left: 20px;
        margin-right: 20px;

        a, button {
            background: none;
            color: #000;
            font-size: 14px;
            border: 0;
            text-decoration: none;
            cursor: pointer;
            outline: 0;

            &:hover {
                color: #777;
            }

            &.button {
                background-color: #FF8100;
                color: #FFF;
                padding: 8px 15px;
                font-size: 15px;
                border: 0;
                border-radius: 5px;
            }

            &.button:hover {
                background-color: #E57706;
            }
        }
    }
}

@media (max-width: 600px) {

    & {
        height: auto;
    }

    .container {
        flex-direction: column;
    }
    .logo {
        justify-content: center;
        margin: 15px 0;
    }
    nav ul {
        flex-direction: column;
        height: auto;
    }
    nav li {
        margin: 10px;
    }
}

`;