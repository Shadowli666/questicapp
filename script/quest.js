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
        divRow.classList.add("row",`${var1.qstatus}`); // div Fila

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
        //creates the container of the buttons
        const divButtons = document.createElement("div");
        divButtons.className = "col-lg-3 text-end";
        divRow.insertAdjacentElement("beforeend", divButtons);

        //creates the check icon
        const checkIco = document.createElement("i");
        checkIco.className = `bi bi-check-lg checkIco icon`;
        divButtons.insertAdjacentElement("afterbegin", checkIco);
        checkIco.addEventListener("click",this.finishQuest,false)
        //creates the delete icon
        const delIco = document.createElement("i")
        delIco.className ='bi bi-x-lg delIco icon'
        delIco.addEventListener("click",this.deleteQuest, false)
        divButtons.insertAdjacentElement("beforeend", delIco);


    }
    finishQuest(e){
        //get element from DOM (row)
        const quest = e.target.parentElement.parentElement
        //toggle classes
        quest.classList.contains("ongoing")
        ? quest.classList.replace("ongoing","finished") //console.log(dataTest.classlist))
        : quest.classList.replace("finished","ongoing") //console.log(dataTest.classlist))
    }
    deleteQuest(e){
        //get element form DOM (row)
        const quest = e.target.parentElement.parentElement
        //removes the row
        quest.remove()
    }

    getMsg(alert, msg) {
        alert.innerHTML = `<strong>Heyyy!</strong> ${msg}`;
		alert.hidden = false;
    }

}
/*----------------------------------------------------*/