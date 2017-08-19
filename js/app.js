// console.log("ashsdfiashdfi")
var button = document.getElementById("buttonThing");
var img = document.getElementById("imgThing");
var txt = document.getElementById("txtThing");

var object1 = {
	imgSrc: "https://previews.123rf.com/images/photooasis/photooasis1002/photooasis100200144/6476216-Chocolate-cake-with-sour-cherries-and-pudding-on-a-white-background-Stock-Photo.jpg",
	name: "Cake",
	adj: "Tasty ",
	verb: "Chocolate "
};

var object2 = {
	imgSrc: "https://www.colourbox.com/preview/2156508-sweet-cake-on-plate-isolated-on-white-background.jpg",
	name: "Cake",
	adj: "Average ",
	verb: "Taste "
};

var object3 = {
	imgSrc: "http://www.stickpng.com/assets/images/584fcc976a5ae41a83ddee8e.png",
	name: "Donut",
	adj: "Pink",
	verb: " "
};

var object4 = {
	imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ipazcaTxsm3r_gooKVnBa_7l2e72Pvq6GNlMZAw80pO-XzKB",
	name: "Naruto Ramen",
	adj: "Good",
	verb: " "
};

var object5 = {
	imgSrc: "https://s-media-cache-ak0.pinimg.com/originals/84/b3/a4/84b3a4c125f71172b9ce0fb7cc05062f.png",
	name: "Shokugeki no Soma Fried Rice",
	adj: "Delicious",
	verb: " "
};

var arr = [object1, object2, object3, object4, object5];

button.addEventListener("click", function() {
	//console.log("test");
	var randomNum = Math.floor(Math.random() * arr.length);
	console.log(randomNum)
	img.src = arr[randomNum].imgSrc;
	txt.innerHTML = arr[randomNum].adj + arr[randomNum].verb + arr[randomNum].name + "!";
})