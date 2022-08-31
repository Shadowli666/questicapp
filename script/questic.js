/*Para almacenar las misiones*/
const quest = new Quest();
const dataQuest = [];
const questContainerPrimary = document.getElementById("quest-container-principal");//questContainer principal
const questContainerSecondary = document.getElementById("quest-container-secondary");//questContainer secundario
let alert = document.getElementById("alert"); // leer div alerta
let msg;

//Carga del documento
const init = () => {
	document.querySelector("#btn-add").addEventListener("click", get, false);
}

//Obtener el value del input
function get() {

	const qstContent = document.getElementById("qstContent");
	const nObjectives = document.getElementById("nObjectives");
	const qstPriority = document.getElementById("qstPrincipal");

	if (qstContent.value === '') {
		quest.getMsg(alert, "¡Ingresa una misión!");
	} else if (nObjectives.value < 1) {
		quest.getMsg(alert, "¡Necesitas al menos 1 objetivo!");
	} else {
		document.getElementById("alert").hidden = true;
		dataQuest.push(new Quest(qstContent.value, qstPriority.checked, nObjectives.value, "ongoing"));
		quest.addElement(dataQuest);
	}
}


init();