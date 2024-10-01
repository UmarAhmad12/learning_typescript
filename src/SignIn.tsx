import { useState } from "react"


function SignIn() {
    const [isSignIn, setSignIn] = useState(false);
    const handleSignIn=()=>{
        setSignIn(true)
    }
    const handleSignOut =()=>{
        // setSignIn(0)  // this will give error because we are using typescript with react if we use plain js with react then it will not show any error.
        setSignIn(false)
    }
  return (
    <div>
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleSignOut}>Sign Out</button>
        <div>{isSignIn?"Sign In":"Sign Out"}</div>
    </div>
  )
}

export default SignIn