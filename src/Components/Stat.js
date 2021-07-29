import React, {Component} from 'react';
import photo from '../Components/photo.jpg';
class stat extends Component { 
    constructor(props){
        super(props)
        this.state={ person:{
            fullName: 'Dhekra Nsir', 
            imgSrc: photo,
            bio:'I am a 29-year-old married woman. I live in Dar Chaabane,Nabeul,Tunisia.I studied Agronomy studies at ISA Sousse where I graduated as an engineer. I have decided to switch to a different career path, namely web development.Hence, I have signed up to the GoMyCode fullstack program in order to acquire a deeper understanding of this field of study.',
            profession:'Web Developer'}, 
            show:true,
            date: new Date()
     }
    }
    handleClick=()=>this.setState({show:!this.state.show})
    count=()=>this.setState({date: new Date() });
    componentDidMount() {
        setInterval(() => this.count(), 1000 );
      }
    
      
    render(){
        return(
            <div>
                {this.state.show===true?<div style={{backgroundColor:'beige',width:'500px',textAlign:'center',boxShadow:'0px 1px 10px 1px gray'}}>
                    <img style={{width:'200px',height:'200px',borderRadius:'50%',padding:'10px'}}src= {this.state.person.imgSrc} alt=""/>
                    <h3 style={{fontStyle:'italic',fontSize:'2em',color:'brown'}}>{this.state.person.fullName}</h3>
                    <h5 style={{fontSize:'1em',color:'chocolate',margin:'0'}}>{this.state.person.profession}</h5>
                    <p style={{fontStyle:'oblique'}}>{this.state.person.bio}</p>

                </div>:<div></div>}
                <button style={{backgroundColor:'darkmagenta',border: 'none',color: 'white',padding: '15px 32px',
  textAlign: 'center',fontSize: 16,margin: '4px 2px' ,cursor: 'pointer'}} onClick={this.handleClick}>Profile</button>

            </div>

        )
    }  
}
export default stat;
