import { useEffect, useState } from "react";
import { Task } from "../Task/task";
import { StyledList } from "./styles";


export function List(){
    //Eetado
    //[nome do estado, função atualizadora] = useState(valçor inicial do estado)
    //const [tasks, setTasks] = useState([{id : 1, titulo: 'Fazer Compras'}]);//Hook Ex para ver a trabalhar
    //if(localStorage.getItem('tarfas' != null) converte seu valor para obecto senão, inicia com array vazio)
    const [tasks, setTasks] =
     useState(localStorage.getItem('tarefas') ? JSON.parse(localStorage.getItem('tarefas')) : []);//Hook

    const [newTask, setNewTask] = useState('');


    // const tasks = [
    //     { id: 1, titulo: 'Pagar Contas'},
    //     { id: 2, titulo: 'Estudar React'},
    //     { id: 3, titulo: 'Fazer Compras'},
    // ];

    function addTask(e){
        e.preventDefault();// Cancelamento do envento padrão do botão
        //tasks.push({id;2, titulo: 'Tarefa teste'})
        //Atualizando o valor do estado (o componente será atualizado)

        //...task -> copiando o conteúdo do Array (Spread Operator)
        setTasks([...tasks, {id : new Date().getTime(), titulo: newTask}]);
        setNewTask('');


    }

    //função para botão remover produto
    function removeTask(id){
        //console.log(`Tarefa ${id} removida`);
        setTasks(
        //Percorrendo o Array em busca das tarefas que tem seu id duferente do id passando no click do X
        tasks.filter(task => (task.id != id))
        );
    }

//Função especial do react que roda após toda a montagrm do componente
//Quando o componente foi totalmente rendezido na tela
//[task] dependência, ou seja, o que vai fazer o useEffect ser executado,
//se estiver vazio, o useEffect só é executado uma vez 

    useEffect(()=>{
        localStorage.setItem('tarefas',JSON.stringify(tasks));
    },[tasks])

    return (
        <StyledList>
        
            <form>
                <input
                type="text"
                placeholder="Digite sua tarefa"
                value={newTask}
                onChange={(e)=>{setNewTask(e.target.value)}}
                />

                <button onClick={addTask} disabled={newTask==''} >Criar</button>
            </form>


            {
                tasks.map(task =>(

                    //onRemoveTask={removeTask} -> passando a função como propriedade para o componente
                   <Task titulo={task.titulo} id={task.id} key={task.id} onRemoveTask={removeTask}/>
                ))
            }

        </StyledList>
    )


}