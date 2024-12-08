// // callback

// function fetchUser(userId, callback) {
//     setTimeout(() => {
//         console.log("User fetched");
//         callback(null, { userId, name: "John Doe" });
//     }, 1000);
// }

// function fetchPosts(userId, callback) {
//     setTimeout(() => {
//         console.log("Posts fetched");
//         callback(null, [{ id: 1, title: "First Post" }, { id: 2, title: "Second Post" }]);
//     }, 1000);
// }

// function fetchComments(postId, callback) {
//     setTimeout(() => {
//         console.log(`Comments fetched for post ${postId}`);
//         callback(null, ["Nice post!", "Thanks for sharing"]);
//     }, 1000);
// }

// // Nested Callbacks
// fetchUser(1, (err, user) => {
//     if (err) return console.error(err);
//     fetchPosts(user.userId, (err, posts) => {
//         if (err) return console.error(err);
//         fetchComments(posts[0].id, (err, comments) => {
//             if (err) return console.error(err);
//             console.log("Comments: ", comments);
//         });
//     });
// });

// // Simulate asynchronous tasks with Promises
// function fetchUser(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("User fetched");
//             resolve({ userId, name: "John Doe" });
//         }, 1000);
//     });
// }

// function fetchPosts(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Posts fetched");
//             resolve([{ id: 1, title: "First Post" }, { id: 2, title: "Second Post" }]);
//         }, 1000);
//     });
// }

// function fetchComments(postId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Comments fetched for post ${postId}`);
//             resolve(["Nice post!", "Thanks for sharing"]);
//         }, 1000);
//     });
// }

// // Promise Chaining
// fetchUser(1)
//     .then(user => fetchPosts(user.userId))
//     .then(posts => fetchComments(posts[0].id))
//     .then(comments => console.log("Comments: ", comments))
//     .catch(err => console.error(err));

//     async function fetchAllData() {
//         try {
//             const user = await fetchUser(1);
//             const posts = await fetchPosts(user.userId);
//             const comments = await fetchComments(posts[0].id);
//             console.log("Comments: ", comments);
//         } catch (err) {
//             console.error(err);
//         }
//     }

//     fetchAllData();

// function useLoggged(callback) {
//   console.log("user logged in");
//   callback();
// }

// function createpost(callback) {
//   console.log("Post is created");
//   callback();
// }

// function commentOnPost(callback) {
//   console.log("Added comment on Post");
//   callback();
// }

// function deletePost() {
//   console.log("Post is deleted successfully");
// }

// useLoggged(() => {
//     createpost(() => {
//         commentOnPost(() => {
//             deletePost()
//             console.log("end")
//         })
//     })
// })

function userLoggedIn() {
  return new Promise((resolve, reject) => {
    resolve("user Logged in");
  });
}

function createPost() {
  return new Promise((resolve, reject) => {
    resolve("Post is created");
  });
}

function commentOnPost() {
  return new Promise((resolve, reject) => {
    resolve("Added comment on Post");
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    resolve("Post deleted successfully");
  });
}

// userLoggedIn().then((res) => {
//     console.log(res)
// })
// createPost().then((res) => {
//     console.log(res)
// })

// commentOnPost().then((res) => {
//     console.log(res)
// })

// deletePost().then((res) => {
//     console.log(res)
// })

// userLoggedIn()
//   .then((res) => {
//     console.log(res);
//     return createPost();
//   })
//   .then((res) => {
//     console.log(res);
//     return commentOnPost();
//   })
//   .then((res) => {
//     console.log(res);
//     return deletePost();
//   })
//   .then((res) => {
//     console.log(res);
//   });



const byUsingasyncAwait = async () => {
     const userLogged = await userLoggedIn()
     const createUserPost = await createPost()
     const postComment = await commentOnPost()
     const deleteP = await deletePost()
     
     console.log('async await start');
     
     console.warn(userLogged)
     console.warn(createUserPost)
     console.warn(postComment)
     console.warn(deleteP)

     console.log('async await end')
}


byUsingasyncAwait()