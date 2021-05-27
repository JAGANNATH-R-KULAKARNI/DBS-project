import React from 'react';
import Layout from './ComponentFolder/Layout/Layout';
import ErrorBoundry from './ErrorBoundries/ErrorBoundries';

class App extends React.Component{

  componentDidMount()
  {
    console.log("JAGANNATH R KULAKARNI");
    console.log("THE NATIONAL INSTITUTE OF ENGINEERING");
    console.log("INFORMATION SCIENCE ENGINEERING");
    console.log("Hello vro :)");
  }
  render()
  {
  return (
    <div>
      <ErrorBoundry>
      <Layout />
      <div/>
      </ErrorBoundry>
    </div>
  );
  }
};

export default App;
