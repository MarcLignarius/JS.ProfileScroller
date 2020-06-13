class Data {
  async getData(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }
}

//Init Data
const data = new Data();

data.getData('https://jsonplaceholder.typicode.com/users').then((data) => {
  const profiles = profileIterator(data);
  //Creating event listener
  document
    .getElementById('next')
    .addEventListener('click', nextProfile.bind(null, profiles));
  nextProfile(profiles);
});

function nextProfile(profiles) {
  //Getting Iteration next value
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    //Targeting the profile div and inputting the UI data
    document.getElementById('profile-display').innerHTML = `
        <ul class="list-group">
          <li class="list-group-item">Name: ${currentProfile.name}</li>
          <li class="list-group-item">Username: ${currentProfile.username}</li>
          <li class="list-group-item">Email: ${currentProfile.email}</li>
          <li class="list-group-item">Company: ${currentProfile.company.name}</li>
        </ul>
      `;
  } else {
    // No more profiles
    window.location.reload();
  }
}

//Iteration function
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      if (nextIndex < profiles.length) {
        return { value: profiles[nextIndex++], done: false };
      } else {
        return { done: true };
      }
    },
  };
}
