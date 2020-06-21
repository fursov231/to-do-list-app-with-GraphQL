const Todo = require('../models/todo')

const users = [
    {name: 'Igor', age: 20, email: 'igor@f.ru'},
    {name: 'Darya', age: 18, email: 'darya@d.ru'},
]

module.exports = {
    test() {
        return {
            count: Math.trunc(Math.random() * 10),
            users
        }
    },
    random({min, max, count}) {
        const arr = []
        for (let i = 0; i < count; i++) {
            const random = Math.random() * (max - min) + min
            arr.push(random)
        }
        return arr
    },
    addTestUser({user: {name, email}}) {
        const user = {
            name,
            email,
            age: Math.ceil(Math.random() * 30)
        }
        users.push(user)
        return user
    },
    async getTodos() {
        try {
            return await Todo.findAll()
        } catch (e) {
            throw new Error('Fetch todos isn`t available')
        }

    },
    async createTodo({todo}) {
        console.log(todo)
        try {
            return await Todo.create({
                title: todo.title,
                done: false,
            })
            return todo

        } catch (e) {
            throw new Error('Title is required')
        }
    },
    async completeTodo({id}) {
        try {
            const todo = await Todo.findByPk(id)
            todo.done = true
            await todo.save()
            return todo
        } catch (e) {
            console.log('Id is required')
        }
    },
    async deleteTodo({id}) {
        try {
            const todos = await Todo.findAll({
                where: {id}
            })
            await todos[0].destroy()
            return true
        } catch (e) {
            throw new Error('Id is required')
            return false
        }
    }
}
