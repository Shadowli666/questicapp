/*Para almacenar las misiones*/
const dataQuest = [];
const questContainerPrimary = document.querySelector("#quest-container-principal");//questContainer
const questContainerSecondary = document.querySelector("#quest-container-secondary");//questContainer

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
let init = () => {
	document.querySelector("#btn-add").addEventListener("click", get, false);
}
//Obtener el value del input
let get = () => {
	const qstContent = document.querySelector("#qstContent");
	const nObjectives = document.querySelector("#nObjectives");
	const qstPriority = document.querySelector("#qstPrincipal");
	dataQuest.push(new Quest (qstContent.value,qstPriority.checked,nObjectives.value,"ongoing"));
	addElement();
}

let addElement = () => {

	let var1 = dataQuest[dataQuest.length-1];

	if (var1.priority===true){
		const divRow = document.createElement("div");
		divRow.className = "row";
		questContainerPrimary.insertAdjacentElement("beforeend",divRow);

		const divContent = document.createElement("div");
		divContent.className = "col-lg-6";
		divContent.textContent = `${var1.content}`;
		divRow.insertAdjacentElement("beforeend",divContent);

		if (var1.nObj != "") {
			const divObj = document.createElement("div");
			divObj.className = "col-lg-3";
			divObj.textContent = `N de objetivos: ${var1.nObj}`
			divRow.insertAdjacentElement("beforeend",divObj);
		}

	} 
	else {
		const divRow = document.createElement("div");
		divRow.className = "row";
		questContainerSecondary.insertAdjacentElement("beforeend",divRow);

		const divContent = document.createElement("div");
		divContent.className = "col-lg-6";
		divContent.textContent = `${var1.content}`;
		divRow.insertAdjacentElement("beforeend",divContent);

		if (var1.nObj != "") {
			const divObj = document.createElement("div");
			divObj.className = "col-lg-3";
			divObj.textContent = `N de objetivos: ${var1.nObj}`
			divRow.insertAdjacentElement("beforeend",divObj);
		}
}
}

init();