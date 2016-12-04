console.log("entered Hijack Java Script...");

$(document).ready
(	
		function()
		{console.log("executing loadpage() 1st time...");

			loadPage();
		}
);

function loadPage(url) 
{
	if(url==undefined)
	{
		url="index.html"
		$("html").load(url + ' div',hijack);
		console.log("loading()...url="+url+ " its body");
	}
	else 
	{
		$("body").load(url + ' article', hijack);
		console.log("loading()...url="+url+" its article");
	}
	
	
}


function hijack()
{
  $('a').click(
	function(e)
	  {
		
		loadPage(e.target.href);
		console.log("Hijacking...href="+e.target.href);
		e.preventDefault();

	  }
		    );
}

