import { fromEvent } from 'rxjs'
import { map, debounceTime } from 'rxjs/operators'

const input = document.getElementById('input')

const example = fromEvent(input, 'keyup').pipe(
  map(i => i.currentTarget.value)
)

// wait 0.5s, between keyups, throw away all other values
const debouncedInput = example.pipe(
  debounceTime(500)
)

debouncedInput.subscribe(val => {
  console.log(`Debounced Input: ${val}`)
})
