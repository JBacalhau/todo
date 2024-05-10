import { StyledTask } from "./styles";

export function Task(props){
    return(
        <StyledTask>
            <p>{props.titulo}</p>
            <button onClick={()=>{props.onRemoveTask(props.id)}}>X</button>
        </StyledTask>
    )   
}