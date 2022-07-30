var selectedRow = null;

//Mostrando o alerta;
function showAlert(message, className) {
    const div = document.createElement("div");
    div.className =  `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);

}

//Limpando os todos os campos;
function clearFields() {
    document.querySelector("primeiroNome").value = "";
    document.querySelector("sobrenome").value = "";
    document.querySelector("anoLetivo").value = "";
}

//Adicionando Dados;
document.querySelector("#student-form").addEventListener("submit", (e) => {
    e.preventDefault();

    //Obtendo o valor do formulario;
    const primeiroNome = document.querySelector("#primeiroNome").value;
    const sobrenome = document.querySelector("#sobrenome").value;
    const anoLetivo = document.querySelector("#anoLetivo").value;

    //Validando
    if(primeiroNome == "" || sobrenome == "" || anoLetivo == "") {
        showAlert("Por favor preencha os campos em Branco", "danger");
    }else {
        if(selectedRow == null) {
            const list = document.querySelector("#student-list");
            const row  = document.createElement("tr");

            row.innerHTML = `
                <td>${primeiroNome}</td>
                <td>${sobrenome}</td>
                <td>${anoLetivo}</td>
                <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            `
            list.appendChild(row);
            selectedRow = null;
            showAlert("Estudante Foi Adicionado", "success");
        }else {
            selectedRow.children[0].textContent = primeiroNome;
            selectedRow.children[1].textContent = sobrenome;
            selectedRow.children[2].textContent = anoLetivo;
            selectedRow = null;
            showAlert("Estudante Com as Informação Editada!", "info");
        }
        clearFields();
    }
});

//Edita Data;
document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if(target.classList.contains("edit")) {
       selectedRow = target.parentElement.parentElement;
       document.querySelector("#primeiroNome").value = selectedRow.children[0].textContent;
       document.querySelector("#sobrenome").value = selectedRow.children[1].textContent;
       document.querySelector("#anoLetivo").value = selectedRow.children[2].textContent;
    }
})

//Excluidos Dados;
document.querySelector("#student-list").addEventListener("click", (e) => {
     target = e.target;
     if(target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("Estudante Foi Deletado Da Lista!", "Dange");
     }
})
