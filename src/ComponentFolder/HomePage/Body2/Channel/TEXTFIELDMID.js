import React,{Component} from 'react';
import TextField from './textField';
import Send from './sendButton';

class TextFieldMid extends Component{

    constructor()
    {
        super();
       this.clicked=this.clicked.bind(this);
    }

    clicked()
    {
        console.log("clicked");
        this.forceUpdate();
        this.props.handleClick();
    }
    render()
    {
        return (
            <div>
                
                
                 <TextField textFieldHandle={this.props.textFieldHandle}/>
                 <Send sendStatus={this.props.sendStatus} clicked={this.clicked}/>
                     
            </div>
        );
    }
};

export default TextFieldMid;