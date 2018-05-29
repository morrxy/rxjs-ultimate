import { ajax } from 'rxjs/ajax'
import { map } from 'rxjs/operators'

let person$ = ajax({
  url: 'http://swapi.co/api/people/1',
  crossDomain: true,
  createXHR: function () {
    return new window.XMLHttpRequest()
  }
})
  .pipe(
    map(e => e.response)
  )

person$
  .subscribe(res => {
    console.log(res)
  })
