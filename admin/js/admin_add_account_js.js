// js cho thêm tài khoản
document.getElementById("Add-account").addEventListener('click',function(){
	let newUserName = document.getElementById("New-user-name");
	let password = document.getElementById("Password");
	if((newUserName.value.length>0 && newUserName.value.indexOf(' ')<0) && (password.value.length>0 && password.value.indexOf(' ')<0)){
		let newAccount = document.createElement("tr");
		newAccount.innerHTML = `<td>${newUserName.value}</td><td>${password.value}</td>`;
		document.querySelector(".Show-list-account table").appendChild(newAccount);
		newUserName.value = '';
		password.value = '';
	}
});