// Test if update is available
window['isUpdateAvailable']
	.then(isAvailable => {
		if (isAvailable) {
			console.log('Update available');
		}
	});