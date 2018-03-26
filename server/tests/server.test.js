const expect = require('expect');
const request = require('supertest');

let app = require('./../server');
let Todo = require('./../models/todo');

beforeEach(done => {
    Todo.remove().then(() => done());
});

describe('POST /todos', () => {

    it('Should add new todo', done => {
        let text = 'learn 1';
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
                Todo.find().then(todos => {
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
                    expect(todos.length).toBe(0);
                    done();
                }).catch(err => done(err));
            });
    });
});
