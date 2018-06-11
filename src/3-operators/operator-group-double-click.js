import { fromEvent } from 'rxjs'
import { debounceTime, buffer, map, filter } from 'rxjs/operators'

let btn = document.getElementById('btn2')
let btn$ = fromEvent(btn, 'click')

let debounceMouseBreak$ = btn$.pipe(
  debounceTime(300)
)

let btnBuffered$ = btn$.pipe(
  buffer(debounceMouseBreak$),
  map(array => array.length),
  filter(count => count >= 2)
)

btnBuffered$.subscribe((data) => console.log('values', data))
