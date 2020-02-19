function openPlatformModalMessage(message){
    document.querySelector("#pMessage").innerHTML = message;
    openModal('modalMessage');
}

function openConfirmationModal(){
    openModal("modalConfirmation");
}

let openModal = modalId => {
    var elem = document.querySelector(`#${modalId}`);
    let instances = M.Modal.init(elem,{});
    instances.open();
}