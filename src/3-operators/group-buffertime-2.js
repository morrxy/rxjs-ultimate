import { fromEvent } from 'rxjs'
import { bufferTime, map } from 'rxjs/operators'

let input = document.getElementById('example')
let input$ = fromEvent(input, 'keyup').pipe(
  map(ev => ev.key),
  bufferTime(1000)
)

input$.subscribe((data) => console.log('all inputs in 1 sec', data))
