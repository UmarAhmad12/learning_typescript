
 interface PersonDetailsType {
    details : {
        Fname : string
        Lname:string
        Age:number
        isVegan:boolean
        eligible:boolean
        id:{
            rel_id:string
            fake_id:string
        }
    }
 }
function PersonDetails(props:PersonDetailsType) {
  return (
    <div>
        <div>First Name - {props.details.Fname}</div>
        <div>Last Name - {props.details.Lname}</div>
        <div>Age - {props.details.Age}</div>
        <div>{props.details.isVegan? <p>He is vegan</p>:<p>He is not vegan</p>}</div>
        <p>{props.details.eligible?<h1>This is real id {props.details.id.rel_id}</h1>:<h1>This is {props.details.id.fake_id} fake id</h1>}</p>
    </div>
  )
}

export default PersonDetails