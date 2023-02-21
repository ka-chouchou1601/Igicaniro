import styled from 'styled-components';

export const Container = styled.div`
  background: transparent;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  /* Fix your navbar by using below two lines of code */
  position: sticky;
  top: 0;
  /* Fix your navbar by using above two lines of code */
  z-index: 10;

  .navbar {
    width: 100%;
    border-radius: 2px;
    background-color: #c58940;
  }
  .navbar.colorChange {
    background-color: white;
  }

  .navContainer {
    display: flex;
    justify-content: space-between;
    height: 70px;
    z-index: 1;
    width: 100%;
    padding: 0 34px;
    max-width: 1100px;
  }
  .navLogo {
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.5 rem;
    cursor: pointer;
    margin-left: 4px;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      color: #faeab1;
    }
  }
  .navLogo.linkColorChange {
    color: #c58940;
    &:hover {
      color: #e5ba73;
    }
  }
  .navMenu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    margin-right: -94px;
    list-style: none;
  }
  .navLinks {
    color: white;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: #faeab1;
    }
  }
  .navLinks.linkColorChange {
    color: #c58940;

    &:hover {
      text-decoration: none;
      color: #e5ba73;
    }
  }
`;
 


