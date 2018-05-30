import { of, from } from 'rxjs'
import { switchMap } from 'rxjs/operators'

let stream$ = of({ message: 'Logged in' }).pipe(
  switchMap(result => {
    return of({ id: 1, name: 'user' })
  }),
  switchMap((user) => {
    return from(
      [
        { id: 114, userId: 1 },
        { id: 117, userId: 1 }
      ]
    )
  })
)

stream$.subscribe((orders) => {
  console.log('Orders', orders)
})
