class Modal {
  constructor($target, content){
    this.$target = $target;
    this.content = content;
    this.setEvent();
    this.render();
  }

  render(){
    this.$target.innerHTML = `
      <div class="modal hidden">
        <div class="modal-body">
          ${this.content}
        </div>
        <div class="dimmed">
        </div>
      </div>
    `;
  }

  setEvent(){
    this.$target.addEventListener('click', (e) => {
      if(e.target.closest('.dimmed')){
        this.closeModal();
      }
    });
  }

  openModal(){
    const $modal = this.$target.querySelector('.modal');
    $modal.classList.remove('hidden');
  }

  closeModal(){
    const $modal = this.$target.querySelector('.modal');
    $modal.classList.add('hidden');
  }
}

const $modalAWrapper = document.querySelector('#modalA-wrapper');
const modalA = new Modal($modalAWrapper, 'modalA content');

const $modalAOpenBtn = document.querySelector('#modalA-open-btn');
$modalAOpenBtn.addEventListener('click', () => {
  modalA.openModal();
});

const $modalBWrapper = document.querySelector('#modalB-wrapper');
const modalB = new Modal($modalBWrapper, 'modalB content');

const $modalBOpenBtn = document.querySelector('#modalB-open-btn');
$modalBOpenBtn.addEventListener('click', () => {
  modalB.openModal();
});