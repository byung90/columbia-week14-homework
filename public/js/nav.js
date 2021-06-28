const navList = document.querySelector('.nav');
const logout = document.querySelector('.signout');

const logoutHandler = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

if (logout) {
  logout.addEventListener('click', logoutHandler);
}