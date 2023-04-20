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
            this.toDoList.push(this.toDoItem);
            this.toDoItem = '';
        },

    },

    mounted() {
        this.getToDoList();
    },

}).mount('#app');