class Modal {
  constructor($target, content, isNonModal) {
    this.$target = $target;
    this.content = content;
    this.isNonModal = isNonModal;

    this.visible = false;
    this.setEvent();
    this.render();
  }

  render() {
    this.$target.innerHTML = `
      <div class="modal">
        ${!this.isNonModal ? '<div class="dimmed"></div>' : ''}
        <div class="modal-body">
          ${this.content}
        </div>
      </div>
    `;
  }

  setEvent() {
    window.addEventListener('click', this.closeModalEventListener);
    window.addEventListener('touchstart', this.closeModalEventListener);
  }

  closeModalEventListener = ({ target }) => {
    const $modalBody = this.$target.querySelector('.modal-body');
    if (this.visible && !$modalBody.contains(target)) {
      this.closeModal();
    }
  }

  openModal = () => {
    this.visible = true;
    const $modal = this.$target.querySelector('.modal');
    $modal.classList.add('show');
  }

  closeModal = () => {
    this.visible = false;
    const $modal = this.$target.querySelector('.modal');
    $modal.classList.remove('show');
  }
}

const $modalWrapper = document.querySelector('#modal-wrapper');
const modal = new Modal(
  $modalWrapper,
  '<div class="modal-content"> modal </div>',
  false
);

const $modalOpenBtn = document.querySelector('#modal-open-btn');
$modalOpenBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  modal.openModal();
});