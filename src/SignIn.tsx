import { useState } from "react"


function SignIn() {
    // const [isSignIn, setSignIn] = useState(false);
    interface UserType {
      name:string,
      email:string
    }
    const [user, setUser] = useState<UserType | null>(null);

    const handleSignIn=()=>{
        // setSignIn(true)
        setUser({
          name:"Umar",
          email:"umar@gmail.com"
        })
    }
    const handleSignOut =()=>{
        // setSignIn(0)  // this will give error because we are using typescript with react if we use plain js with react then it will not show any error.
        // setSignIn(false)
        setUser(null);
    }
  return (
    <div>
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleSignOut}>Sign Out</button>
        {/* <div>{isSignIn?"Sign In":"Sign Out"}</div> */}
        <div>{user?.name}</div>
        <div>{user?.email}</div>
    </div>
  )
}

export default SignIn