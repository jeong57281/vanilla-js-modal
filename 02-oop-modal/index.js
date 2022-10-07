class Modal {
  constructor($target, content){
    this.$target = $target;
    this.content = content;
    this.setEvent();
    this.render();
  }

  render(){
    this.$target.innerHTML = `
      <div class="modal">
        <div class="dimmed"></div>
        <div class="modal-body">
          ${this.content}
        </div>
      </div>
    `;
  }

  setEvent(){
    this.$target.addEventListener('click', (e) => {
      if(e.target.classList.contains('dimmed')){
        this.closeModal();
      }
    });
  }

  openModal(){
    const $modal = this.$target.querySelector('.modal');
    $modal.classList.add('show');
  }

  closeModal(){
    const $modal = this.$target.querySelector('.modal');
    $modal.classList.remove('show');
  }
}

const $modalAWrapper = document.querySelector('#modalA-wrapper');
const modalA = new Modal(
  $modalAWrapper,
  '<div class="modal-content"> modalA </div>'
);

const $modalAOpenBtn = document.querySelector('#modalA-open-btn');
$modalAOpenBtn.addEventListener('click', () => {
  modalA.openModal();
});

const $modalBWrapper = document.querySelector('#modalB-wrapper');
const modalB = new Modal(
  $modalBWrapper,
  '<div class="modal-content"> modalB </div>'
);

const $modalBOpenBtn = document.querySelector('#modalB-open-btn');
$modalBOpenBtn.addEventListener('click', () => {
  modalB.openModal();
});