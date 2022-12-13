window.addEventListener('DOMContentLoaded', ()=>{

    const userList = document.getElementById('user-list')


    const searchInput = document.getElementById('search')
    const form = document.getElementById('github-form')
    
    // const URL = `https://api.github.com/search/users?q=octocat} `


    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        const searchUser = searchInput.value
        const getUser = `https://api.github.com/search/users?q=${searchUser}`
        console.log(`https://api.github.com/search/users?q=${searchUser}}`)
        console.log(getUser)
        fetch('getUser', {
            method: 'GET',
            headers: {
                // 'Content-Type': 'application/json',
                "Accept": "application/vnd.github.v3+json"
            },
        }).then(res => res.json()).then(
            (data) => {
                console.log(data)
            } 
        )
        
    })

})