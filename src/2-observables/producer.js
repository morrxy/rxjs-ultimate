import { Observable } from 'rxjs'

class Producer {
  constructor () {
    this.i = 0
  }

  nextValue () {
    return this.i++
  }
}

window.Producer = Producer

let stream$ = Observable.create((observer) => {
  const p = new Producer()
  observer.next(p.nextValue())
  observer.next(p.nextValue())
})

stream$.subscribe(
  (val) => console.log(val)
)
