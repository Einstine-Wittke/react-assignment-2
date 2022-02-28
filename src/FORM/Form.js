import React, { Component } from 'react'

export class Form extends Component {

state={
    name:"",
    department:"",
    rating:"",
    user:[]
}
handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}

handleSubmit=(e)=>{
    e.preventDefault()
    console.log(this.state);

    const employeeObj={
        name:this.state.name,
        department:this.state.department,
        rating:this.state.rating,
    }

    const employeeArr = this.state.user;
    employeeArr.push(employeeObj);
    this.setState({user : employeeArr});
}

  render() {
      console.log(this.state.user,"USER");
    return (
      <div>
          <h1>EMPLOYEE FEEDBACK FORM</h1>
          <form className='container'>
              <label for="name">Name : </label>
              <input type="text" name="name" id="name" placeholder='Enter your name' onChange={this.handleChange} value={this.state.name}/>
              <br/>
              <label for="name">Department : </label>
              <input type="text" name="department" id="department" placeholder='Enter your department'  onChange={this.handleChange} value={this.state.department}/>
              <br/>
              <label for="name">Rating : </label>
              <input type="number" name="rating" id="name" placeholder='Give ratings' onChange={this.handleChange} value={this.state.rating}/>
              <br/>
              <button onClick={this.handleSubmit}>SUBMIT</button>
          </form>
                  <div className='container2'>
          {this.state.user.map((value,index)=>{
              return(
                  <div className='box'>
                   Name: {value.name } |Department: {value.department} |Rating: {value.rating}
                  </div>
          )
          })}
                  </div>
      </div>
    )
  }
}

export default Form