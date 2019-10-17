//1.------------------------------------------------------------------//
const todos = [
    {
        text:'Clean the House',
        completed: false
    },
    {
        text:'Give cuddles to the Lady Cat',
        completed: true
    },
    {
        text:'Buy vegetables from Thomas Fruit',
        completed:false
    },
    {
        text:'Study JavaScript',
        completed: true
    },
    {
        text: 'Do mindfullness - 20 min',
        completed: false
    },
    {
        text:' Read a Book',
        completed: false
    },
    {
        text:'Paint or Draw by looking some tips in internet',
        completed: false
    },{
        text: 'Wake up at 5h40',
        completed: true
    },{
        text:'Lunch',
        completed: false
    }
    
]

//7.-----------------------------------------------------------------------------//
const filters = {
    searchText: ''
}



//2.-----------------------------------------------------------------------------//

const sortTodos = function (todos){

    const organize = todos.sort(function (a,b){

        if( (!a.completed && b.completed) && (a.text.toLowerCase() < b.text.toLowerCase())){
            return -1
        } else if ((a.completed && !b.completed) && (a.text.toLowerCase() >b.text.toLowerCase() )) {
            return 1
        }else{
            return 0
        }

         
    })

    return organize
    
}

sortTodos(todos)


//3.---------------------------------------------------------------------------//

const numberOfIncompleted = function(todos){

    
    const lengthIncomplete = todos.filter(function(todo){
        return !todo.completed
    })

    return lengthIncomplete.length
}

const OutputTitleIncompleted = function(){
    document.querySelector('#h4-container').innerHTML = ''

    const summary = document.createElement('h4')
    summary.textContent = ` You have ${numberOfIncompleted(todos)} To-Dos´s Left `
    document.querySelector('#h4-container').appendChild(summary)
}
OutputTitleIncompleted()



//8.---------------------------------------------------------------------------//

const renderTodos = function (todos, filters) {

    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })


    OutputTitleIncompleted()

    outputTodos(filteredTodos)
}

//17--------------------------------------------------------------------------//

const newTodoObject = function (titleValue) {

    todos.push({
        text: titleValue,
        completed: false
    })

    

}

//4 e 12.----------------------------------------------------------------------------//

const outputTodos = function(todos){

    document.querySelector('#p-container').innerHTML = ''

    //19.-----------//
    sortTodos(todos)

    todos.forEach(function (todo) {

        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#p-container').appendChild(p)

    })
}

outputTodos(todos)






//6--------------------------------------------------------------------------//

const searchTodo = document.querySelector('#search-todo')

searchTodo.addEventListener('input', function(e){

    //10--------------------------------/
    filters.searchText = e.target.value

    //11.-------------------------------/
    renderTodos(todos, filters)
})



//14--------------------------------------------------------------------------//
const addTodo = document.querySelector('#form-add-todo')
const input = document.querySelector('#add-new-todo')

input.focus()

addTodo. addEventListener('submit', function(e){
    
    //15.------------------//
    e.preventDefault()
    //16.------------------------------------------------//
    const getnewNote = e.target.elements.addnewtodo.value

    //17--------------//
    newTodoObject(getnewNote)
   
    //3----------------//
    OutputTitleIncompleted()

    //18--------------//
    outputTodos(todos)

    e.target.elements.addnewtodo.value = ''
    input.focus()

})