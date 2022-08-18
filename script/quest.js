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

        if (var1.nObj != "") {
            const divObj = document.createElement("div");
            divObj.className = "col-lg-3";
            divObj.textContent = `(0/${var1.nObj})`
            divRow.insertAdjacentElement("beforeend", divObj);
        }
        //creates the check icon
        const checkIco = document.createElement("i");
        checkIco.className = `bi-check-square-fill checkIco`;
        divRow.insertAdjacentElement("afterbegin", checkIco);
        //creates the delete icon
        const delIco = document.createElement("i")
    }

    deleteElement(dataQuest){

    }

    getMsg(alert, msg) {
        alert.innerHTML = `<strong>Heyyy!</strong> ${msg}`;
		alert.hidden = false;
    }

}
/*----------------------------------------------------*/