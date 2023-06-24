
import styled from 'styled-components'
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import GistList from './components/GistList';
import {  useState } from 'react';

const App = () => {
  
  const [searchedValue, setSearchedValue] = useState(""); //states for searched text

  const handleSearch = (value) => {
    setSearchedValue(value);
  };

  return (
    <Wrapper className="App" data-testid="app">
      {/* passed handleSearch as a Prop in Header component */}
      <Header onSearch={handleSearch} />

      {/* passed searchedValue as a Prop in GistList component */}
      <GistList searchedValue={searchedValue} />
      <GlobalStyles />
    </Wrapper>
  );
}
//Component Styles
const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
