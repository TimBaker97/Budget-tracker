import styled from 'styled-components';
// import bg from "./img/bg.png";
import { MainLayout } from './styles/Layouts.js';
import Float from './Components/Float/Float.js';
import Navigation from './Components/Navigation/Navigation.jsx';

function App() {
  return (
    <AppStyled /*bg={bg}*/ className="App">
      <Float />
      <MainLayout>
        <Navigation />
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
