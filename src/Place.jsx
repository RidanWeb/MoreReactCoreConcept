export default function Place({place}){

    const {name, independent} = place;

    return(

        <div style={{border: '2px solid Yellow', padding: '15px', marginTop: '10px', borderRadius: '15px'}}>
            <h5>Countries : {name.common}</h5>
            <h5>Independent : {independent ? "Yes" : "No"}</h5>
        </div>    
    )
}