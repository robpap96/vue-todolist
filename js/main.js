"use strict";
const { createApp } = Vue

  createApp({
    data() {
        return {
            newTask: '',
            tasks: [
                'andare dal medico',
                'comprare la dro',
                'devolvere in beneficienza',
            ],

        }
    },
    methods: {
        addTask() {
            const objNewTask = {
                text: this.newTask,
                done: false,
            }
            this.tasks.push(this.newTask);
            this.newTask = '';
        }, 
        removeTask(task){
            this.tasks.splice(task, 1);
        },
        wellDone(){
            if(this.done === false){
                this.done = true;
            } else {
                this.done = false;
            }

        },
        isDone(task){
            if(task.done === true){
                //debug
                console.log(task.done);
                return true;
            } else {
                //debug
                console.log(task.done);
                return false;
            }

        }
    
    }
    
  }).mount('#app')
