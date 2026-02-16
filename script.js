(function () {
  // Replace with your WhatsApp number (country code + number, no + or spaces)
  // Example: 919876543210 for India
  const WHATSAPP_NUMBER = '919876543210';

  const modal = document.getElementById('enquiryModal');
  const modalClose = document.getElementById('modalClose');
  const modalProductName = document.getElementById('modalProductName');
  const form = document.getElementById('enquiryForm');

  let currentProduct = '';

  function openModal(productName) {
    currentProduct = productName;
    modalProductName.textContent = productName;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.getElementById('enqName').focus();
  }

  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    form.reset();
    currentProduct = '';
  }

  document.querySelectorAll('[data-enquire]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const card = this.closest('[data-product]');
      const productName = card ? card.getAttribute('data-product') : 'Product';
      openModal(productName);
    });
  });

  modalClose.addEventListener('click', closeModal);

  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeModal();
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('enqName').value.trim();
    const phone = document.getElementById('enqPhone').value.trim().replace(/\s/g, '');
    const message = document.getElementById('enqMessage').value.trim();

    const text = [
      'Hi! I\'m interested in: *' + currentProduct + '*',
      '',
      'Name: ' + name,
      'Phone: ' + phone
    ];
    if (message) text.push('Message: ' + message);

    const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text.join('\n'));
    window.open(url, '_blank');
    closeModal();
  });
})();
