const request= require('supertest')
const app = require('../src/app')
const Task = require('../src/models/task')
const { userOneId,userOne, userTwo, userTwoId, taskOne, setupDB } = require('./fixtures/db');

beforeEach(setupDB);

test('Should create task for user', async () => {
    const response  = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            description: 'test case'
        })
        .expect(201)
    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull()
    expect(task.completed).toEqual(false)
})

test('Should get all tasks for user one', async () => {
    const response = await request(app)
    .get('/tasks')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
    const tasks = await Task.find({owner:userOneId})
    expect(response.body.length).toEqual(2);
})

test('Should not allow user two to delete task from user one', async () => {
    const response = await request(app)
    .delete(`/task/${taskOne._id}`)
    .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
    .send()
    .expect(404)
    const task = await Task.findById(taskOne._id)
    expect(task).not.toBeNull()
})