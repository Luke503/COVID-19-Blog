

function createPost(firstName, lastName, year, major, comment) {

  console.log("createPost called");

  var context = {
    firstName: firstName,
    lastName: lastName,
    year: year,
    major: major,
    comment: comment
  };


  var postsHTML = Handlebars.templates.posts(context);

  console.log("== photoCardHTML:", postsHTML);

  return postsHTML;
}


var allPosts = [];

function postComment() {

  console.log("postComment called");

  var firstName = document.getElementById('firstname').value.trim();
  var lastName = document.getElementById('lastname').value.trim();
  var year = document.querySelector('#post-year-fieldset input:checked').value;
  var major = document.getElementById('major').value.trim();
  var comment = document.getElementById('experience').value.trim();

  if (!firstName || !lastName || !year || !major || !comment) {
    alert("Please Fill in The Required Fields!");
  } else {

    var newPost = createPost(firstName, lastName, year, major, comment);

    console.log("== newPost:", newPost);

    var postsContainer = document.querySelector('.posts');

    console.log("postsContainer:", postsContainer);
    postsContainer.insertAdjacentHTML('beforeend',newPost);

    console.log("newpost type: ", typeof(newPost));
    console.log("post added");

    clearInput();
  }
}

window.addEventListener('DOMContentLoaded', function () {
  var submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', postComment);

});

function clearInput() {

  var postText = [
    document.getElementById('firstname'),
    document.getElementById('lastname'),
    document.getElementById('major'),
    document.getElementById('experience')
  ];

  postText.forEach(function (inputElem) {
    inputElem.value = '';
  });

  var majorCheckbox = document.querySelector('#post-year-fieldset input[checked]');
  majorCheckbox = true;

}
