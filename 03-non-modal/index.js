class Modal {
  constructor($target, content, isNonModal){
    this.$target = $target;
    this.content = content;
    this.isNonModal = isNonModal;

    this.visible = false;
    this.setEvent();
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

  setEvent(){
    window.addEventListener('click', this.closeModalEventListener);
    window.addEventListener('touchstart', this.closeModalEventListener);
  }

  closeModalEventListener = ({ target }) => {
    const $modalBody = this.$target.querySelector('.modal-body');
    if(this.visible && !$modalBody.contains(target)){
      this.closeModal();
    }
  }

  openModal = async () => {
    await this.sleep(0);
    this.visible = true;
    const $modal = this.$target.querySelector('.modal');
    $modal.classList.add('show');
  }

  closeModal = () => {
    this.visible = false;
    const $modal = this.$target.querySelector('.modal');
    $modal.classList.remove('show');
  }

  sleep = async (ms) => {
    return new Promise(resolve => setTimeout(() => resolve(true), ms));
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