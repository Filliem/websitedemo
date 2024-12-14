import { getAllPosts  } from "./api.js";



window.addEventListener("DOMContentLoaded", async () => {

    const posts = await getAllPosts()
    console.log(posts)

    
})