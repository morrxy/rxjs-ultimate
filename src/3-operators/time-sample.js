import { fromEvent } from 'rxjs'
import { sampleTime } from 'rxjs/operators'

const btn = document.getElementById('btnIgnore')
var start = new Date()

const input$ = fromEvent(btn, 'click').pipe(
  sampleTime(2000)
)

input$.subscribe(val => {
  console.log(val, new Date() - start)
})
