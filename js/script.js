const { createApp } = Vue;

createApp({

    data() {
        return {

            toDoList: [],
            toDoItem: '',

        }
    },

    methods: {

        getToDoList() {
            axios.get('./server.php').then(response => {

                this.toDoList = response.data;
                console.log(response.data)

            });
        },

        addNewToDo() {
            let newToDoObj = {
                element: this.toDoItem,
                isDone: false
            }

            this.toDoList.push(newToDoObj);
            this.toDoItem = '';
        },

    },

    mounted() {
        this.getToDoList();
    },

}).mount('#app');