function showDropdown(id) {
    document.getElementById(id).classList.toggle("show");
  }

  function openModal(modalId){
    document.getElementById(modalId).classList.toggle("modal");
    document.getElementById("btn-close").classList.toggle("btn-close");
    document.getElementById("btn-modal").classList.toggle("btn-close");
    document.getElementById("pre-resp").classList.toggle("pre-wraper");
  }

  function CopyToClipboard(containerid) {
    if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(containerid));
      range.select().createTextRange();
      document.execCommand("copy");
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(document.getElementById(containerid));
      window.getSelection().addRange(range);
      document.execCommand("copy");
      alert("Text has been copied, now paste in the text-area")
    }
  }