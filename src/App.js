import React, { Suspense } from 'react';
import InnerComponent from './InnerComponent';

const Page = () => {
  return(
    <div>
      <InnerComponent />
    </div>
  );
}

export default function App() {
  return(
    <Suspense fallback="loading">
      <Page />
    </Suspense>
  );
};
