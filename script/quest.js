/*--------Objeto Quest------*/
class Quest {

    constructor(content, priority, nObj, qstatus) {
        this.content = content;
        this.priority = priority;
        this.nObj = nObj;
        this.qstatus = qstatus;
    }
    /*adds element in DOM*/
    addElement(dataQuest) {

        let var1 = dataQuest[dataQuest.length - 1];//Para almacenar el ultimo objeto Quest

        const divRow = document.createElement("div");
        divRow.className = "row"; // div Fila

        var1.priority
            ? questContainerPrimary.insertAdjacentElement("beforeend", divRow)//true
            : questContainerSecondary.insertAdjacentElement("beforeend", divRow);//false

        const divContent = document.createElement("div");
        divContent.className = "col-lg-6"
        divContent.textContent = `${var1.content}`;
        divRow.insertAdjacentElement('beforeend', divContent);

        const divObj = document.createElement("div");
        divObj.className = "col-lg-3";
        divObj.textContent = `(0/${var1.nObj})`
        divRow.insertAdjacentElement("beforeend", divObj);

        const divButtons = document.createElement("div");
        divButtons.className = "col-lg-3 text-end";
        divRow.insertAdjacentElement("beforeend", divButtons);

        //creates the check icon
        const checkIco = document.createElement("i");
        checkIco.className = `bi bi-check-lg checkIco icon`;
        divButtons.insertAdjacentElement("afterbegin", checkIco);
        //creates the delete icon
        const delIco = document.createElement("i")
        delIco.className ='bi bi-x-lg delIco icon'
        divButtons.insertAdjacentElement("beforeend", delIco);
    }

    deleteElement(dataQuest){

    }

    getMsg(alert, msg) {
        alert.innerHTML = `<strong>Heyyy!</strong> ${msg}`;
		alert.hidden = false;
    }

}
/*----------------------------------------------------*/