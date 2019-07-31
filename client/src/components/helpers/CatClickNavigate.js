import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {Link} from "@material-ui/core";
import {navigate} from "@reach/router";

class CatClickNavigate extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {
            path
        }
            = this.props;
        return (

            <div id={"catClickMessage"}>
                <p>Cat clicked! Please click the 'next' button to continue.</p>
                <br/>
                <Button component={Link} onClick={navigate(path)} variant="contained">Next</Button>
            </div>
        );
    }
}

export default CatClickNavigate;