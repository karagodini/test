// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => {
//     return response.json()
// })
// .then(post => console.log(post))
// .catch(err => console.log(err))

// function getPost(id) {
//     return new Promise((resolve, reject) => {
//         fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         .then(resolve => resolve.json())
//         .then(post => resolve(post))
//         .catch(err => console.log(reject))
//     })
// }

// getPost(2).then(post => console.log(post))

// function getPost(id) {
//     return Promise.resolve().then(() => {
//         const [userType, userId] = id.split('-')
//         return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(response => response.json())
//     })
// }
async function getPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await response.json()
    return data
}

getPost(2)
.then(data => console.log(data))
.catch(err => console.log(err))