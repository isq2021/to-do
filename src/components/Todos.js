import React from "react";
import Li from "./Li"

 
class Todos extends React.Component{
    render(){
        return(
            <>
             <div className="Todos-main-container">
                 <ul>
                     <Li/>
                 </ul>

             </div>
    
            
            </>
        )
    }
}
export default Todos