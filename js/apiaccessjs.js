$(document).ready(function(e){
       var analysisReq= $.ajax({
           url:'/api/analyses',
           dataType: 'json',
           timeout: 500,
           headers: {
           	"Authorization": "Basic YWRtaW46YWRtaW4="
           }
             });
       
       analysisReq.success(function (data, status, jqXhr) {
			//$('p').append(data['name']);
           $.each(data.Table,function(i,analyse){
			   $("#analysis_set").append('<option value="'+analyse.id+'">'+analyse.name+'</option>');
			});
			console.log(jqXhr.responseText);
       });
       
       analysisReq.error(function (jqXhr, textStatus, errorMessage) {
    	   console.log('Error: ' + errorMessage);
       });
             
    });