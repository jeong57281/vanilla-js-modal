class Modal {
  constructor($target, content, isNonModal){
    this.$target = $target;
    this.content = content;
    this.isNonModal = isNonModal;

    this.firstExecute = true;
    this.render();
  }

  render(){
    this.$target.innerHTML = `
      <div class="modal">
        <div class="modal-body">
          ${this.content}
        </div>
        ${!this.isNonModal ? '<div class="dimmed"></div>' : ''}
      </div>
    `;
  }

  closeModalEventListener = ({ target }) => {
    alert('debug');
    const $modalBody = this.$target.querySelector('.modal-body');
    if(!$modalBody.contains(target) && !this.firstExecute){
      this.closeModal();
    }
    this.firstExecute = false;
  }

  openModal(){
    this.firstExecute = true;

    const $modal = this.$target.querySelector('.modal');
    $modal.classList.add('show');

    window.addEventListener('click', this.closeModalEventListener);
    window.addEventListener('touchstart', this.closeModalEventListener);
  }

  closeModal(){
    const $modal = this.$target.querySelector('.modal');
    $modal.classList.remove('show');

    window.removeEventListener('click', this.closeModalEventListener);
  }
}

const $modalWrapper = document.querySelector('#modalA-wrapper');
const modal = new Modal($modalWrapper, 'modal content', true);

const $modalOpenBtn = document.querySelector('#modalA-open-btn');
$modalOpenBtn.addEventListener('click', () => {
  modal.openModal();
});

const $alertBtn = document.querySelector('#alert-btn');
$alertBtn.addEventListener('click', () => {
  alert('non-modal');
});