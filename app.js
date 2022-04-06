const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;
  const github = new GitHub();
  const ui = new UI();

  if (userText !== '') {
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        console.log('User not found');
      } else {
        ui.showProfile(data.profile);
      }
    });
  } else {
    //clear profile
    ui.clearProfile();
  }
});
