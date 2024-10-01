interface TeamsType{
    IPL:string[];
    score:number[];
    teamsDetails: { 
        team: string; 
        clr: string; 
        score:number
    }[];
}

function Teams(props:TeamsType) {
  return (
    <>
    <div>{props.IPL.map((team)=>(<><p>{team}</p></>))}</div>
    <div>{props.score.map((score)=>(<><p>{score}</p></>))}</div>
    <div>{props.teamsDetails.map((teamDetl)=>(<><p>{teamDetl.team} {teamDetl.clr} {teamDetl.score}</p></>))}</div>
    </>
  )
}

export default Teams