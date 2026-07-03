// import './style.css'
// import typescriptLogo from './assets/typescript.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { firstName, lastName } from './bases/01-const-let'

// import './bases/03-arrays'
// import './bases/04-functions'
// import './bases/05-dest-obj'
// import './bases/06-dest-arr'
// import './bases/07-imp-exp'
// import './bases/08-promises'
// import './bases/09-fetch'
import './bases/10-axios'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">

  <div>
    <h1>Get started</h1>
    <p>Edit <code>src/main.ts</code> and save to test <code>HMR</code></p>
  </div>
  <button id="counter" type="button" class="counter"></button>
  <p>${firstName}${lastName}</p>

`

