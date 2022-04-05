// js cho cập nhật tài khoản
document.getElementById("Edit-account").addEventListener('click',function(){
	document.getElementById("Edit-user-name").readOnly = false;
	document.getElementById("Edit-password").readOnly = false;
	document.getElementById("Edit-user-name").value = document.querySelectorAll(".Show-list-account tr td")[0].innerText;
	document.getElementById("Edit-password").value = document.querySelectorAll(".Show-list-account tr td")[1].innerText;
	document.getElementById("Save-account").addEventListener('click',function(){
		let newUserName = document.getElementById("Edit-user-name");
		let newPassword = document.getElementById("Edit-password");
		if((newUserName.value.length>0 && newUserName.value.indexOf(' ')<0) && (newPassword.value.length>0 && newPassword.value.indexOf(' ')<0)){
			document.querySelectorAll(".Show-list-account tr td")[0].innerText = `${newUserName.value}`;
			document.querySelectorAll(".Show-list-account tr td")[1].innerText = `${newPassword.value}`;
			document.getElementById("Edit-user-name").value = '';
			document.getElementById("Edit-password").value = '';
			document.getElementById("Edit-user-name").readOnly = true;
			document.getElementById("Edit-password").readOnly = true;
		}
	});
});

// js cho xóa tài khoản
document.getElementById("Remove-account").addEventListener('click',function(){
	let listAccount = document.querySelectorAll(".Show-list-account tr");
	if(listAccount.length>1){
		listAccount[1].remove();
		document.getElementById("Edit-user-name").value = '';
		document.getElementById("Edit-password").value = '';
		document.getElementById("Edit-user-name").readOnly = true;
		document.getElementById("Edit-password").readOnly = true;
	}	
});