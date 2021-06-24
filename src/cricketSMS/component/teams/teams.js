import React from 'react';
import firebase from '../../firebase/firebase';
import TeamCard from './teamsCard';
import InfoModal from './info';

class Teams extends React.Component
{
    constructor()
    {
        super();
        this.state={
            teamsList : null,
            modalStatus : false,
            dataForModal : null
        };

        this.modalStatusHandler=this.modalStatusHandler.bind(this);
    }

    modalStatusHandler(name)
    {
        firebase.firestore().collection('teams').doc(name).get()
        .then((res)=>{
            console.log(res.data());
          this.setState({
              dataForModal : res.data(),
              modalStatus : !this.state.modalStatus
          });
        })
        .catch((err)=>console.log(err));
    }

    componentDidMount()
    {
        firebase.firestore().collection('teams').orderBy('name')
        .onSnapshot(querySnapshot => {
         const data = querySnapshot.docs.map(doc => ({
             ...doc.data(),
             id: doc.id,
           }));
 
          console.log(data[0]);
          this.setState({
              teamsList : data
          })
       });
    }

    render()
    {
        return (
            <div>
                {this.state.modalStatus && this.state.dataForModal ? <InfoModal modalStatusHandler={this.modalStatusHandler} data={this.state.dataForModal}/> : null}
          {this.state.teamsList ? this.state.teamsList.map((item)=>{
            return <TeamCard key={item['name']} coach={item['coach']} director={item['director']} image={item['image']}
            jersey={item['jersey']} name={item['name']} type={item['type']}
            modalStatusHandler={this.modalStatusHandler}/>;
           }) : null}
            </div>

        );
    }
};

export default Teams;