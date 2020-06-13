const data = [
  {
    name: 'Maria Salazar',
    age: 32,
    gender: 'female',
    lookingFor: 'male',
    location: 'Portland OR',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    name: 'Jane Smith',
    age: 26,
    gender: 'female',
    lookingFor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/15.jpg',
  },
  {
    name: 'Tiffany Lauren',
    age: 38,
    gender: 'female',
    lookingFor: 'female',
    location: 'Salem OR',
    image: 'https://randomuser.me/api/portraits/women/17.jpg',
  },
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profile-display').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item"> Name: ${currentProfile.name}</li>
        <li class="list-group-item"> Age: ${currentProfile.age}</li>
        <li class="list-group-item"> Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
      </ul>
    `;

    document.getElementById('image-display').innerHTML = `
      <img src="${currentProfile.image}" style="width: 100%">
    `;
  } else {
    // No more profiles
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
