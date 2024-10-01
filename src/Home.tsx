// we can define in two way

// ++++++++++++++++++ 1st way ++++++

// interface propsType{
//     name:string
//     age:number
//     isEligible:boolean
//     id:string

// ++++++++++ 2nd way ++++++++++

type propsType = {
    name:string
    age:number
    isEligible:boolean
    id:string
}
function Home(props:propsType) {
  return (
    <>
    <div>Hey {props.name}, Welcome to home page {props.id}</div>
    {props.isEligible?<p>Your age is {props.age} and you are eligible to vote.</p>:<p>You can not vote.</p>}
    
    </>
  )
}

export default Home