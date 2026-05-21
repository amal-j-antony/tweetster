let isLogin = false
let accounts = [{
    userID: 1,
    name: "Elon Musk",
    userName: "elonMusk",
    isFollowed: false,
    userProfile: "https://pbs.twimg.com/profile_images/2053244804520427520/m8mdWZCG_400x400.jpg"
},
{
    userID: 2,
    name: "TheBeautyOfSaas",
    userName: "boss",
    isFollowed: false,
    userProfile: "https://pbs.twimg.com/profile_images/2012506138550349824/H7NOzq7E_400x400.jpg"
},
{
    userID: 3,
    name: "trish",
    userName: "trish",
    isFollowed: false,
    userProfile: "https://pbs.twimg.com/profile_images/2049026564453781504/2qz0A2i__400x400.jpg"
},
{
    userID: 4,
    name: "Chrys Bader",
    userName: "Chrys_Bader",
    isFollowed: false,
    userProfile: "https://pbs.twimg.com/profile_images/2027968225716428800/KXN4teSk_400x400.jpg"
},
{
    userID: 5,
    name: "Lee Robinson",
    userName: "LeeRobinson9",
    isFollowed: false,
    userProfile: "https://pbs.twimg.com/profile_images/1862717563311968256/xfgt1L9l_400x400.jpg"
},
{
    userID: 6,
    name: "AntaresXVIII",
    userName: "admin",
    isFollowed: false,
    userProfile: "https://images.unsplash.com/photo-1779113940567-617ec0de80ad?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}]
let posts = [{
    userID: 1,
    isLiked: false,
    text: `This is the foundation of my philosophy: I am
                    curious about the nature of the universe... and obviously I will die... But I would like to know
                    that we are on a path to understanding the nature of the universe and the meaning of life and what
                    questions to ask about the answer that is the universe`,
    image: ''
},
{
    userID: 1,
    isLiked: false,
    text: ` Only when you drive the Cybertruck do you realize how incredible it is: a bulletproof tank that moves like a million dollar sports car! <br>

                Reason for the angular shape is that the thick, ultra-hard stainless steel body panels cannot be stamped like the thin, feeble, paper-strength mild steel of other trucks. Cybertruck body panels would break 5000 ton stamping machines.`,
    image: ''
},
{
    userID: 2,
    isLiked: false,
    text: ``,
    image: 'https://pbs.twimg.com/media/HGMHM1FXAAAuWbO?format=jpg&name=large'
},
{
    userID: 2,
    isLiked: false,
    text: 'One of the most efficient ways to figure out who YOU are and what you are good at comes down to how effortless it feels to work on specific things. Whenever something feels effortless and hours start to pass quickly, it means you are doing something right and should pay attention',
    image: 'https://images.unsplash.com/photo-1779071267081-3b4d5d884388?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
},
{
    userID: 3,
    isLiked: false,
    text: `<div class="text-left text-white">"someone asked Beej how sockets work in C. he got tired of explaining it. so in 1995 he put it all online.
                  it's been the definitive socket programming guide for 30 years.
                  it covers everything: TCP, UDP, IPv4, IPv6, non-blocking I/O, select(), poll().
                  graduate OS courses worldwide assign it. it's funnier than any technical book has a right to be.
                  it's free and always will be: <a class="text-center" href = "https://t.co/jxKB0T3lsN">https://t.co/jxKB0T3lsN</a>"</div>`,
    image: 'https://pbs.twimg.com/media/HH-0sOla4AAc2sR?format=png&name=900x900'
},
{
    userID: 4,
    isLiked: false,
    text: `<div class="text-left text-white">"i spoke to a founder yesterday - their CTO finally read their agent-made codebase after months and panicked when he realized
                     it was impossible to understand wtf was going on
                    my rule of thumb is: if your codebase starts written by agents, don’t try to understand it
                    instead, align at the architectural level before any building happens, and ask the agent to maintain a living architecture diagram of how the system works
                    there are three altitudes that matter:<br>
                    - Top-level: architecture<br>
                    - Mid-level: patterns & abstractions<br>
                    - Low-level: file-level code<br>
                    in today’s world, a CTO should be deeply concerned with #1. #2 matters too, but not as critical as #1.
                    if #1 and #2 are dialed in, #3 is where most of the high leverage agentic gains live.
                    as long as you understand the architecture and critical interfaces, it becomes much easier to reason about ground truth and meaningfully iterate
                    understanding and informing the architecture / patterns / abstractions give your codebase maximum longevity and agent maintainability</div>`,
    image: 'https://pbs.twimg.com/media/HH5bTI7acAATOzG?format=jpg&name=large'
},
{
    userID: 5,
    isLiked: false,
    text: `<div class="text-left text-white">"How to make your engineering job application stand out (from the perspective of someone looking at hundreds of resumes):<br>
                    1. Your resume should be one page. If you really need more space, link to a website. You don't need 10+ bullets for each job.<br>
                    2. You will immediately stand out >90% of applications if you link a personal website that has some intentionality behind it.<br>
                    3. If you are going to link your X, you might want to clean up your posts? Seems obvious but... people post some wild stuff.<br>
                    4. You should link your GitHub. Please avoid doing a profile README that looks like a MySpace profile with the badges and images. I'm trying to look at code and your ability to build interesting ideas.<br>
                    5. You should try to customize your application to the company. If you're applying to a startup, the courses you took in college probably don't matter as much. Maybe more if you're trying to make it through the ATS screening for FAANG.<br>
                    6. I'm seeing a surprising number of resumes which don't talk about AI or agents at all. Software engineering is changing and it's a pretty fair assumption that you will be expected to learn or understand coding with AI for your job. That should be reflected on your resume and projects (and I'm not just saying this because I'm at Cursor).<br>
                    7. Take your LinkedIn seriously. Most devs are here hanging out on X but surprisingly still most people will send around your LinkedIn internally.<br>
                    8. Find ways to show your unique strengths/tastes/interests. It's nice to see people are smart, well-rounded, and thoughtful. Maybe this is a collection of books you enjoyed and why. Or some writing you've done. Or films you liked. At the end of the day, people want to work with other people they like and respect. If nothing else, it will be a good conversation starter ("oh I love [book] as well!").<br>
                    9. Do not use AI to write your cover letter or resume text. It's incredibly obvious, especially if you are applying to an AI company. You can still use it to ideate on ideas or phrases, but write it by hand (don't fall victim to the overused in-the-distribution-AI-phrases). See: /humanizer skill.<br>
                    10. No photos on resumes. Save those for whatever you link out to.<br>
                    11. Quality over quantity. 3 really good, thoughtful, detailed, interesting projects versus a wall of 27 AI-slop ones.<br>
                    Remember that hiring managers / recruiters are getting hundreds or thousands of applications for a role. They're not going to spend 20 minutes on every single application. You need to cut the cruft and get to the point. I hope this helps you stand out!</div>`,
    image: ''
},
{
    userID: 6,
    isLiked: false,
    text: "Hello World!!!",
    image: "https://images.unsplash.com/photo-1598749516121-8b9e52a75d1d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}]
let users = [{ userName: "admin", password: "admin" }]
let following = []
let postHistory = null
let currentUserId = null

if(sessionStorage.getItem("users")){
    users = JSON.parse(sessionStorage.getItem("users"))
}

if(sessionStorage.getItem("posts")){
    posts = JSON.parse(sessionStorage.getItem("posts"))
}

if(sessionStorage.getItem("accounts")){
    accounts = JSON.parse(sessionStorage.getItem("accounts"))
}

function storeData(method){
    console.log("method:",method,typeof(method));
    
    if(method === 'accounts'){
        return sessionStorage.setItem("accounts",JSON.stringify(accounts))
    }else if(method === 'users'){
        return sessionStorage.setItem("users",JSON.stringify(users))
    }else if(method === 'posts'){
        return sessionStorage.setItem("posts",JSON.stringify(posts))
    }else{
        console.log('ERROR....Specify which item to save');
        
    }
    return
}

const loginForm = document.getElementById("loginForm")

const displayArea = document.getElementById("displayArea")



const loadAllPosts = () => {
    displayArea.innerHTML = `
                <div id="inputArea" class="flex justify-center w-full ">
                    <input id="newPostText" type="text" placeholder="Whats Happening?"
                        class="placeholder:text-white px-4 py-10 my-4 border-1 border-gray-600 w-[90%]">
                </div>

                <div class="flex px-12 justify-between items-center gap-5">
                    <input id="newPostImage" class="border-1 border-gray-600 w-[90%] py-2 placeholder:text-white px-4" type="text" placeholder="Share a cool image(url)!">
                    <button onclick="addNewPost()" type="submit" class="border-1 border-blue-400 py-2 px-4 rounded-3xl bg-blue-400 cursor-pointer">POST</button>
                </div>
            `


    postHistory = []
    let max = posts.length
    let i = 0
    

    while ((postHistory.length) < max) {
        let postID = postIdGen(max, postHistory)
        console.log(postID);
        let currentUserId = posts[postID].userID

        let userData = accounts.find(a => a.userID == currentUserId)


        displayArea.innerHTML += `<div class="card">
            <div class="flex justify-between p-4">
                <div class="flex justify-start items-center gap-2">
                    <img src="${userData.userProfile}" class="h-10 w-10 border-1 rounded-3xl" alt="">
                    <div>
                    <h1>  ${userData.name}</h1>
                    <h1 class="!text-zinc-400">@${userData.userName}</h1>
                    </div>
                   
                </div>
                <div id=userDetail class="flex items-center justify-end gap-2">
                    <button class="cursor-pointer" onclick="addFollow(${currentUserId})">Follow</button>
                    <button onclick="addLike(${postID})" ><i class="fa-regular fa-heart cursor-pointer"></i></button>
                </div>
            </div>
            <div class="px-4 text-justify grid grid-cols-1 justify-center items-center">
                <p>${posts[postID].text}</p>
                <img src="${posts[postID].image}" alt="">
            </div>
            <hr class="my-3">
        </div>`
        i++;
    }

}



const postIdGen = (max, postHistory) => {
    let postID = Math.floor(Math.random() * max)

    if (!(postHistory.includes(postID))) {
        console.log(postHistory);
        return postID

    } else {
        return postIdGen(max, postHistory)
    }
    

}

function postHistoryGen() {
    console.log('postHistoryGen');
    
    postHistory = []
    let max = posts.length
    while(postHistory.length != posts.length){
        postHistory.push(postIdGen(max,postHistory))
    }
    console.log(`new post history:`,postHistory);
    return postHistory
}

function addLike(postID) {
    posts[postID].isLiked = true
    storeData('posts')
    refreshPosts()
}

function removeLike(postID) {
    posts[postID].isLiked = false
    storeData('posts')
    refreshPosts()
}

const addFollow = (userId) => {
    index = accounts.findIndex(a => a.userID == userId)
    accounts[index].isFollowed = true
    storeData('accounts')
    refreshPosts()
    refreshProfiles()
}

function removeFollow(userId) {
    index = accounts.findIndex(a => a.userID == userId)
    accounts[index].isFollowed = false
    storeData('accounts')
    refreshPosts()
    refreshProfiles()
}




function refreshPosts() {

    displayArea.innerHTML = `
                <div id="inputArea" class="flex justify-center w-full ">
                    <input id="newPostText" type="text" placeholder="Whats Happening?"
                        class="placeholder:text-white px-4 py-10 my-4 border-1 border-gray-600 rounded-xl w-[90%]">
                </div>

                <div class="flex px-12 justify-between items-center gap-5 pb-10 border-1 border-black border-b-white">
                    <input id="newPostImage" class="border-1 border-gray-600 rounded-xl w-[90%] py-2 placeholder:text-white px-4" type="text" placeholder="Share a cool image(url)!">
                    <button onclick="addNewPost()" type="submit" class="border-1 border-blue-400 py-2 px-4 rounded-3xl bg-blue-400 cursor-pointer">POST</button>
                </div>
            `
    if(postHistory == null){
       postHistory = postHistoryGen()
    }
    console.log(postHistory);
    

    postHistory.forEach((i, index) => {
        let userID = posts[i].userID
        userData = accounts.find(a => a.userID == userID)
        if (userData.isFollowed) {
            if (posts[i].isLiked) {
                displayArea.innerHTML += `<div class="card">
            <div class="flex justify-between p-4">
                <div class="flex justify-start items-center gap-2">
                    <img src="${userData.userProfile}" class="h-10 w-10 border-1 rounded-3xl" alt="">
                    <div>
                    <h1>  ${userData.name}</h1>
                    <h1 class="!text-zinc-400">@${userData.userName}</h1>
                    </div>
                </div>
                <div id=userDetail class="flex items-center justify-end gap-2">
                    <button class="cursor-pointer" onclick="removeFollow(${userID})">Following</button>
                    <button onclick="removeLike(${i})" ><i class="fa-solid fa-heart cursor-pointer"></i></button>
                </div>
            </div>
            <div class="px-4 text-justify grid grid-cols-1 justify-center">
                <p>${posts[i].text}</p>
                <img src="${posts[i].image}" alt="">
            </div>
            <hr class="my-3">
        </div>`
            } else {
                displayArea.innerHTML += `<div class="card">
            <div class="flex justify-between p-4">
                <div class="flex justify-start items-center gap-2">
                    <img src="${userData.userProfile}" class="h-10 w-10 border-1 rounded-3xl" alt="">
                    <div>
                    <h1>  ${userData.name}</h1>
                    <h1 class="!text-zinc-400">@${userData.userName}</h1>
                    </div>
                </div>
                <div id=userDetail class="flex items-center justify-end gap-2">
                    <button class="cursor-pointer" onclick="removeFollow(${userID})">Following</button>
                    <button onclick="addLike(${i})" ><i class="fa-regular fa-heart cursor-pointer"></i></button>
                </div>
            </div>
            <div class="px-4 text-justify grid grid-cols-1 justify-center items-center">
                <p>${posts[i].text}</p>
                <img src="${posts[i].image}" alt="">
            </div>
            <hr class="my-3">
        </div>`
            }
        } else {
            if (posts[i].isLiked) {
                displayArea.innerHTML += `<div class="card">
            <div class="flex justify-between p-4">
                <div class="flex justify-start items-center gap-2">
                    <img src="${userData.userProfile}" class="h-10 w-10 border-1 rounded-3xl" alt="">
                    <div>
                    <h1>  ${userData.name}</h1>
                    <h1 class="!text-zinc-400">@${userData.userName}</h1>
                    </div>
                </div>
                <div id=userDetail class="flex items-center justify-end gap-2">
                    <button class="cursor-pointer" onclick="addFollow(${userID})">Follow</button>
                    <button onclick="removeLike(${i})" ><i class="fa-solid fa-heart cursor-pointer"></i></button>
                </div>
            </div>
            <div class="px-4 text-justify grid grid-cols-1 justify-center">
                <p>${posts[i].text}</p>
                <img src="${posts[i].image}" alt="">
            </div>
            <hr class="my-3">
        </div>`
            } else {
                displayArea.innerHTML += `<div class="card">
            <div class="flex justify-between p-4">
                <div class="flex justify-start items-center gap-2">
                    <img src="${userData.userProfile}" class="h-10 w-10 border-1 rounded-3xl" alt="">
                    <div>
                    <h1>  ${userData.name}</h1>
                    <h1 class="!text-zinc-400">@${userData.userName}</h1>
                    </div>
                </div>
                <div id=userDetail class="flex items-center justify-end gap-2">
                    <button class="cursor-pointer" onclick="addFollow(${userID})">Follow</button>
                    <button onclick="addLike(${i})" ><i class="fa-regular fa-heart cursor-pointer"></i></button>
                </div>
            </div>
            <div class="px-4 text-justify grid grid-cols-1 justify-center">
                <p>${posts[i].text}</p>
                <img src="${posts[i].image}" alt="">
            </div>
            <hr class="my-3">
        </div>`
            }
        }
    })


}

function refreshProfiles() {
    const displayAreaProfiles = document.getElementById("displayAreaProfiles")
    displayAreaProfiles.innerHTML = ''
    let profiles = accounts.map((item, index) => {
        if (item.isFollowed) {
            displayAreaProfiles.innerHTML += `
                <div class="flex justify-between">
                    <div class="flex justify-start items-center gap-2">
                        <img src="${item.userProfile}" class="h-10 w-10 border-1 rounded-3xl" alt="">
                        <div>
                        <h1>  ${item.name}</h1>
                        <h1 class="!text-zinc-400">@${item.userName}</h1>
                        </div>
                    </div>
                    <div id=userDetail class="flex items-center justify-end gap-2">
                        <button class="cursor-pointer" onclick="removeFollow(${item.userID})">Unfollow</button>
                    </div>
                </div>`
        } else {
            displayAreaProfiles.innerHTML += `
                <div class="flex justify-between">
                    <div class="flex justify-start items-center gap-2">
                        <img src="${item.userProfile}" class="h-10 w-10 border-1 rounded-3xl" alt="">
                        <div>
                        <h1>  ${item.name}</h1>
                        <h1 class="!text-zinc-400">@${item.userName}</h1>
                        </div>
                    </div>
                    <div id=userDetail class="flex items-center justify-end gap-2">
                        <button class="cursor-pointer" onclick="addFollow(${item.userID})">Follow</button>
                    </div>
                </div>`
        }


    })
    // displayAreaProfiles.innerHTML = profiles
    //     console.log(profiles);
}

function profileGate() {
    if (isLogin) {
        viewProfile(currentUserId)
    } else {
        displayArea.innerHTML = `<div class="w-full h-[70vh] lg:h-[100vh]">
            <form id="loginForm" class="flex flex-col gap-5 h-full justify-center items-center">
                <h1 class="text-3xl font-bold">Tweetster</h1>
                <p class="text-xl">Login</p>
                <input id="loginName" class="py-3 border rounded-3xl w-[50%] placeholder:text-center text-center" type="text" placeholder="Enter username">
                <input id="loginPassword" class=" py-3 border rounded-3xl w-[50%] placeholder:text-center text-center" type="password" placeholder="Enter password">
                <button class="bg-white w-[50%] text-xl rounded-3xl !text-black py-3 px-10 cursor-pointer">Login</button>
                <h3 class="">Or</h3>
                <span onclick="newAccount()" class="bg-white w-[50%] text-center text-xl cursor-pointer rounded-3xl !text-black py-3 px-10">Create Account</span>
            </form>
        </div>`
        userAuth()
    }
}

function newAccount() {
    displayArea.innerHTML = `<div class="w-full h-[100vh]">
            <form id="createForm" class="flex flex-col gap-6 h-full justify-center items-center">
                <h1 class="text-3xl font-bold">Tweetster</h1>
                <p class="text-xl">Create your account</p>
                <input id="newUser" class=" py-3 border rounded-3xl border-white w-100 placeholder:text-center text-center" type="text" placeholder="Enter username">
                <input id="newPassword" class=" py-3 border rounded-3xl border-white w-100 placeholder:text-center text-center" type="password" placeholder="Enter password">
                <input id="newPasswordConfirm" class=" py-3 border rounded-3xl border-white w-100 placeholder:text-center text-center" type="password" placeholder="Confirm password">
                
                <div class = "mx-10"><input id="termsCheck" type="checkbox"><span class="text-xl ">I agree to the terms of service and privacy policy</span></div>
                <button class="bg-white text-xl rounded-3xl !text-black py-3 px-10 w-100">Create Acount</button>             
            </form>
        </div>`
    const createForm = document.getElementById("createForm")
    const newUser = document.getElementById("newUser")
    const newPassword = document.getElementById("newPassword")
    const newPasswordConfirm = document.getElementById("newPasswordConfirm")
    const termsCheck = document.getElementById("termsCheck")
    createForm.addEventListener("submit", e => {
        e.preventDefault()
        if (!newUser.value || !newPassword || !newPasswordConfirm || !termsCheck.checked) {
            alert("All fields required")
            return newAccount()
        } else {
            if (newPassword.value != newPasswordConfirm.value) {
                alert("Passwords do not match")
                return newAccount()
            }
        }
        let newUserName = newUser.value
        let newPasswordVal = newPassword.value
        let onBoardingDone = false
        onBoarding(newUserName, newPasswordVal)

    })

}

function onBoarding(newUserName, newPasswordVal) {
    let res = users.find(a => a.userName == newUserName)
    if (!res) {
        users.push({ userName: `${newUserName}`, password: `${newPasswordVal}` })
    }

    displayArea.innerHTML = `<div class="w-full ">
            <form id="addPfpuserName" action="" class="h-[70vh] flex flex-col justify-center items-center gap-5">
                <h1 class="text-3xl font-bold">Welcome to TweetSter!</h1>
                <h3 class="text-xl ">Finish setting up your account</h3>
                <input id="dName" class="py-3 border rounded-3xl border-white w-[50%] placeholder:text-center text-center" type="text" placeholder="Add display name">
                <input class="py-3 border rounded-3xl border-white w-[50%] placeholder:text-center text-center" type="text" placeholder="Add profile picture url" name="" id="profilePicture">
                <button class="bg-white text-xl rounded-3xl !text-black py-3 px-10 w-[50%] cursor-pointer">Continue</button>
            </form>
        </div>`
    const addPfpuserName = document.getElementById("addPfpuserName")
    addPfpuserName.addEventListener("submit", e => {
        e.preventDefault()
        const dName = document.getElementById("dName").value
        let profilePicture = document.getElementById("profilePicture").value
        if (profilePicture == '') {
            profilePicture = `https://img.icons8.com/?size=100&id=tZuAOUGm9AuS&format=png&color=000000`
            console.log(profilePicture);

        }
        accounts.push({
            userID: accounts.length + 1,
            name: `${dName}`,
            userName: `${newUserName}`,
            isFollowed: false,
            userProfile: `${profilePicture}`
        })
        currentUserId = accounts.length
        console.log(currentUserId);
        console.log(accounts);
        storeData('users')
        viewProfile(currentUserId)
    })

}

function viewProfile(currentUserId) {
    let userDetails = accounts.find(a => a.userID == currentUserId)
    console.log(userDetails);
    isLogin = true
    displayArea.innerHTML = `<div class="w-full h-[vh-70] mt-20 mb-10 pb-5 flex flex-col gap-5 justify-center items-center border-1 border-black border-b-white">
        <img class="w-50 h-50" src='${userDetails.userProfile}' alt="">
        <h1 class = "text-3xl">${userDetails.name}</h1>
        <h1 class = "text-xl">Username: ${userDetails.userName}</h1>
        <button class = "text-xl border border-red-500 bg-red-500 text-white rounded-3xl py-2 px-3" onclick ="userStateChange()">Log Out</button>
        <h1 class="text-xl">Posts</h1>
    </div>
    <div class="lg:grid-cols-6">
        <div class=""></div>
        <div class="lg:col-span-4">
            <div class="text-center" id="userPostsDisp">
                
            </div>
        </div>
        <div class=""></div>
    </div>
    `
    const userPostsDisp = document.getElementById("userPostsDisp")

    posts.forEach((a, index) => {
        if (a.userID == currentUserId) {

            console.log(a);
            const userDetails = accounts.find(a => a.userID == currentUserId)
            userPostsDisp.innerHTML += `<div class="card">
            <div class="flex justify-between p-4">
                <div class="flex justify-start items-center gap-2">
                    <img src="${userDetails.userProfile}" class="h-10 w-10 border-1 rounded-3xl" alt="">
                    <div>
                    <h1>  ${userDetails.name}</h1>
                    <h1 class="!text-zinc-400"> @ ${userDetails.userName}</h1>
                    </div>
                </div>
                <div id=userDetail class="flex items-center justify-end gap-2">
                    <button class="cursor-pointer" onclick="editPost(${index})">Edit</button>
                    <button onclick="removePost(${index})" ><i class="fa-solid fa-trash cursor-pointer"></i></button>
                </div>
            </div>
            <div class="px-4 text-justify">
                <p>${posts[index].text}</p>
                <img src="${posts[index].image}" alt="">
            </div>
            <hr class="my-3">
        </div>`
        }
    })
    if (userPostsDisp.innerHTML == '') {
        userPostsDisp.innerHTML = 'Add Some posts'
    }
}

function editPost(index) {
    const userPostsDisp = document.getElementById("userPostsDisp")
    userPostsDisp.innerHTML = `<div class="">
        <h1 class="text-center text-xl font-bold">Edit Post</h1>
        <div class="flex justify-center items-center flex-col gap-5 my-5">
            <input type="text" class="border border-1 py-10 px-20" id="postText">
            <input type="text" class="border border-1 px-20" id="postImage">
        </div>
        <div class="flex justify-center items-center gap-5">
            <button id="confirmEditBtn" class="border border-1 rounded-3xl p-2 bg-blue-500 cursor-pointer">Edit Post</button>
            <button id="cancelEditBtn" class="border border-1 rounded-3xl p-2 cursor-pointer">Cancel</button>
        </div>
    </div>`
    console.log(index,posts[index].text,posts[index].image);
    

    document.getElementById("postText").value = posts[index].text
    document.getElementById("postImage").value = posts[index].image

    document.getElementById("cancelEditBtn").addEventListener("click", () => viewProfile(currentUserId))

    document.getElementById("confirmEditBtn").addEventListener("click", () => {
        posts[index].text = document.getElementById("postText").value
        posts[index].image = document.getElementById("postImage").value
        storeData('posts')
        viewProfile(currentUserId)
    })
}

function removePost(index) {
    posts.splice(index,1)
    storeData('posts')
    viewProfile(currentUserId)
}

function userStateChange() {
    const accountAction = document.getElementById("accountAction")
    if (isLogin) {
        isLogin = false
        accountAction.innerText = `Login`
        profileGate()
    } else {
        profileGate()
    }
}




function userAuth() {
    const loginForm = document.getElementById("loginForm")
    loginForm.addEventListener("submit", e => {
        e.preventDefault()
        const loginName = document.getElementById("loginName").value
        const loginPassword = document.getElementById("loginPassword").value
        userData = users.find(a => a.userName == loginName)
        console.log(loginName);

        if (userData) {
            if (userData.password == loginPassword) {
                isLogin = true
                const accountAction = document.getElementById("accountAction")
                accountAction.textContent = 'Log Out'
                let userAccountData = accounts.find(a => a.userName == loginName)
                console.log(userAccountData);

                if (!userAccountData.name) {
                    onBoarding(userAccountData.userName,)
                } else {
                    currentUserId = userAccountData.userID
                    profileGate()
                }
            } else {
                alert('Invalid password')
            }
        } else {
            alert("Invalid username/password")
            return profileGate()
        }
    })
}

function addNewPost() {
    if (isLogin) {
        const newPostText = document.getElementById("newPostText")?.value
        const newPostImage = document.getElementById("newPostImage").value
        console.log(newPostText);

        posts.push({
            userID: currentUserId,
            isLiked: false,
            text: newPostText,
            image: newPostImage
        })
        console.log(posts[posts.length - 1]);
        postHistory.unshift(posts.length - 1)
        storeData('posts')
        refreshPosts()
    } else {
        alert('Log in to create posts')
    }

}

function showFollowing() {
    displayArea.innerHTML = ''
    console.log(posts);
    
    posts.forEach((item,index) => {
        console.log(item);
        console.log(item.userID);
        
        
        user = accounts.find(acc => acc.userID == item.userID )
        console.log(user);
        
        if(user.isFollowed){
            displayArea.innerHTML+= renderFollows(item.userID,index)
        }
    })
    if(displayArea.innerHTML == ''){
        displayArea.innerHTML= `<p class="text-center h-screen mt-40">Follow some profiles to see their posts here</p>`
    }
}

function renderFollows(userID,postID){
    userData = accounts.find(acc => acc.userID == userID)
    
    if(posts[postID].isLiked){
        return(
        `<div class="card">
            <div class="flex justify-between p-4">
                <div class="flex justify-start items-center gap-2">
                    <img src="${userData.userProfile}" class="h-10 w-10 border-1 rounded-3xl" alt="">
                    <div>
                    <h1>  ${userData.name}</h1>
                    <h1 class="!text-zinc-400">@${userData.userName}</h1>
                    </div>
                </div>
                <div id=userDetail class="flex items-center justify-end gap-2">
                    <button class="cursor-pointer" onclick="removeFollow(${userID})">Following</button>
                    <button onclick="removeLike(${postID})" ><i class="fa-regular fa-heart cursor-pointer"></i></button>
                </div>
            </div>
            <div class="px-4 text-justify grid grid-cols-1 justify-center">
                <p>${posts[postID].text}</p>
                <img src="${posts[postID].image}" alt="">
            </div>
            <hr class="my-3">
        </div>`
    )
    }else {
        return(
            `<div class="card">
            <div class="flex justify-between p-4">
                <div class="flex justify-start items-center gap-2">
                    <img src="${userData.userProfile}" class="h-10 w-10 border-1 rounded-3xl" alt="">
                    <div>
                    <h1>  ${userData.name}</h1>
                    <h1 class="!text-zinc-400">@${userData.userName}</h1>
                    </div>
                </div>
                <div id=userDetail class="flex items-center justify-end gap-2">
                    <button class="cursor-pointer" onclick="removeFollow(${userID})">Following</button>
                    <button onclick="addLike(${postID})" ><i class="fa-solid fa-heart cursor-pointer"></i></button>
                </div>
            </div>
            <div class="px-4 text-justify grid grid-cols-1 justify-center">
                <p>${posts[postID].text}</p>
                <img src="${posts[postID].image}" alt="">
            </div>
            <hr class="my-3">
        </div>`
        )
    }
    
}

function showLikes() {
    displayArea.innerHTML = ''
    posts.forEach((item,index) => {
        if(item.isLiked){
            displayArea.innerHTML += renderLikes(item.userID,index)
        }
    })

}

function renderLikes(userID,postID) {
    userData = accounts.find(a => a.userID == userID)
    return(
            `<div class="card">
            <div class="flex justify-between p-4">
                <div class="flex justify-start items-center gap-2">
                    <img src="${userData.userProfile}" class="h-10 w-10 border-1 rounded-3xl" alt="">
                    <div>
                    <h1>  ${userData.name}</h1>
                    <h1 class="!text-zinc-400">@${userData.userName}</h1>
                    </div>
                </div>
                <div id=userDetail class="flex items-center justify-end gap-2">
                    <button class="cursor-pointer" onclick="removeFollow(${userID})">Following</button>
                    <button onclick="removeLike(${postID})" ><i class="fa-solid fa-heart cursor-pointer"></i></button>
                </div>
            </div>
            <div class="px-4 text-justify grid grid-cols-1 justify-center">
                <p>${posts[postID].text}</p>
                <img src="${posts[postID].image}" alt="">
            </div>
            <hr class="my-3">
        </div>`
        )
}

document.getElementById("showFollowing").addEventListener("click",showFollowing)

document.getElementById("showFollowingMobile").addEventListener("click",showFollowing)

document.getElementById("showLikesMobile").addEventListener("click",showLikes)

document.getElementById("showLikes").addEventListener("click",showLikes)

document.getElementById("loadFeedDesktop").addEventListener("click", () => {
    postHistory = null
    refreshPosts()
})

document.getElementById("loadFeedMobile").addEventListener("click", () => {
    postHistory = null
    refreshPosts()
})


window.addEventListener("load", () => {
    refreshPosts()
    refreshProfiles()
    // postHistoryGen()
})




// function refreshFollowStatus() {
//     displayArea.innerHTML = ''
//     history.forEach((item, index) => {
//         let userID = posts[item].userID
//         userData = accounts.find(a => a.userID == userID)
//             if (following.includes(userID)) {
//                 displayArea.innerHTML += `<div class="card">
//             <div class="flex justify-between p-4">
//                 <div class="flex justify-start items-center gap-2">
//                     <img src="${userData.userProfile}" class="h-10 w-10 border-1 rounded-3xl" alt="">
//                     <span>${userData.userName}</span>
//                 </div>
//                 <div id=userDetail class="flex items-center justify-end gap-2">
//                     <button class="cursor-pointer" onclick="removeFollow(${userID})">Following</button>
//                     <button onclick="addLike()" ><i class="fa-regular fa-heart"></i></button>
//                 </div>
//             </div>
//             <div class="px-4 text-justify">
//                 <p>${posts[item].text}</p>
//                 <img src="${posts[item].image}" alt="">
//             </div>
//             <hr class="my-3">
//         </div>`
//             } else {
//                 displayArea.innerHTML += `<div class="card">
//             <div class="flex justify-between p-4">
//                 <div class="flex justify-start items-center gap-2">
//                     <img src="${userData.userProfile}" class="h-10 w-10 border-1 rounded-3xl" alt="">
//                     <span>${userData.userName}}</span>
//                 </div>
//                 <div id=userDetail class="flex items-center justify-end gap-2">
//                     <button onclick="addFollow(${userID})">Follow</button>
//                     <button onclick="addLike()" ><i class="fa-regular fa-heart"></i></button>
//                 </div>
//             </div>
//             <div class="px-4 text-justify">
//                 <p>${posts[item].text}</p>
//                 <img src="${posts[item].image}" alt="">
//             </div>
//             <hr class="my-3">
//         </div>`
//             }

//         })
//     }