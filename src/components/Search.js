import React from 'react'
import styled from 'styled-components'
import Octicon from 'react-octicon'

//destructured onSearch method 

const Search = ({ onSearch }) => {

  //Method to get input text and passed it in onSearch method
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          name='search'
          type='text'
          placeholder="Search Gists for the username"
          onChange={handleSearch}
        />
      </InputBox>
    </Wrapper>
  );
};

//Component Styles
const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus{
    outline: 0;
  }
`;

export default Search
