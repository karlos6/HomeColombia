function openPlatformModalMessage(message) {
    document.querySelector("#pMessage").innerHTML = message;
    openModal('modalMessage');
}

function openConfirmationModal() {
    openModal("modalConfirmation");
}

let openModal = modalId => {
    var elem = document.querySelector(`#${modalId}`);
    let instances = M.Modal.init(elem, {});
    instances.open();
}

function mostrarMensajeDeError(msj) {
    alert(msj);
}

function mensajeModalGenerico(m) {
    document.querySelector("#pmsj").innerHTML = m;
    var elem = document.querySelector('#modalmsj');
    let instance = M.Modal.init(elem, {});
    instance.open();
}



