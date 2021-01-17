/*Para almacenar las misiones*/
const dataQuest = [];
const questContainerPrimary = document.getElementById("quest-container-principal");//questContainer principal
const questContainerSecondary = document.getElementById("quest-container-secondary");//questContainer secundario

/*--------Objeto Quest------*/
function Quest (content, priority, nObj, qstatus) {
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
	this.qstatus = qstatus;
}
/*----------------------------------------------------*/

//Carga del documento
const init = () => {
	document.querySelector("#btn-add").addEventListener("click", get, false);
}
//Obtener el value del input
const get = () => {
	const qstContent = document.getElementById("qstContent");
	const nObjectives = document.getElementById("nObjectives");
	const qstPriority = document.getElementById("qstPrincipal");
	dataQuest.push(new Quest (qstContent.value,qstPriority.checked,nObjectives.value,"ongoing"));
	addElement();
}

const addElement = () => {

	let var1 = dataQuest[dataQuest.length-1];//Para almacenar el ultimo objeto Quest

	const divRow = document.createElement("div");
	divRow.className = "row"; // div Fila

	var1.priority
	? questContainerPrimary.insertAdjacentElement("beforeend", divRow)//true
	: questContainerSecondary.insertAdjacentElement("beforeend", divRow);//false

	const divContent = document.createElement("div");
	divContent.className = "col-lg-6"
	divContent.textContent = `${var1.content}`;
  	divRow.insertAdjacentElement('beforeend', divContent);

  	if (var1.nObj != "") {
			const divObj = document.createElement("div");
			divObj.className = "col-lg-3";
			divObj.textContent = `N de objetivos: ${var1.nObj}`
			divRow.insertAdjacentElement("beforeend",divObj);
		}

}

init();