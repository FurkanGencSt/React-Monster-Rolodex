
import "./card-list.style.css"
import "./card.style.css"
import "./card-container.component"
import CardContainer from "./card-container.component";


const CardList= ({ monsters }) => (
    <div>        
        <div className="card-list" >     
        {monsters.map(item => {             
            return (
                <div>          
                <CardContainer 
                    id={item.id}
                    name={item.name}
                    email={item.email}
                />
                </div>                                           
        )})}
        </div>
    </div>       
)


export default CardList;