
const fetchStories = async () =>
    await fetch("https://flynn.boolean.careers/exercises/api/boolgram/profiles")
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())

 export default fetchStories;