import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  h4 {
    text-align: center;
    margin-bottom: 1rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
  .toggle-password {
  background-color: transparent; /* Transparent background */
  border: none; /* Remove default button border */
  color: var(--primary-500);  /* Blue color for text */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 14px; /* Font size */
  outline: none; /* Remove outline when focused */
  padding: 0; /* Remove default padding */
  transition: color 0.3s ease; /* Smooth color transition */
}

.toggle-password:hover {
  color: #0056b3; /* Darker blue on hover */
}

.toggle-password:focus {
  outline: none; /* Remove outline when focused */
}
    
`;
export default Wrapper;
