$(function(){

	$('.btn').on("click", function(){
        let score = Math.round(Math.random()*2);
		let user = $(this).attr('data-score');
		
		let result =(function(){
			if(score == 0 && user == 0) return '<img src="images/hold.jpg" alt="" >';
			if(score == 0 && user == 1) return '<img src="images/ok.jpg" alt="" >';
			if(score == 0 && user == 2) return '<img src="images/ng.jpg" alt="" >';
			if(score == 1 && user == 0) return '<img src="images/ok.jpg" alt="" >';
			if(score == 1 && user == 1) return '<img src="images/hold.jpg" alt="" >';
			if(score == 1 && user == 2) return '<img src="images/ng.jpg" alt="" >';
			if(score == 2 && user == 0) return '<img src="images/ng.jpg" alt="" >';
			if(score == 2 && user == 1) return '<img src="images/ok.jpg" alt="" >';
			return '<img src="images/hold.jpg" alt="" ></div>';
		})();
		$('#g_resultArea').html(result)	
    });
});