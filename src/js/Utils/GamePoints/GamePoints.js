import Points from './points';

export default class GamePoints {
    constructor (currentPoint) {
        this.currentPoint = currentPoint;
        
        this.createGamePointsDom();
    }

    createGamePointsDom () {
        // Create Timer Wrapper
        this.gamePointsWrapper = document.createElement('div');
        this.gamePointsWrapper.classList.add('game-points-wrapper');

        this.gamePointsInner = document.createElement('div');
        this.gamePointsInner.innerText = '0';
        this.gamePointsInner.classList.add('game-points-inner');
        this.gamePointsWrapper.appendChild(this.gamePointsInner);
        
        document.body.appendChild(this.gamePointsWrapper);
    }

    static GamePointsAdd ( gameMod, pointMod ) {
        const pointEl = document.getElementsByClassName('game-points-inner')[0];
        pointEl.innerText = parseInt(pointEl.innerText) + Points[gameMod][pointMod];
    }

    static GamePointDecrease ( gameMod ) {
        const pointEl = document.getElementsByClassName('game-points-inner')[0];
        pointEl.innerText = parseInt(pointEl.innerText) - Points[gameMod].decrease;
    }
    
    static GetGamePoint () {
        return parseInt(document.getElementsByClassName('game-points-inner')[0].innerText);
    }
    
}