import React from 'react';
import firebase from '../../firebase/firebase';

class PlayedTeams extends React.Component
{
    constructor()
    {
        super();
        this.state={
            teams : null
        };
    }

    componentDidMount()
    {
        firebase.firestore().collection('players').doc(this.props.name).collection('teams').orderBy('name')
        .onSnapshot(querySnapshot => {
         const data = querySnapshot.docs.map(doc => ({
             ...doc.data(),
             id: doc.id,
           }));
 
          this.setState({
              teams : data
          })
       });

    }

    render()
    {
        return (
            <div>
                <ul>
             {this.state.teams ? this.state.teams.map((item)=>{
               return <li>{item['name']}</li>
             }) : null}
             </ul>
            </div>
        );
    }
};

export default PlayedTeams; 