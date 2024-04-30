const ganache = require('ganache');
const Web3  = require('web3');
const assert = require('assert');
const web3 = new Web3(ganache.provider());


class Car {
    park(){
        return 'stopped';
    }

    drive(){
        return 'vroom';
    }
}


describe('Car', ()=>{
    it('can park',()=>{
        const car = new Car();
        assert.equal(car.park(), 'stopped');
    });

});