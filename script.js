function greet() 
{
	window.alert("Hello everyone!");
}


function init()
{
	document.getElementById("first").src = "flower2.png";
	document.getElementById("cont").getElementsByTagName("img")[1].src = "flower2.png";
	document.getElementById("cont").getElementsByTagName("img")[3].src = "flower2.png";



	var changeSrc = function(event) {
		if(event.target.src)
		{
		let filename = event.target.src.replace(/^.*[\\\/]/, '');
		  if (filename == "flower1.png") {
		    event.target.src = "flower2.png";
		  }
		  else {
		    event.target.src = "flower1.png";
		  }
		}
		
	};

	document.getElementById("event").addEventListener("mouseover", changeSrc);



	flow();
	rain();
	addItem();
	removeItem();
}

function flow()
{
	let image = document.createElement("img");
	image.setAttribute("src", "flower2.png");
	document.getElementById("new_element").appendChild(image);
}


function rain() 
{
	let spans = document.getElementById("rainbow").getElementsByTagName("span");
	let colors = ["red", "orange","yellow","green","blue","purple","pink"];

	for (var i = spans.length - 1; i >= 0; i--)
	{
		spans[i].style.color = colors[i];
	}

}



function addItem(){

    var check = document.getElementById("important");

    var check2 = document.getElementById("grocerie");



    var ul = document.getElementById("liste");

    var item = document.getElementById("item");

    var li = document.createElement("li");

    li.setAttribute('id',item.value);

    li.appendChild(document.createTextNode(item.value));

    ul.appendChild(li);

    if(check.checked) {

         li.style.color = 'red';

    }

    if(check2.checked){

        li.style["text-decoration"] = 'underline';

    }

}



function removeItem(){

    var ul = document.getElementById("liste");

    var item2 = document.getElementById("item2").value;

    ul.removeChild(ul.childNodes[item2]);

}