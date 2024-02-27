let switches = document.querySelectorAll('.ios-switch');
let activeSwitches = [];

for (let i = 0; i < switches.length; i++) {
  switches[i].addEventListener('click', function(event) {
    if (this.classList.contains('active')) {
      const index = activeSwitches.indexOf(this);
      if (index > -1) {
        activeSwitches.splice(index, 1);
      }
      this.classList.remove('active');
      this.querySelector('input[type=checkbox]').checked = false;
    } else {
      if (activeSwitches.length >= switches.length - 1) {
        const randomIndex = Math.floor(Math.random() * activeSwitches.length);
        const switchToRemove = activeSwitches[randomIndex];
        switchToRemove.classList.remove('active');
        switchToRemove.querySelector('input[type=checkbox]').checked = false;
        activeSwitches.splice(randomIndex, 1);
      }
      activeSwitches.push(this);
      this.classList.add('active');
      this.querySelector('input[type=checkbox]').checked = true;
    }
  })
}
