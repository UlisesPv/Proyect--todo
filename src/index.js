import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml }  from './js/componentes';


export const todoList = new TodoList();

// todoList.todos.forEach( todo =>crearTodoHtml( todo ) ); //Nota: cuando queremos enviar un solo 
//argumento a una funcion o Metodo que tenemos aca mismo podemos enviarlos de la forma estructurada abajo.
todoList.todos.forEach( crearTodoHtml ); //Esto funciona solo si hay un argumento

const newTodo = new Todo('Aprender Javascript');  //inserción de tipo todo
// todoList.nuevoTodo( newTodo );
todoList.todos[0].imprimirClase();
// newTodo.imprimirClase(); 
  
console.log( 'todos', todoList.todos );