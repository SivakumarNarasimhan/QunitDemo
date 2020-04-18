
function startLoading() {
	$('#statusImg').removeClass('loading hideBlock');
	$('#statusImg').addClass('loading');
}
function stopLoading() {
	$('#statusImg').addClass('loading hideBlock');
	$('#statusImg').removeClass('loading');
}

function callAjax(url,data,type){
	$.ajax({
		data :data,
		url : url,
		type : type,

		beforeSend : function() {
			startLoading();
		},
		success : function(response) {
			//var option = $("<h4>").html(response).find("#option").val();
			 if(response.trim()=="success")
				{
				 $('.alertText').text('Settings has been saved successfully.');
				 $('#dialog-modal').dialog('open');
				 $('.okBtn').click(function(){window.location.href='../login/applicationSettings.htm';});
				}
			 else {
				 $('.alertText').text(response.trim());
				 $('#dialog-modal').dialog('open');
			 }
			stopLoading();
		},
		error : function() {
			//goToLogin();
		}
	});
}

