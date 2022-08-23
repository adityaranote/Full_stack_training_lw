function Mylw(props){

    console.log(props)
    return (
    <div className="mypost">
      
    <p> Name : {props.name}</p>
    <img src ='https://www.lwindia.com/images/smalllogog.gif' />
    <p> my email address is : {props.email}</p>
    <p> my page likes is {props.likes}</p>
    </div>
    );
  }

  function MyPost(){
    return <div>
      <div>i m div</div>
      <p>this is para1</p>
      </div>
  }

  export  { Mylw }