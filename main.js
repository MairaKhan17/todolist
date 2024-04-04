#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let conditions = true;
async function createTodo(todos) {
    while (conditions) {
        let ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: chalk.magentaBright.bold("select an option"),
            choices: ["add", "update", "view", "delete"],
        });
        if (ans.select == "add") {
            let addTodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: chalk.yellow("add item in your todos"),
            });
            todos.push(addTodo.todo);
            console.log(todos);
        }
        if (ans.select == "update") {
            let updateTodo = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: chalk.greenBright("select item for update"),
                choices: todos.map((item) => item),
            });
            let addTodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "add item..",
            });
            let newTodos = todos.filter((val) => val !== updateTodo.todo);
            todos = [...newTodos, addTodo.todo];
            console.log(todos);
        }
        if (ans.select == "view") {
            console.log(todos);
        }
        if (ans.select == "delete") {
            let deleteTodo = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: chalk.redBright.bgBlack("select item for delete"),
                choices: todos.map((item) => item),
            });
            let newTodos = todos.filter((val) => val !== deleteTodo.todo);
            todos = [...newTodos];
            console.log(todos);
        }
    }
}
createTodo(todolist);
// let todolist = [];
// let conditions = true;
// console.log(chalk.green.bold("\n\t Welcome to Maira khan-TODO LIST Program \n"));
// while (conditions) {
//   let addTask = await inquirer.prompt([
//     {
//       name: "task",
//       type: "input",
//       message: "enter your new task:"
//     }
//   ]);
//   todolist.push(addTask.task);
//   console.log(' task added in to do list successfully');
//   let addMoreTask = await inquirer.prompt([
//     {
//       name: "addmore",
//       type: "confirm",
//       message: "Do you want to add more task?",
//       default: "false",
//     }
//   ]);
//   conditions = addMoreTask.addmore;
// }
// console.log("your TODO List has been updated" ,todolist );
