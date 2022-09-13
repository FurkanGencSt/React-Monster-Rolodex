

const CardContainer = (props)  => ( 
    <div className="card-container" key={props.id}>
        <img alt={`monster ${props.name}`} src={`https://robohash.org/${props.id}?set=set3&size=180x180`}/>
        <h1>{props.name}</h1>
            <p>{props.email}</p>
    </div>
)

export default CardContainer;