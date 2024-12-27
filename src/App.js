function App()
{
  return(
    <>
    <h1>Enter Details of Employee</h1>
    
    <div style={{display:'flex'}}>
    <div style={{color:'red',height:'200px', width:'400px',backgroundColor:'blue',border:'4px solid red',borderRadius:'1em'}}>

      <label>Name of Employee</label>
      <br></br>
      <input type="text"></input>
      <br></br>
      <label>Age</label>
      <br></br>
      <input type="text"></input>
      <br></br>
      <label>Date of Joininig</label>
      <br></br>
      <input type="text"></input>
      <br></br>
      <label>Designation</label>
      <br></br>
      <input type="date"></input>

</div>

<div style={{height:'200px',width:'400px',backgroundColor:'red',marginLeft:'10px',border:'4px solid yellow',borderRadius:'1em'}}>

</div>
    </div>
   
    </>
  )
  
}
export default App