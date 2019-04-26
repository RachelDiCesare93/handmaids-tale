import React, { Component } from 'react';
import axios from 'axios';
import HandmaidCard from './HandmaidCard'

class Handmaid extends Component {
    constructor(props){
        super(props);
        this.state = {
            handmaid: null
        };
    }

    componentDidMount() {
        this.fetchHandmaid(this.props.match.params.id)
    }

    fetchHandmaid = id => {
    axios
      .get(`http://localhost:5000/api/handmaids/${id}`)
      .then(response => {
          this.setState(() => ({handmaid: response.data}));
      })
      .catch(error => {
          console.error(error);
      });
   };

   render() {
       if (!this.state.handmaid) {
        return <div> Loading handmaid information...</div>
     }
     const {handmaid} = this.state;
     return (
         <div className="handmaid-wrapper">
         <HandmaidCard handmaid={handmaid} />
         </div>
     );
   }
}

export default Handmaid;