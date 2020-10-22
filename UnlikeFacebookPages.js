async function unlikePages() {
  var btns = document.querySelectorAll('div[aria-label="Liked"]');

  if (!btns.length) {
    console.log("Alright we're done.");
    return;
  }

  for (i = 0; i < btns.length; i++) {
    btns[i].scrollIntoView(false);
    btns[i].style.border = "3px solid #f0e01b";
    await wait(2000);
    btns[i].click();
  }

  unlikePages();
}

function wait(ms) {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve(ms), ms);
  });
}
