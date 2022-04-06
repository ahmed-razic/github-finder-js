const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if (userText !== '') {
    const github = new GitHub();
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        console.log('User not found');
      } else {
        console.log(data);
      }
    });
  } else {
    //clear profile
  }
});
