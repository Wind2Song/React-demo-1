import React from "react";

class App extends React.Component{
    constructor(props){
      super(props)
      this.state = {
          n:1,
          width:undefined
      }
    }
    onClick = ()=>{
      this.setState( state => ({n:state.n+1}))
      // this.setState( state => ({n:state.n-1}))
    }
    // shouldComponentUpdate(newProps,newState){
    //   if(newState.n === this.state.n){
    //     return false
    //   }else{
    //     return true
    //   }
    // }
    componentDidMount(){
      const div = document.getElementById('xxx')
      const {width} = div.getBoundingClientRect()
      console.log(width)
      this.setState({width})
    }
    render(){
      let message;
      if(this.state.n %2 ===1){
        message = <div id="xxx">偶数{this.state.width}</div>
      }else{
        message = <span>奇数</span>
      }
      
      return (
        <>
          {message}
          <button onClick={this.onClick}>+1</button>
        </>
      )
    }
}

export default App;
