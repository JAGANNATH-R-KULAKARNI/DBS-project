import React from 'react';
import firebase from '../../firebase/firebase';
import PlayersCard from './playerCard';
import InfoModal from './info';
import UploadButton from './uploadButtonUI';
import Edit from './edit';
import Spinner from '../spinner/spinner';

class Players extends React.Component
{
    constructor()
    {
        super();
        this.state={
            spinnerStatus : false,
            playersList : null,
            modelStatus : false,
            dataForModal : null,
            openEditModal : false,
            editOnly : false,
            teamList : null,
            name : '',
            Born : '',
            Birth_Place : '',
            Age : '',
            Country : '',
            Cricket_Rankings : '',
            T20_rankings : '',
            ODI_rankings : '',
            Test_rankings : '',
            Batting_style : '',
            Bowling_style : '',
            Jersey_Number : '',
            Total_runs : '',
            Total_wickets : '',
            image : ''

        };

        this.modelStatusHandler=this.modelStatusHandler.bind(this);
        this.openEditModal=this.openEditModal.bind(this);
        this.openEditModalForExisting=this.openEditModalForExisting.bind(this);
        this.textChangeHandler=this.textChangeHandler.bind(this);
        this.saveEditedTexts=this.saveEditedTexts.bind(this);
        this.createNewPlayer=this.createNewPlayer.bind(this);
        this.deletePlayerHandler=this.deletePlayerHandler.bind(this);
    }

    textChangeHandler(e)
    {
        console.log(e.target.name+" : "+e.target.value);
     this.setState({
         [e.target.name] : e.target.value
     });
    }

    openEditModal()
    {
     this.setState({
         openEditModal : !this.state.openEditModal,
         editOnly : false,
         teamList : null,
         nameForUpload : '',
         name : '',
         Born : '',
            Birth_Place : '',
            Age : '',
            Country : '',
            Cricket_Rankings : '',
            T20_rankings : '',
            ODI_rankings : '',
            Test_rankings : '',
            image : '',
            Batting_style : '',
            Bowling_style : '',
            Jersey_Number : '',
            Total_runs : '',
            Total_wickets : '',
     });
    }

    createNewPlayer()
    {
        var docData = {
            name : this.state.name,
            born :  this.state.Born, 
            birthPlace :  this.state.Birth_Place, 
            age : this.state.Age ,
            country :  this.state.Country ,
            criketerRanking : this.state.Cricket_Rankings ,
            rankings : [this.state.T20_rankings,this.state.ODI_rankings,this.state.Test_rankings] ,
            battingStyle :   this.state.Batting_style ,
             bowlingStyle : this.state.Bowling_style ,
             jerseyNumber : this.state.Jersey_Number ,
              totalRuns : this.state.Total_runs,
              totalWickets : this.state.Total_wickets ,
              image : this.state.image
          };
  
  
          firebase.firestore().collection('players').doc(this.state.name).set(docData).then(() => {
              this. openEditModal();
          })
          .catch((err)=>{
          
          });
    }
    saveEditedTexts()
    {
        console.log("to save")
        var docData = {
          born :  this.state.Born, 
          birthPlace :  this.state.Birth_Place,
          age : this.state.Age ,
          country :  this.state.Country ,
          criketerRanking : this.state.Cricket_Rankings ,
          rankings : [this.state.T20_rankings,this.state.ODI_rankings,this.state.Test_rankings] ,
          battingStyle :   this.state.Batting_style ,
           bowlingStyle : this.state.Bowling_style ,
           jerseyNumber : this.state.Jersey_Number ,
            totalRuns : this.state.Total_runs,
            totalWickets : this.state.Total_wickets ,
            image : this.state.image
        };


        firebase.firestore().collection('players').doc(this.state.nameForUpload).update(docData).then(() => {
            this.openEditModal();
        })
        .catch((err)=>{
        
        });
    }

    deletePlayerHandler()
    {
        this.setState({
            spinnerStatus : true
          })
        firebase.firestore().collection('players').doc(this.state.nameForUpload).delete()
        .then((u)=>{
            console.log('deleted');
            console.log(u);
            setTimeout(() => {
                this.setState({
                    spinnerStatus : false
                });
              }, 1000);
            this.openEditModal();
        })
        .catch((err)=>{
            console.log(err);
        })
        
    }

    openEditModalForExisting(name)
    {
      
   console.log(name);
   firebase.firestore().collection('players').doc(name).get()
   .then((res)=>{
       console.log(res.data());
     this.setState({
        Born : res.data()['born'],
        Birth_Place : res.data()['birthPlace'],
        Age : res.data()['age'],
        Country : res.data()['country'],
        Cricket_Rankings : res.data()['criketerRanking'],
        T20_rankings : res.data()['rankings'][0],
        ODI_rankings : res.data()['rankings'][1],
        Test_rankings : res.data()['rankings'][2],
        Batting_style : res.data()['battingStyle'],
        Bowling_style : res.data()['bowlingStyle'],
        Jersey_Number : res.data()['jerseyNumber'],
        Total_runs : res.data()['totalRuns'],
        Total_wickets : res.data()['totalWickets'],
        image : res.data()['image']
     });

     firebase.firestore().collection('players').doc(name).collection('teams').orderBy('name')
    .onSnapshot(querySnapshot => {
     const data = querySnapshot.docs.map(doc => ({
         ...doc.data(),
         id: doc.id,
       }));
       console.log(data);
      console.log(data[0]);
      this.setState({
        teamList : data,  
        nameForUpload : name,
        openEditModal : !this.state.openEditModal,
        editOnly : true
      })
   });

   })
   .catch((err)=>console.log(err));

    
    }

    modelStatusHandler(name)
    {
      
      this.setState({
        spinnerStatus : !this.state.modelStatus
      })
      firebase.firestore().collection('players').doc(name).get()
      .then((res)=>{
          console.log(res.data());
          setTimeout(() => {
            this.setState({
                dataForModal : res.data(),
                modelStatus : !this.state.modelStatus,
                spinnerStatus : false
            });
          }, 1000);
       
      })
      .catch((err)=>{
        setTimeout(() => {
            this.setState({
                spinnerStatus : false
            });
          }, 1000);
      });
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
                {this.state.spinnerStatus ? <Spinner /> : 
                <div>
               {this.state.openEditModal ? <Edit deletePlayerHandler={this.deletePlayerHandler} status={this.state.editOnly} saveEditedTexts={this.state.editOnly ? this.saveEditedTexts : this.createNewPlayer} data={this.state.editOnly ? this.state.teamList : null} openEditModal={this.openEditModal} textChangeHandler={this.textChangeHandler}/> : null}
                {this.state.modelStatus && this.state.dataForModal? <InfoModal modelStatusHandler={this.modelStatusHandler} data={this.state.dataForModal}/> : null}
                <UploadButton openEditModal={this.openEditModal}/>
           {this.state.playersList ? this.state.playersList.map((item)=>{
            return <div style={{textAlign : 'center'}}>
                <PlayersCard dob={item['born']} country={item['country']} name={item['name']} age={item['age']} battingStyle={item['battingStyle']}
            bowlingStyle={item['bowlingStyle']} key={item['name']} image={item['image']} jerseyNumber={item['jerseyNumber']}
            rank={item['criketerRanking']} mainRole={item['mainRole']} rankings={item['rankings']} totalRuns={item['totalRuns']} totalWickets={item['totalWickets']}
            modelStatusHandler={this.modelStatusHandler} openEditModalForExisting={this.openEditModalForExisting}/>
            </div>
            
           }) : null}
           </div>
           }
            </div>

        );
    }
};

export default Players;