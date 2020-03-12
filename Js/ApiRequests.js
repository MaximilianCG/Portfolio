function showRepos(){
	var theUrl = 'https://api.github.com/users/MaximilianCG/repos'
	var callback = callbackRepos;


    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(JSON.parse(xmlHttp.responseText));
	}

    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);

}


function callbackRepos(json){
	
	var conteiner = document.getElementsByClassName('github')[0];
	
	for(b = 0; b < 4; b++){
		
		//creating with 4 = nodes
		var i = 0; 

		var repo = document.createElement('div');
		repo.setAttribute('class', 'repo')
		
		var h1 = document.createElement('h1');
		h1.textContent = json[i]['name'];

		var img = document.createElement('img');
		img.setAttribute('src', 'https://cdn.eso.org/images/screen/eso1907a.jpg');

		var description = document.createElement('p');
		description.textContent = json[i]['description'];

		repo.appendChild(h1);
		repo.appendChild(img);
		repo.appendChild(description);

		conteiner.appendChild(repo);


	}
	
	
}
