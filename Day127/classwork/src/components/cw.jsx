

function Loggers() {
    const logger = (param) =>{{
      console.log(param);
    }}
  
    return (
      <>
        <p onClick={logger}></p>
      </>
    )
  }
  
  export default Loggers
  