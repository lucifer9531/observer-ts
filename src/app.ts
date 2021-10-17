import TodoList, {ITodo} from './TodoList'

    ;((doc) => {

    const oInput: HTMLInputElement = doc.querySelector('input');
    const oAddBtn: HTMLElement = doc.querySelector('.add-btn');
    const oTodoList: HTMLElement = doc.querySelector('.todo-list');

    const todoList: TodoList = TodoList.create(oTodoList);

    const init = (): void => {
        bindEvent();
    }

    function bindEvent() {
        oAddBtn.addEventListener('click', handleAddBtnClick, false);
        oTodoList.addEventListener('click', handleListClick, false);
    }

    function handleListClick(e: MouseEvent) {
         const tar = e.target as HTMLElement;
         const tagName = tar.tagName.toLowerCase();

         if (tagName === 'input' || tagName === 'button') {
             const id: number = parseInt(tar.dataset.id);
             switch (tagName) {
                 case 'input':
                     todoList.notify<number>('toggle', id);
                     break;
                 case 'button':
                     todoList.notify<number>('remove', id);
                     break;
                 default:
                     break;
             }
         }
    }

    function handleAddBtnClick() {
        const val: string = oInput.value.trim();

        if (!val.length)  {
            return;
        }
        todoList.notify<ITodo>('add', {
            id: new Date().getTime(),
            content: val,
            completed: false
        })
        oInput.value = '';
    }

    init();
})(document)
