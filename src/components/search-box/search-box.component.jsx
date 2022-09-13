
import "./search-box.style.css"


const SearchBox = (props) =>  {
    
    const {onChange , placeholder, className} = props
    return(
        <div>
            <input 
            type='search' 
            placeholder={placeholder}
            className={`search-box ${className}`} 
            onChange={onChange} 
            
        />
        </div>
    )
}


export default SearchBox;