const form = document.getElementById('access-form');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	const accessCode = document.getElementById('code').value;
	if (accessCode === 'Yes') {
		window.open('https://www.example.com', '_blank');
	} else {
		alert('Ρε ηλίθιε ένα απλό Yes έπρεπε να γράψεις πόσο δύσκολο μπορεί να είναι?');
	}
});
