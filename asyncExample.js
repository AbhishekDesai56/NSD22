const { resolve, reject } = require("promise");

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Now we have the data");
            resolve({ userEmail: email});
        }, 3000);
    });
}


function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("I am in a get video function");
            resolve(["video1", "video2", "video3"]);
        }, 2000);
    });
}

function videosDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("title of the video");
        }, 1000);
    });
}

async function displayUser() {
    try {
        const loggedUser =  loginUser("ed", 13485);
        const video =  getUserVideos(loggedUser.userEmail);
        const detail = await videosDetails(video[0]);
        console.log(detail);
    } catch(err) {
        console.log("We could not get the videos")
    }
}

displayUser();