class Infopanel {
  constructor() {
      this.lepesElement = document.createElement('p');
      this.lepesElement.classList.add('lepes');

      this.jatekosElement = document.createElement('p');
      this.jatekosElement.classList.add('jatekos');

      this.gyozelemElement = document.createElement('p');
      this.gyozelemElement.classList.add('gyozelem');
  }

  setLepes(lepes) {
      this.lepesElement.textContent = `${lepes}. lépés`;
  }

  setJatekos(jatekos) {
      this.jatekosElement.textContent = jatekos;
  }

  setgyozelem(gyozelem) {
      this.gyozelemElement.textContent = gyozelem;
  }

  megjelenit(parentElement) {
      const asideElem = document.createElement('aside');
      asideElem.appendChild(this.lepesElement);
      asideElem.appendChild(this.jatekosElement);
      asideElem.appendChild(this.gyozelemElement);

      parentElement.appendChild(asideElem);
  }
}

export default Infopanel;
