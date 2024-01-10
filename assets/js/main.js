function showDropdown(id) {
    document.getElementById(id).classList.toggle("show");
  }

  function openModal(modalId){
    document.getElementById(modalId).classList.toggle("modal");
    document.getElementById("btn-close").classList.toggle("btn-close");
    document.getElementById("btn-modal").classList.toggle("btn-close");
    document.getElementById("pre-resp").classList.toggle("pre-wraper");
    document.getElementById("modalCodeDiv").classList.toggle("max-height");
    document.body.classList.toggle("no-scroll");
  }

    function CopyToClipboard(preId) {
      const copyText = document.getElementById(preId).textContent;
      const textArea = document.createElement('textarea');
      textArea.textContent = copyText;
      document.body.append(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
    }