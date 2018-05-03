function btnalert(){
	swal({   title: "Registration will Start Soon!",   
    text: "Want To Follow the Event on Facebook?",   
    type: "warning",   
    showCancelButton: true,   
    confirmButtonColor: "green",   
    confirmButtonText: "Yes, Follow",   
    cancelButtonText: "No, Thanks!",   
    closeOnConfirm: false,   
    closeOnCancel: false }, 
    function(isConfirm){   
        if (isConfirm) 
    {   
        swal("Account Removed!", "Your account is removed permanently!", "success");   
        } 
        else {     
            swal("Hurray", "Account is not removed!", "error");   
            } });
}