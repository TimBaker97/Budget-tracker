import styled from 'styled-components';
// import bg from "./img/bg.png";
import { MainLayout } from './styles/Layouts.js';
import Float from './Components/Float/Float.js';

function App() {
  return (
    <AppStyled /*bg={bg}*/ className="App">
      <Float />
      <MainLayout>
        <h1>Hello tim</h1>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-color: whitesmoke;
  /* background-image: url(bg); */
  position: relative;
`;

export default App;
