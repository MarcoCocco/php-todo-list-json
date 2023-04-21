const { createApp } = Vue;

createApp({

    data() {
        return {

            toDoList: [],
            toDoItem: '',

        }
    },

    methods: {

        //Richiesta API dell'array json
        getToDoList() {

            axios.get('./server.php').then(response => {

                this.toDoList = response.data;


            });
        },

        addNewToDo() {
            //Creazione nuovo elemento dell'oggetto
            let data = {
                toDoItem: '',
            }
            
            data.toDoItem = this.toDoItem;

            //this.toDoList.push(this.toDoItem);
            this.toDoItem = '';

            axios.post('./server.php', data, { headers: { 'Content-Type': 'multipart/form-data' } }).then(response => {
                this.getToDoList();
            });
           
        },


    },

    mounted() {
        this.getToDoList();
    },
}).mount('#app');