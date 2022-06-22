import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Feed from './Feed';

const Feeds = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('./data/data.json')
      .then((res) => res.json())
      .then((obj) => setFeeds(obj));
  }, []);

  return (
    <Section>
      {feeds.map((data) => (
        <Feed key={data.id} data={data} />
      ))}
    </Section>
  );
};

export default Feeds;

const Section = styled.section`
  width: 470px;
  margin: auto;
  @media screen and (max-width: 470px) {
    width: 100%;
  }
`;
