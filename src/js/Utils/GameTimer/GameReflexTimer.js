export default class GameReflexTimer {
    static DiffTime (createdMeshTime, isWithCreateDom) {
        const currentTime = new Date();

        if ( isWithCreateDom ) {
            GameReflexTimer.CreateReflexTimerDom(currentTime.getTime() - createdMeshTime.getTime());
        } else {
            return currentTime.getTime() - createdMeshTime.getTime();
        }
    }

    static CreateReflexTimerDom (diffTime) {
        const timerWrapper = document.createElement('div');
        timerWrapper.classList.add('game-reflex-timer-wrapper');
        timerWrapper.innerText = diffTime;

        document.body.appendChild(timerWrapper);

        setTimeout(() => {
            document.body.removeChild(timerWrapper);
        }, 1000);
    }
}