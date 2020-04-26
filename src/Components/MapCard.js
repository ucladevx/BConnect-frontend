import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

//IGNORE THIS FOR NOW, REFACTOR PROVED MESSY 
function MapCard(props){

    return (
        <React.Fragment>
                <span style={{float: 'right', margin: '7px'}} onClick={()=>{this.props.hide}}>X</span>
                <Typography variant='h3'> {this.props.data.name} </Typography>
                <Typography> {this.props.data.major} </Typography>
                <Typography> Location: {this.props.data.lng},{this.props.data.lng} </Typography>
                <img style={{height: '40%', width: '70%', margin: 'auto'}} src={'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png'}/>
                <Typography> Bio: Duis et laoreet ante. Curabitur facilisis rutrum ultrices. Lorem ipsum dolor si
                  t amet, consectetur adipiscing elit. Nunc dapibus nisi a risus mattis ullamcorper. Interdum et malesuada fames ac ante
                   ipsum primis in faucibus. Fusce porta magna nibh, ut scelerisque ex luctus luctus. 
                </Typography>
                <Button style={{backgroundColor: '#1793eb'}}  variant="contained" color="primary">
                    Connect now!
                </Button>
        </React.Fragment>
    );
}

export default MapCard;
