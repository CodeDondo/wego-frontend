import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;

  ul {
    display: flex;
    gap: 2rem;
    list-style: none;

    li a {
      text-decoration: none;
      color: black;

      &:hover {
        color: #00aee0;
      }
    }
  }
`;

export const Button = styled.button`
  background-color: white;
  border: none;
  font-size: medium;
  color: black;
`


export const BurgerWrapper = styled.div`
  .bm-burger-button {
    position: fixed;
    width: 28px;
    height: 20px;
    right: 20px;
    top: 20px;
  }

  .bm-burger-bars {
    background: #000;
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  .bm-cross {
    background: #000;
  }

  .bm-menu {
    background: #f4f7f9;
    padding: 2.5em 1.5em 0;
    font-size: 1.2em;
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

 
  .menu-item {
    display: block;
    color: black;
    text-decoration: none;
    margin-bottom: 1rem;

    &:hover {
      color: #00aee0;
    }
  }
`;
