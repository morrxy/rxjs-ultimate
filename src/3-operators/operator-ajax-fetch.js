import { from } from 'rxjs'
import { flatMap } from 'rxjs/operators'

let person$ = from(window.fetch('http://swapi.co/api/people/1'))
  .pipe(
    flatMap(res => res.json())
  )

person$.subscribe((fetchRes) => {
  console.log('fetch res:', fetchRes)
})
