"use strict";
const { createApp } = Vue

  createApp({
    data() {
        return {
            newTask: '',
            tasks: [ 
                {
                    text: 'andare dal medico',
                    done: false,
                },
                {
                    text: 'andare dal s ad damedico',
                    done: true,
                },
                {
                    text: 'andare dal mesacsadico',
                    done: false,
                },
            ],

        }
    },
    methods: {
        addTask() {
            const objNewTask = {
                text: this.newTask,
                done: false,
            }
            this.text.push(objNewTask.text);
            this.newTask = '';

        }, 
        removeTask(task){
            this.tasks.splice(task, 1);
        },
        wellDone(task){
            if(task.done === false){
                task.done = true;
            } else {
                task.done = false;
            }
        },
    }
    
  }).mount('#app')
