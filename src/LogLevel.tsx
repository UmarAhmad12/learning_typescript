interface LogType {
    // status:string
    status:"info" | "warn" | "error"
}
function LogLevel(props:LogType) {
    let status;
    if(props.status === "info"){
        status="Info"
    }
    else if(props.status==="warn"){
        status="Warn"
    }
    else if(props.status==="error"){
        status="ERROR"
    }
  return (
    <div>{status}</div>
  )
}

export default LogLevel