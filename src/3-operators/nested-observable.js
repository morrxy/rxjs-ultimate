import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { flatMap, map } from 'rxjs/operators'

const url = 'http://swapi.co/api/people/'

let stream$ = of(1, 2, 3)
  .pipe(
    flatMap(val => {
      return ajax({
        url: url + val
      })
        .pipe(
          map(e => e.response)
        )
    })
  )

stream$.subscribe(val => console.log(val))

let stream2$ = of(1, 2, 3)
  .pipe(
    map(val => {
      return ajax({
        url: url + val
      })
        .pipe(
          map(e => e.response)
        )
    })
  )

stream2$.subscribe(val => console.log(val))
