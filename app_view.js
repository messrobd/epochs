const modal = document.getElementById('modal');

const toggleModal = function(modalElement) {
  let hidden = modalElement.className === 'hide',
      shown = modalElement.className === 'show';
  if (!(hidden || shown)) throw 'element is not togglable';
  modalElement.className = hidden ? 'show' : 'hide';
}

const buttons = document.getElementsByTagName('button');

buttons.namedItem('add-epoch-invoke').onclick = () => toggleModal(modal);
