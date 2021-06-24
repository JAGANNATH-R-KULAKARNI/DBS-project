import React from 'react';
import firebase from '../../firebase/firebase';
import StadiumCard from './stadiumCard';
import InfoModal from './info';
import UploadButton from './uploadButtonUI';
import EditModal from './edit';
import Spinner from '../spinner/spinner';

class Stadiums extends React.Component
{
    constructor()
    {
        super();
        this.state={
            stadiumsList : null,
            modalStatus : false,
            dataForModal : null,
            spinnerStatus : false,
            nameForTeams : '',
            editOnly : false,
            editModalStatus : false,
            architect : '',
            establishment : '',
            image : '',
            location : '',
            maxCapacity : '',
            name : '',
            operator : '',
            owner : '',
            uploadName : ''
        }

        this.modalStatusHandler=this.modalStatusHandler.bind(this);
        this.editHandler=this.editHandler.bind(this);
        this.textChangeHandler=this.textChangeHandler.bind(this);
        this.closeHandler=this.closeHandler.bind(this);
        this.deleteHandler=this.deleteHandler.bind(this);
        this.saveHandler=this.saveHandler.bind(this);
        this.createNewStadium=this.createNewStadium.bind(this);
        this.openCreateModal=this.openCreateModal.bind(this);
    }

    createNewStadium()
    {
        this.setState({
            spinnerStatus : false,
        })
        var docData = {
            architect : this.state.architect,
            establishment : this.state.establishment,
            image : this.state.image,
            location : this.state.location,
            maxCapacity : this.state.maxCapacity,
            name : this.state.name,
            operator : this.state.operator,
            owner : this.state.owner,
          };
  
  
          firebase.firestore().collection('stadiums').doc(this.state.name).set(docData).then(() => {
            setTimeout(() => {
                this.setState({
                    spinnerStatus : false,
                    editOnly : false,
                    editModalStatus : false,
                });
              }, 1000);
          })
          .catch((err)=>{
          console.log(err);
          });
    }

    modalStatusHandler(name)
    {
        console.log('here')
        this.setState({
          spinnerStatus : !this.state.modalStatus  
        })
        firebase.firestore().collection('stadiums').doc(name).get()
        .then((res)=>{
            console.log(res.data());
              setTimeout(() => {
                this.setState({
                    dataForModal : res.data(),
                    nameForTeams : name,
                    modalStatus : !this.state.modalStatus,
                    spinnerStatus : false
                });
              }, 300);
        })
        .catch((err)=>console.log(err));
    }

    openCreateModal()
    {
      this.setState({
        editModalStatus : true,
        editOnly : false
      })
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

    editHandler(name)
    {
        console.log(this.state.editModalStatus)
        firebase.firestore().collection('stadiums').doc(name).get()
        .then((u)=>{
            this.setState({
                architect : u.data()['architect'],
                establishment : u.data()['establishment'],
                image : u.data()['image'],
                location : u.data()['location'],
                maxCapacity : u.data()['maxCapacity'],
                name : u.data()['name'],
                operator : u.data()['operator'],
                owner : u.data()['owner'],
                editOnly : true,
                editModalStatus : true,
                uploadName : name
            });
        })
        .catch((err)=>{
console.log(err);
        })
   
    }

    textChangeHandler(e)
    {
        console.log(e.target.name +" : "+e.target.value)
   this.setState({
       [e.target.name] : e.target.value
   })
    }

    closeHandler()
    {
        this.setState({
            editOnly : false,
            editModalStatus : false,
        })
    }

    deleteHandler()
    {
        this.setState({
            spinnerStatus : true
          })
        firebase.firestore().collection('stadiums').doc(this.state.uploadName).delete()
        .then((u)=>{
            console.log('deleted');
            console.log(u);
            setTimeout(() => {
                this.setState({
                    spinnerStatus : false,
                    editOnly : false,
                    editModalStatus : false,
                });
              }, 1000);
          
        })
        .catch((err)=>{
            setTimeout(() => {
                this.setState({
                    spinnerStatus : false,
                    editOnly : false,
                    editModalStatus : false,
                });
              }, 1000);
        })
    }

    saveHandler()
    {
        this.setState({
            spinnerStatus : true
        })
        const docData={
            architect : this.state.architect,
            establishment : this.state.establishment,
            image : this.state.image,
            location : this.state.location,
            maxCapacity : this.state.maxCapacity,
            name : this.state.name,
            operator : this.state.operator,
            owner : this.state.owner,
        }
        firebase.firestore().collection('stadiums').doc(this.state.uploadName).update(docData).then(() => {
            setTimeout(() => {
                this.setState({
                    spinnerStatus : false,
                    editOnly : false,
                    editModalStatus : false,
                });
              }, 400);
        })
        .catch((err)=>{
            setTimeout(() => {
                this.setState({
                    spinnerStatus : false,
                    editOnly : false,
                    editModalStatus : false,
                });
              }, 400);
        });
    }

    render()
    {
        return (
            <div>
                {this.state.spinnerStatus ? <Spinner /> :
                 <div>
               {this.state.editModalStatus ?
               <EditModal saveHandler={this.state.editOnly ? this.saveHandler : this.createNewStadium}
               deleteHandler={this.deleteHandler} deleteButtonStatus={this.state.editOnly}
               textChangeHandler={this.textChangeHandler} closeHandler={this.closeHandler}
               /> : null}
                {this.state.modalStatus && this.state.dataForModal ? <InfoModal data={this.state.dataForModal} 
               nameForTeams={this.state.nameForTeams} modalStatusHandler={this.modalStatusHandler}/> : null}
                <UploadButton openCreateModal={this.openCreateModal}/>
           {this.state.stadiumsList ? this.state.stadiumsList.map((item)=>{
            return <StadiumCard editHandler={this.editHandler} key={item['name']} architect={item['architect']} establishment={item['establishment']}
            image={item['image']} location={item['location']} name={item['name']} operator={item['operator']}
            owner={item['owner']} modalStatusHandler={this.modalStatusHandler}/>;
           }) : null}
          </div>
        }
            </div>

        );
    }
};

export default Stadiums;