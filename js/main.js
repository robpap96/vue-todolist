"use strict";
const { createApp } = Vue

  createApp({
    data() {
        return {
            newTodo: '',
            tasks: [
                'andare dal medico',
                'comprare la dro',
                'devolvere in beneficienza',
            ],

        }
    },
    methods: {
        addTask(task) {
            this.tasks.push(task);
            this.newTodo = '';
        }, 
        removeTask(task){
            this.tasks.splice(task, 1);
        },
    }
    
  }).mount('#app')
