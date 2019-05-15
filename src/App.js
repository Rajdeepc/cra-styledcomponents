import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';

const useGithub = userName => {
  const [user, setUser] = useState();
  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then(r => r.json())
      .then(setUser);
  }, [userName]);

  return user;
};

const Wrapper = styled.div`
  text-align: center;
`;



function App() {
  const user = useGithub('Rajdeepc');

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper className="App">
    <div>
      Hello <b>{user.login}</b>
      <p>{user.bio}</p>
    </div>
    </Wrapper>
  );
}

export default hot(App);
