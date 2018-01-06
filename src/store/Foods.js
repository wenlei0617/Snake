import { observable, action } from 'mobx';

class Foods {
    @observable top = 40;
    @observable left= 40;
    @action.bound
    randoms() {
        this.top = 10*Math.floor(Math.random()*40);
        this.left= 10*Math.floor(Math.random()*40);
    }
}

export const foodsStore = new Foods();