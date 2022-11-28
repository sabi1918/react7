import { Component, Componeny } from "react"
import './photo.css'
 class Web extends Component{
    state={
        name:"",
        surname:"",
        telephone:"",
        email:"",
        comment:"",
    }
    handleName=(e)=>{
        this.setState({name:e.target.value})
    }
    handleSurname=(e)=>{
        this.setState({surname:e.target.value})
    }
    handleTelephone=(e)=>{
        this.setState({telephone:e.target.value})
    }
    handleEmail=(e)=>{
        this.setState({email:e.target.value})
    }
    handleComment=(e)=>{
        this.setState({comment:e.target.value})
        
    }
    handleClick1=(e)=>{
        this.setState({name:''})
    }
    handleClick2=(e)=>{
        this.setState({surname:''})
    }
    handleClick3=(e)=>{
        this.setState({telephone:''})
    }
    handleClick5=(e)=>{
        this.setState({email:' '})
    }
    handleClick6=(e)=>{
        this.setState({comment:' '})
    }
    handleClick4=(e)=>{
        this.setState(alert('ish bitdi'))
    }
    
    handleCheckboxChange =()=>this.setState({type:this.state.type==='text'?'password':'text'})
    render(){
        console.log(this.state)
        return(
            <div className="Photo">
                <label htmlFor=".">Name:
                <input type="text" id="name"name="name"onChange={this.handleName}/><button type="button" className="btn" onClick={this.handleClick1}>x</button></label>
                <label htmlFor=".">Surname:
                <input type="text" id="surname"name="surname"onChange={this.handleName}/><button type="button" className="btn" onClick={this.handleClick2}>x</button></label>
                <label htmlFor=".">Telephone:
                <input type="text" id="telephone"name="telephone"onChange={this.handleName}/><button type="button" className="btn" onClick={this.handleClick3}>x</button></label>
                <label htmlFor=".">Email
                <input type="text" id="email"name="email"onChange={this.handleEmail}/><button type="button" className="btn" onClick={this.handleClick5}>x</button></label>
                <label htmlFor=".">Comment:
                <input type="text" id="comment"name="comment"onChange={this.handleName}/><button type="button" className="btn" onClick={this.handleClick6}>x</button></label>
                <form>
            <button type="submit"className="btn" onClick={this.handleClick4}>Submit</button>
          </form>
          
            
            </div>
            
            

            
    
        )
    }
 }
 export default Web