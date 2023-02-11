const signInForm = document.getElementById('sign-in-form');
const signOutForm = document.getElementById('sign-out-form');

signInForm.addEventListener('submit', e => {
	e.preventDefault();
	const username = signInForm.username.value;
	const password = signInForm.password.value;
	if (username === 'user' && password === 'password') {
		alert('Sign in successful!');
	} else {
		alert('Invalid username or password');
	}
	signInForm.reset();
});

signOutForm.addEventListener('submit', e => {
	e.preventDefault();
	alert('Sign out successful!');
});
