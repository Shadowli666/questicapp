/*Para almacenar las misiones*/
const dataQuest = [];

/*--------Objeto Quest------*/
function Quest (content, priority, nObj) {
	this.content = content;
	
	if (priority === true) {
		this.priority = priority;
	}else {
		this.priority = false;
	}

	if (nObj === "0") {
		nObj = "";
		this.nObj = nObj;
	}
	else {
		this.nObj = nObj;
	}
	}
/*
//Añadir a la lista
Quest.prototype.add = function() {
	
};
//Eliminar de la lista
Quest.prototype.del = function(){
	
};
*/
/*----------------------------------------------------*/

//Carga del documento
let init = () => {
	document.getElementById("btn-add").addEventListener("click", get, false);
}
//Obtener el value del input
let get = () => {
	const qstContent = document.getElementById("qstContent");
	const nObjectives = document.getElementById("nObjectives");
	const qstPriority = document.getElementById("qstPrincipal");
	dataQuest.push(new Quest (qstContent.value,qstPriority.checked,nObjectives.value));
	
	for(var k = 0, length3 = dataQuest.length; k < length3; k++){
		console.log(dataQuest[k]);
	}
	addElement();
}

let addElement = () => {

}

init();