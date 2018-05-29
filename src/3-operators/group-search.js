import { fromEvent } from 'rxjs'
import { debounceTime, map, buffer } from 'rxjs/operators'

let input = document.getElementById('example')
let input$ = fromEvent(input, 'keyup')

let debounceBreak$ = input$.pipe(
  debounceTime(2000)
)

let stream$ = input$.pipe(
  map(ev => ev.key),
  buffer(debounceBreak$)
)

stream$.subscribe((data) => console.log('values', data))
