function remove() {
    try {
        //document.getElementById('pagelet_ego_pane_w').innerHTML = '';
        //var element = document.querySelector("span.gb_0a.gb_Za");
    	//var element = document.querySelector("span.gb_Za.gb_Za");
        //var element = document.querySelector("span.gb_Xa.gb_Wa");
    	//var element = document.querySelector("span.gb_Za.gb_Xa");
    	//var element = document.querySelector("span.gb_Xa.gb_Xa");
    	//var element = document.querySelector("div.gb_zc.gb_Ud");
    	//var element = document.querySelector("div.gb_Cc.gb_Wd");    	
    	//var element = document.querySelector("div.gb_cc");
        //var element = document.querySelector("div.gb_Ac.gb_Ud");		// version 1.0
        var element = document.querySelector("div.gb_Bc gb_Xd");		// version 1.1
        
        element.parentElement.removeChild(element);
    }
    catch(err) {
        //
    }
  
    console.log('blogger logo has been removed!');
    setTimeout(function(){remove();}, 1000);
}
remove();