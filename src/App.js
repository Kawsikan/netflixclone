import React from 'react';
import { FaqsContainer } from './container/faqs';
import { FooterContainer } from './container/footer';
import { JumbotronContainer } from './container/jumbotron';

export default function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

