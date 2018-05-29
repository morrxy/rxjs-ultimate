import { zip, of } from 'rxjs'

let stream$ = zip(
  Promise.resolve(1),
  of(2, 3, 4),
  of(7)
)

stream$.subscribe(data => console.log('stream1:', data))

let stream2$ = zip(
  of(1, 5),
  of(2, 3, 4),
  of(7, 9)
)

stream2$.subscribe(data => console.log('stream2:', data))
