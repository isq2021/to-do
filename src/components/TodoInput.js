import React from "react";



class TodoInput extends React.Component{
    constructor() {
        super()
        this.state = ({ text : ''

        })
    }

    inputTextState(event) {
        this.setState = ({text:" " + event.target.value })
        
    }

 



    render(){
        
        return(

            <>
            <div className='to-do-input-container'>
                <input type="text" onChange = {this.inputTextState } />
                <button>Add</button>

            </div>
            
            </>
        )

    }
}
export default TodoInput;