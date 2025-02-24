export class Modal {
    constructor (classes) {
        this.classes = classes;
        this.modal = '';
        this.modalContent = '';
        this.modalCloseBtn = '';
        this.overlay = '';
    }

    buildModal(content){
        //Overlay
        this.overlay = this.createDomNode(this.overlay, 'div', 'overlay', 'overlay_modal');

        //Modal
        this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);

        //Modal content
        this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content');

        //Close button
        this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'span', 'modal__close-icon');
        this.modalCloseBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 20L11 11M11 11L20 2M11 11L20 20M11 11L2 2" stroke="#316DC2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    
        this.setContent(content);

        this.appendModalElements();

        //Bind Events
        this.bindEvents();

        //Open Modal
        this.openModal();
    }

    createDomNode (node, element, ...classes){
        node = document.createElement(element);
        node.classList.add(...classes);
        return node;
    }

    setContent(content) {
        if(typeof content === 'string') {
            this.modalContent.innerHTML = content;
        } else {
            this.modalContent.innerHTML = '';
            this.modalContent.appendChild(content);
        }
    }

    appendModalElements() {
        this.modal.append(this.modalCloseBtn);
        this.modal.append(this.modalContent);
        this.overlay.append(this.modal);
    }

    bindEvents() {
        this.modalCloseBtn.addEventListener('click', this.closeModal);
        this.overlay.addEventListener('click', this.closeModal);
    }

    openModal() {
        document.body.append(this.overlay);
    }

    closeModal(e) {
        let classes = e.target.classList;
        if (classes.contains('overlay') || classes.contains('modal__close-icon')) {
           document.querySelector('.overlay').remove(); 
        }
    }
}