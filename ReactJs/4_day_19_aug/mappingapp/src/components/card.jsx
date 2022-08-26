function MyDocker(props){

    return (
    
    <div className= "card">
  
      <div className="top">
        <div className="logoimage">
          <img className="mylogo" src={props.logoimage} />
        </div>
        <div className="buttoncontrols">
         <button> restart </button>
         <br />
         <button> stop </button>
            </div>
        <div className="currentstatus">
          {props.status}
        </div>
      </div>
  
      
      <div className="bottom">
        <div className="liveterminal">
          {props.terminal}
        </div>
      <div className="runscriptsforos" ></div>
         run script
      </div>
      
  
      </div>
      )
}

export { MyDocker } 