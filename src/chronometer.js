class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    if (printTimeCallback){
      this.intervalId = setInterval( () => {
        this.currentTime = this.currentTime +1;
        printTimeCallback();
      } , 1000)
    } else {
      this.intervalId = setInterval( () => {
        this.currentTime = this.currentTime +1;
      } , 1000)
      }

  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10){
      return `0${value}`
    } 
    if (value > 10) {
      return `${value}`
    }
    // Hint: You can achieve this dynamically by using the .slice() method. ????
  }

  stop() {
    // ... your code goes here
    return clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0
  }

  split() {
    // ... your code goes here
    return `${ Math.floor(this.currentTime / 60)}:${ Math.floor(this.currentTime % 60) }`
  }
}
