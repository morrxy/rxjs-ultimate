import { fromEvent, of } from 'rxjs'
import { debounceTime, map, buffer, switchMap } from 'rxjs/operators'

let input = document.getElementById('example')
let input$ = fromEvent(input, 'keyup')

let debounceBreak$ = input$.pipe(
  debounceTime(2000)
)

let stream$ = input$.pipe(
  map(ev => ev.key),
  buffer(debounceBreak$),
  switchMap((allTypedKeys) => {
    // do ajax
    console.log('Everything that happened during 2 sec', allTypedKeys)
    return of('ajax based on ' + input.value)
  })
)

stream$.subscribe((data) => console.log('values', data))
