import { observable, action } from 'mobx';

class Maps {
    @observable width = 400;
    @observable height= 400;
    @observable rank = 1;
    @observable popup = false;
    @action.bound
    showPopup() {
        this.popup = true;
    }
    @action.bound
    hidePopup() {
        this.popup = false;
    }
    @action.bound
    rules([x, y]) {
        if ( x < 0 || x >= this.height || y <0 || y >= this.width ) {
            return true
        }
        return false
    }
    @action.bound
    addRank(length) {
        if ( this.rank >= 500 ) {return false}
        if(!(length%10)) {
            this.rank += length/10;
            return true
        }       
        return false
    }
}

export const mapsStore = new Maps();