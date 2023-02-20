import styled from 'styled-components';

export const Container = styled.div`
  background: transparent;
  height: 80px;
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
    width:100%;
    border-radius: 2px;
    background-color: transparent;
  }
  .navbar.colorChange {
    background-color: white;
  }

  .navContainer {
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 34px;
    max-width: 1100px;
  }
  .navLogo {
    color: black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.5 rem;
    cursor: pointer;
    margin-left: 4px;
    font-weight: bold;
    text-decoration: none;
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
    color: gray;
    display: flex;
    align-items: center;
    padding: 0 1rem;
     height: 100%; 
   cursor: pointer; 
   &.active { 
  color: #000000; 
  &.hover{
    color: white;
  }
    
  }
  
  
`;
 


