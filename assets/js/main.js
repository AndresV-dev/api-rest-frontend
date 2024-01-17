function showDropdown(id) {
    document.getElementById(id).classList.toggle("show");
  }

  function openModal(modalId){
    var modal = document.getElementById(modalId);
    modal.classList.toggle("modal");
    console.log(modal.childNodes)
    var modalContainer = modal.childNodes.item(1);
    console.log(modalContainer.childNodes)
    modalContainer.childNodes.item(0).nextSibling.classList.toggle("btn-close")
    var codeDiv = modalContainer.childNodes.item(5);
    console.log(codeDiv.childNodes);
    codeDiv.childNodes.item(1).classList.toggle("pre-wraper")
    codeDiv.childNodes.item(3).classList.toggle("btn-close")
    
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

  function scrollToElement(elementSelector, instance = 0){
  //select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector)
    // check if there are elements match in the selector and if the requested instanse existe
    if(elements.length >instance){
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth'})
    }
  }
  
  function functionaa(nameSection){
    var section = document.getElementById(nameSection);
    console.log(section)
    section.scrollIntoView();
  }

