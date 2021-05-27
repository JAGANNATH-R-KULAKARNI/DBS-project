import React,{Component} from 'react';
import TextField from './textField';
import TextField2 from './textField2';
import Send from './sendButton';
import AttachFileIcon from '@material-ui/icons/AttachFile';

class TextFieldMid extends Component{

    constructor()
    {
        super();
        this.state={
            textFieldReRender : false 
        };
       this.clicked=this.clicked.bind(this);
    }

    clicked()
    {
        console.log("clicked");
      
        this.props.handleClick();

        this.setState({
            textFieldReRender : !this.state.textFieldReRender
        });
    }
    render()
    {
        return (
            <div>
                
                
                {this.state.textFieldReRender ? <TextField2 textFieldHandle={this.props.textFieldHandle}/> : <TextField textFieldHandle={this.props.textFieldHandle}/>}
                 <Send sendStatus={this.props.sendStatus} clicked={this.clicked}/>
                     
            </div>
        );
    }
};

export default TextFieldMid;