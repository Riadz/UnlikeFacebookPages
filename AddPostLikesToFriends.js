

async function AddPostLikesToFriends() {
  let els = document.querySelectorAll('.j83agx80.cbu4d94t.buofh1pr.l9j0dhe7');
  els = Array.prototype.filter.call(els, el => el.classList.length == 4)
  let container = els[0];
  
  let btns = container.querySelectorAll('[aria-label="Ajouter"]');

  if (!btns.length) {
    console.log("Alright we're done.");
    return;
  }

  for (i = 0; i < btns.length; i++) {
    btns[i].scrollIntoView(true);
    btns[i].style.border = "3px solid #f0e01b";
    
    btns[i].click();
    await wait(1000);
  } 

  AddPostLikesToFriends();
}

function wait(ms) {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve(ms), ms);
  });
}
