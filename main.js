let IsDark = false;

function toggleMode() {
	if (IsDark) {
		document.body.style.backgroundColor = "white";
		document.body.style.color = "black";
		document.getElementById('outc').style.backgroundColor = "white";
		document.getElementById('outc').style.color = "black";
		document.getElementById('night').innerHTML = "Dark Theme";
		document.getElementsByTagName('button')[0].style.color = "white";
		document.getElementsByTagName('button')[0].style.backgroundColor = "black";
		document.getElementsByTagName('button')[0].style.borderColor = "black";
		document.getElementsByTagName('button')[1].style.color = "white";
		document.getElementsByTagName('button')[1].style.backgroundColor = "black";
		document.getElementsByTagName('button')[1].style.borderColor = "black";
		document.getElementsByTagName('button')[2].style.color = "white";
		document.getElementsByTagName('button')[2].style.backgroundColor = "black";
		document.getElementsByTagName('button')[2].style.borderColor = "black";
		IsDark = false;
	} else {
		document.body.style.backgroundColor = "black";
		document.body.style.color = "white";
		document.getElementById('outc').style.backgroundColor = "black";
		document.getElementById('outc').style.color = "white";
		document.getElementById('night').innerHTML = "Light Theme";
		document.getElementsByTagName('button')[0].style.color = "black";
		document.getElementsByTagName('button')[0].style.backgroundColor = "white";
		document.getElementsByTagName('button')[0].style.borderColor = "white";
		document.getElementsByTagName('button')[1].style.color = "black";
		document.getElementsByTagName('button')[1].style.backgroundColor = "white";
		document.getElementsByTagName('button')[1].style.borderColor = "white";
		document.getElementsByTagName('button')[2].style.color = "black";
		document.getElementsByTagName('button')[2].style.backgroundColor = "white";
		document.getElementsByTagName('button')[2].style.borderColor = "white";
		IsDark = true;
	}
}

var del;
var out = document.getElementById('outc');
out.value = "";

function showClips() {
	out.value = "";
	db.collection("clips").get().then((querySnapshot) => {
		querySnapshot.forEach((doc) => {
			console.log(`${doc.id}=>${doc.data().content}`);
			del = doc.id;
			
		});
		out.value += doc.data().content + "\n";
	});
}

function update() {
	db.collection("clips").add({
		content: out.value
	}).then(function (docRef) {
		console.log("Document written with ID: ", docRef.id);
		alert("Updated Successfully");
	}).catch(function (error) {
		console.error("Error adding document: ", error);
		alert("Update failed");
	});
	remove(del);
}

function remove(id) {
	db.collection("clips").doc(id).delete().then(function () {
		console.log("Document successfully deleted!");
	}).catch(function (error) {
		console.error("Error removing document: ", error);
	});
}
