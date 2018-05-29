import { fromEvent } from 'rxjs'
import { bufferTime } from 'rxjs/operators'

let input = document.getElementById('example')
let input$ = fromEvent(input, 'input').pipe(
  bufferTime(1000)
)

input$.subscribe((data) => console.log('all inputs in 1 sec', data))
