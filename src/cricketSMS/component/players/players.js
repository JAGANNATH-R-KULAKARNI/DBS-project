import React from 'react';
import firebase from '../../firebase/firebase';
import PlayersCard from './playerCard';
import InfoModal from './info';

class Players extends React.Component
{
    constructor()
    {
        super();
        this.state={
            playersList : null,
            modelStatus : false,
            dataForModal : null
        };

        this.modelStatusHandler=this.modelStatusHandler.bind(this);
    }

    modelStatusHandler(name)
    {
      

      firebase.firestore().collection('players').doc(name).get()
      .then((res)=>{
          console.log(res.data());
        this.setState({
            dataForModal : res.data(),
            modelStatus : !this.state.modelStatus,
        });
      })
      .catch((err)=>console.log(err));
    }

    componentDidMount()
    {
        firebase.firestore().collection('players').orderBy('criketerRanking')
        .onSnapshot(querySnapshot => {
         const data = querySnapshot.docs.map(doc => ({
             ...doc.data(),
             id: doc.id,
           }));
 
          console.log(data[0]);
          this.setState({
              playersList : data
          })
       });
    }

    render()
    {

        return (
            <div>

                {this.state.modelStatus && this.state.dataForModal? <InfoModal modelStatusHandler={this.modelStatusHandler} data={this.state.dataForModal}/> : null}
           {this.state.playersList ? this.state.playersList.map((item)=>{
            return <div style={{textAlign : 'center'}}>
                <PlayersCard dob={item['dateOfBirth']} country={item['country']} name={item['name']} age={item['age']} battingStyle={item['battingStyle']}
            bowlingStyle={item['bowlingStyle']} key={item['name']} image={item['image']} jerseyNumber={item['jerseyNumber']}
            rank={item['criketerRanking']} mainRole={item['mainRole']} rankings={item['rankings']} totalRuns={item['totalRuns']} totalWickets={item['totalWickets']}
            modelStatusHandler={this.modelStatusHandler}/>
            </div>
            
           }) : null}
            </div>

        );
    }
};

export default Players;