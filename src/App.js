/*import React from 'react';
import Layout from './ComponentFolder/Layout/Layout';
import ErrorBoundry from './ErrorBoundries/ErrorBoundries';

class App extends React.Component{

  constructor()
  {
    super();
    this.state={
      info : 'InfinityStone-keyToEverything'
    };
  }
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
       <Layout Info={this.state.info}/> 
      <div/>
      </ErrorBoundry>
    </div>
  );
  }
};

export default App;
*/

import React from 'react';
import Layout from './cricketSMS/Layout/Layout';
import ErrorBoundry from './ErrorBoundries/ErrorBoundries';

class App extends React.Component{

  render()
  {
  return (
    <div>
      <ErrorBoundry>
       <Layout />
      </ErrorBoundry>
    </div>
  );
  }
};

export default App;
