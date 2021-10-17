DOM 操作 数据操作  事件出来函数的绑定 

DOM 操作 数据操作  之间没有任何的联系

TodoList -> 

观察者模式
add -> addTodo addItem

function addTodo() {
    // 执行数据
    // addItem
}

addTodo -> todo -> addItem(todo) -> 操作DOM

function test(todo) {
    Promise -> addTodo(todo);  resolve(todo);  then  todo -> addItem
    addItem(todo);
}

add        addTodo       addItem    
remove     removeTodo    removeItem     
toggle     toggleTodo    toggleItem      


