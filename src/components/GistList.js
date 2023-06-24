import React, { useEffect, useState } from 'react'
import Gist from './Gist';
import { getGistForUser, getPublicGists } from '../services/gistService';
import styled from 'styled-components';

//destructured searched username

const GistList = ({ searchedValue }) => {
  const [fetchedData, setFetchedData] = useState([]); // States for Data Fetching initialized with empty array
  const [errorText, setErrorText] = useState(""); // States for Error Handling initialized with a string
  const [loading, setLoading] = useState(false); // Loading States initialized with a false value

  useEffect(() => {
    setLoading(true); // Set Loading to true to show loader if there is any delay in data fetching
    // Check if there is a searched text
    if (searchedValue) {
      // Get gist according to searched username
      getGistForUser(searchedValue)
        .then((res) => setFetchedData(res.data))
        .catch((err) => setErrorText(err));

      setLoading(false); //set loading to false as data has been fetched
    }
    // Get all gists if nothing is searched 
    else {
      getPublicGists()
        .then((res) => setFetchedData(res.data))
        .catch((error) => setErrorText(error));

      setLoading(false); //set loading to false as data has been fetched
    }
  }, [searchedValue]); // if searched text changes then this function must run again

  return (
    <Wrapper>
      {/* If there is a loader then display loader */}
      {loading && <Loader></Loader>}

      {/* If there is an error while fetching data then display error else display Gist component*/}
      {errorText ? (
        <ErrorDiv>
          ERROR: Something went wrong. Please refresh the page.
        </ErrorDiv>
      ) : 

      fetchedData.length > 0 ? (
        fetchedData.map((ele) => {
          return <Gist gist={ele} key={ele.id} />;
        })
      ) : (
        <AlertDiv>No results found. Try some other usernames instead.</AlertDiv>
      )}
    </Wrapper>
  );
};

//Component Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  flex-direction : column;
`;

const ErrorDiv = styled.p`
    color: red;
    font-weight: 600;
    font-size: 15px;
`

const AlertDiv = styled.p`
    color: blue;
    font-weight: 600;
    font-size: 15px;
`

const Loader = styled.div`
  border: 8px solid #f3f3f3; /* Light gray */
  border-top: 8px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default GistList
