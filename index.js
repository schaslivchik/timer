'use strict'

// setTimeout(), setInterval()

// const timeoutId = setTimeout(() => {
//   console.log('Hi')
// }, 3000);

// const intervalId = setInterval(()=>{
// console.log('object :>> ');
// }, 1000)

// clearInterval(intervalId);

// let i = 0;
// setInterval(()=>{
  
//   console.log(i++)
// }, 500)

// const btnDelete = document.querySelector('button');

// btnDelete.onclick = e=> {
//   e.target.style.backgroundColor = 'red';
//   setTimeout(() => {
//     e.target.remove();
//   },3000)
// }


const timeEl = document.querySelector('.time');
const [strartBtn, stopBtn, resetBtn] = document.querySelectorAll('button');

let time =  new Date(0);
const DELAY = 100;
let timerId;


updateTime(time)

strartBtn.addEventListener('click', () => {
  if(timerId) {
    return
  }
  timerId = setInterval(() => {
    time.setMilliseconds(time.getMilliseconds() + DELAY)
    updateTime(time);
  }, DELAY);
})

resetBtn.addEventListener('click', ()=>{
  time = new Date(0);
  updateTime(time)
})

stopBtn.addEventListener('click', ()=>{
  clearInterval(timerId);
  timerId = null;
})

function updateTime(t) {
  timeEl.textContent = `${formatTime(t.getMinutes())}:${formatTime(t.getSeconds())}:${formatMs(t.getMilliseconds())}`
}

function formatTime(t){
  return(t < 10)? `0${t}`:`${t}`;
}

function formatMs(t){
  if(t.toString().length === 1) return `00${t}`;
  if(t.toString().length === 2) return `0${t}`;
  if(t.toString().length === 3) return `${t}`;
}