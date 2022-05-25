var users =[
    {
        id: 1,
        name: 'John',
    },
    {
        id: 2,
        name: 'John1',
    },
    {
        id: 3,
        name : 'John2',
    }
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Hello ae',
    },
    {
        id: 2,
        user_id: 2,
        content: 'Hello ae1',
    }
]

// 1. Lay comments
// 2. Tu comments lay ra user_id
// Tu user_id lay ra user tuong ung

// Fake API

function getUsersByIds(userIDs){
    return new Promise(function(resolve, reject){
        var result = users.filter(function(user){
            return userIDs.includes(user.id);
        })
        setTimeout(function() {
            resolve(result);
        },1000);
    })
}

function getComments() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(comments);
        },1000)
    })
}

getComments()
    .then((comments) => {
        var userIDs = comments.map(function(comments){
                return comments.user_id;
            });
        // console.log(userIDs);
        return getUsersByIds(userIDs)
            .then((users) => {
                return {
                    users: users,
                    comments: comments,
                }
            })
    })
    .then((data) => {
        var commentBlock = document.getElementById("comment-box");

        var html = '';
        data.comments.forEach((comment) => {
            var user = data.users.find((user) => {
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}<\li>`;
        });
        commentBlock.innerHTML = html;
    })

