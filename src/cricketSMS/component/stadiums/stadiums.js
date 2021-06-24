import React from 'react';
import firebase from '../../firebase/firebase';
import StadiumCard from './stadiumCard';
import InfoModal from './info';

class Stadiums extends React.Component
{
    constructor()
    {
        super();
        this.state={
            stadiumsList : null,
            modalStatus : false,
            dataForModal : null
        }

        this.modalStatusHandler=this.modalStatusHandler.bind(this);
    }

    modalStatusHandler(name)
    {
        firebase.firestore().collection('stadiums').doc(name).get()
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
        firebase.firestore().collection('stadiums').orderBy('name')
        .onSnapshot(querySnapshot => {
         const data = querySnapshot.docs.map(doc => ({
             ...doc.data(),
             id: doc.id,
           }));
 
          console.log(data[0]);
          this.setState({
              stadiumsList : data
          })
       });
    }

    render()
    {
        return (
            <div>
                {this.state.modalStatus && this.state.dataForModal ? <InfoModal data={this.state.dataForModal} 
                modalStatusHandler={this.modalStatusHandler}/> : null}
           {this.state.stadiumsList ? this.state.stadiumsList.map((item)=>{
            return <StadiumCard key={item['name']} architect={item['architect']} establishment={item['establishment']}
            image={item['image']} location={item['location']} name={item['name']} operator={item['operator']}
            owner={item['owner']} modalStatusHandler={this.modalStatusHandler}/>;
           }) : null}
            </div>

        );
    }
};

export default Stadiums;