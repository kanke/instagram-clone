
const fetchPosts = async () =>
    await fetch("https://flynn.boolean.careers/exercises/api/boolgram/posts")
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())

export default fetchPosts;