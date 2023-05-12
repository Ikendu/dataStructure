
const createh1 = document.createElement("h1");
createh1.innerHTML = "My Scripting Web Page";
document.getElementById("heading").appendChild(createh1);
heading.setAttribute("align", "center");


const getH1 = document.getElementById("getH1");
getH1.setAttribute("align", "center");


const createlist = document.createElement("li");
createlist.innerHTML = "Going hard on JavaScript for real";
document.getElementById("listHead").appendChild(createlist);

const createlist1 = document.createElement("li");
createlist1.innerHTML = "I must surely get to the top of program writing";
var second = listHead.getElementsByTagName("li")[3];
listHead.insertBefore(createlist1, second);

const createlist2 = document.createElement("li");
createlist2.innerHTML = "I will focus fully on JavaScript for the next one week";
document.getElementById("listHead").appendChild(createlist2);
 
function pageLoading()
{
		getH1.onclick = function ()
		{
		alert("You just clicked the Heading");
		};
}

var currentpos = 0;

function beginAnimation()
{
	document.getElementById("move").style.position = "absolute";
	document.getElementById("move").style.left = "0px";
	document.getElementById("move").style.top = "100px";
	intervalHandle = setInterval(animatein, 50);
}
function animatein()
{
	currentpos += 5;
	document.getElementById("move").style.left = currentpos + "px";
	if ( currentpos > 1200)
	{
		clearInterval(beginAnimation);
		document.getElementById("move").style.position = "absolute";
		document.getElementById("move").style.left = "";
		document.getElementById("move").style.top = "";
	}

}

//Name entry control
var nameField = document.getElementById("name"); 
nameField.onfocus = function(){
	if (nameField.value == "Full Name")
	{
		nameField.value = "";
	}
};
nameField.onblur = function()
{
	if (nameField.value == "")
	{
		nameField.value = "Enter Full Name";
	}
};

//Email entry control
var emailField = document.getElementById("email");
emailField.onfocus = function()
{
	if (emailField.value == "Enter Your Email"){
		emailField.value = "";
	}
};
emailField.onblur = function()
{
	if (emailField.value == "")
	{
		emailField.value = "Enter Your Email";
	}
};

//Department entry control
var deptField = document.getElementById("dept");

deptField.onfocus = function()
{
	if (deptField.value == "Enter Your Department")
	{
		deptField.value = "";
	}
};
deptField.onblur = function()
{
	if (deptField.value == "")
	{
		deptField.value = "Enter Your Department";
	}
};

const imageItems = document.getElementById("pics");
const images = ["image/ak.jpg", "image/ak1.jpg", "image/wf.jpg", "image/b.jpg", "image/d.jpg", "image/wf1.jpg"];

let i = 0;

function changePics()
{
	imageItems.setAttribute("src", images[i]);
	i++;
	if (i >= images.length)
	{
		i = 0;
	}
}
const controlInterval = setInterval(changePics,  2000); 

imageItems.onclick = function()
{
	clearInterval(controlInterval);
}

//control submission of form 
function formControl()
{
	document.getElementById("form").onsubmit = function()
	{
		if (document.getElementById("email").value == "")
		{
			document.getElementById("errorMessage").innerHTML = "Pleaase provide an Email";
			return false;
		}
		else if (document.getElementById("email").value == "Enter Your Email")
		{
			document.getElementById("errorMessage").innerHTML = "Pleaase provide an Email";
			return false;
		}
		else if (document.getElementById("name").value == "")
		{
			document.getElementById("errorMessage").innerHTML = "Pleaase provide your name";
			return false;
		}
		else if (document.getElementById("name").value == "Enter Full name")
		{
			document.getElementById("errorMessage").innerHTML = "Pleaase provide your name";
			return false;
		}
		else
		{
			document.getElementById("name").innerHTML = "";
			return (true);
		}
		
	}

	//contol further infomation part
	document.getElementById("more").onclick = function()
	{
		if (document.getElementById("more").checked)
		{
			document.getElementById("moreInfo").style.display = "block";
		}
		else
		{
			document.getElementById("moreInfo").style.display = "none";
		}
	}
	document.getElementById("moreInfo").style.display = "none";
}

//control window loading of JavaScript
window.onload = function()
{
	pageLoading();
	formControl();
	beginAnimation();

};

//setTimeout(controlInterval, 3000);

/*console.log("How are you doing");

var student1 = {name: "Aniede Chibundu", age: 30, level: "graduated"};
var student2 = {name: "Ikenna Eke", age: 25, level: "student"};

function getDetails()
{
	console.log("The name of the student is "+ this.name +" in "+ this.level + " level with age " + this.age + ".");
}

student1.details = getDetails;
student2.details = getDetails;

student1.details();
student2.details();

const headNote = document.getElementById("headNote");
console.log("The is an Element of type: ", headNote.nodeType);
console.log("The inner html is: ", headNote.innerHTML);
console.log("It contains " , headNote.childNodes.length , " child Nodes");

const listItems = document.getElementsByTagName("li");
console.log("The number of lists is: ", listItems.length);
console.log("The content is: ", listItems.innerHTML);
*/

//const firstpara = document.getElementById("firstpara");
//console.info("The contents of the first paragraph is: ", firstpara.innerHTML);
