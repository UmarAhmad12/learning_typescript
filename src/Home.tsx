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
    // To remove error here we will add question mark and it means it is optional(means if someone pass age i will display if not then i will not display)
    age?:number
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