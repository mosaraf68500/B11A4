function calculateSleepTime(times) {

    if(!Array.isArray(times)){
        return "Invalid";
    }
    for (let i = 0; i < times.length; i++) {
        if (typeof times[i] !== 'number') {
            return "Invalid";
        }
    }

    let totalSeconds = 0;
    for (let i = 0; i < times.length; i++) {
        totalSeconds += times[i];
    }

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    return { hour: hours, minute: minutes, second: seconds };
}


const result=calculateSleepTime([1000, 499, 519, 300]);
console.log(result)
