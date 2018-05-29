import { Observable } from 'rxjs'

let stream = Observable.create((observer) => {
  let request = new window.XMLHttpRequest()

  request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1')

  request.onload = () => {
    if (request.status === 200) {
      observer.next(request.response)
      observer.complete()
    } else {
      observer.error('error happened')
    }
  }

  request.onerror = () => {
    observer.error('error happened')
  }

  request.send()
})

stream.subscribe(
  (data) => console.log(data)
)
