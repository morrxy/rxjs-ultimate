import { of, from, forkJoin } from 'rxjs'
import { switchMap, flatMap } from 'rxjs/operators'

let stream$ = of({ id: 1, name: 'User' })
  .pipe(
    switchMap((user) => {
      return forkJoin(
        from([{id: 114, user: 1}, {id: 115, user: 1}]),
        from([{id: 200, user: 1}, {id: 201, user: 1}])
      )
    })
  )

stream$.subscribe((result) => {
  console.log('switchMap Orders:', result)
  console.log('switchMap Messages:', result)
})

of({ id: 1, name: 'User' })
  .pipe(
    flatMap((user) => {
      return forkJoin(
        from([{id: 114, user: 1}, {id: 115, user: 1}]),
        from([{id: 200, user: 1}, {id: 201, user: 1}])
      )
    })
  )
  .subscribe((result) => {
    console.log('FlatMap Orders:', result)
    console.log('FlatMap Messages:', result)
  })
