const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

let app = require('./../server');
let Todo = require('./../models/todo');

const todos = [{
    _id: new ObjectID(),
    text: 'learn 1'
}, {
    _id: new ObjectID(),
    text: 'learn 2'
}];

beforeEach(done => {
    Todo.remove().then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
});

describe('POST /todos', () => {

    it('Should add new todo', done => {
        let text = 'learn 3';
        request(app)
            .post('/todos')
            .send({text})
            .expect(200) // status
            .expect(res => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    done(err);
                }

                // check if data has been inserted
                Todo.find({text}).then(todos => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch(err => done(err));
            });
        // done();
    });

    it('Should not add new todo', done => {

        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {

                if (err) {
                    done(err);
                }

                // make sure no data inserted
                Todo.find().then(todos => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch(err => done(err));
            });
    });
});

describe('GET /todos', () => {

    it('Should list all todos', done => {

        request(app)
            .get('/todos')
            .expect(200)
            .expect(res => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    });
});

describe('GET /todos/:id', () => {

    it('Should return todo', done => {

        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect(res => {
                expect(res.body.todo.text).toBe(todos[0].text);
            })
            .end(done);
    });

    it('Should return 404 if not found', done => {

        request(app)
            .get(`/todos/${new ObjectID()}`)
            .expect(404)
            .end(done);
    });

    it('Should return 404 if id not valid', done => {

        request(app)
            .get(`/todos/123`)
            .expect(404)
            .end(done);
    });
});
