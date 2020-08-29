export default class GameTimer {
    constructor (init) {
        this.init = init;
        // Create
        this.createTimerDom();
    }
    
    createTimerDom () {
        // Create Timer Wrapper
        this.timerWrapper = document.createElement('div');
        this.timerWrapper.classList.add('game-timer-wrapper');
        
        // Create Minute
        this.timerMinute = document.createElement('div');
        this.timerMinute.classList.add('game-timer-minute');
        this.timerMinute.innerText = '00';
        this.timerWrapper.appendChild(this.timerMinute);
        
        // Create Second
        this.timerSecond = document.createElement('div');
        this.timerSecond.classList.add('game-timer-second');
        this.timerSecond.innerText = '00';
        this.timerWrapper.appendChild(this.timerSecond);
        
        // Create Millisecond
        this.timerMilliSecond = document.createElement('div');
        this.timerMilliSecond.classList.add('game-timer-milli-second');
        this.timerMilliSecond.innerText = '00';
        this.timerWrapper.appendChild(this.timerMilliSecond);
        
        // Append Body
        document.body.appendChild(this.timerWrapper);
        
        const obj = { 
            minuteDom: this.timerMinute,
            secondDom: this.timerSecond,
            milliSecondDom: this.timerMilliSecond,
            minute: parseInt(this.timerMinute.innerText),
            second: parseInt(this.timerSecond.innerText),
            milliSecond: parseInt(this.timerMilliSecond.innerText),
        }
        
        if ( this.init ) GameTimer.StartTimer(obj);
        
    }
    
    static StartTimer (obj) {
        if ( !obj ) return console.error('Timer not started because not found options!');

        let { minuteDom, secondDom, milliSecondDom, minute, second, milliSecond } = obj;

        setInterval( _ => {
            // Millisecond
            if ( milliSecond >= 9 ) {
                milliSecond = 0;
            } else {
                milliSecond += 1;
            }
            milliSecondDom.innerText = `0${milliSecond.toString()}`;
        }, 100);
        
        setInterval( _ => {
            // Second
            if ( second >= 59 ) {
                second = 0;
                minute += 1;
            } else {
                second += 1;
            }
            secondDom.innerText =  second < 10 ? `0${second.toString()}` : second.toString();
            minuteDom.innerText =  minute < 10 ? `0${minute.toString()}` : minute.toString();
        }, 1000 );
        
    }
    
}