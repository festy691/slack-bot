const request = require('supertest');
const { response } = require('./app');
const app = require('./app');

describe('users', ()=>{
    it("Get all users /users", ()=> {
        return request(app).get('/users').expect('Content-Type', /json/).expect(200).then((response)=>{
            expect(response.body).toEqual(
                expect.arrayContaining(
                    [
                        expect.objectContaining(
                            {
                                user: expect.any(String),
                            }
                        )
                    ]
                )
            )
        });
    }, 15000);

    
    it("Post Welcome user /welcome", ()=> {

    });

    
    it("Post user response /response", ()=> {

    });
});