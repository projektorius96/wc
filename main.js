import './global.css';
import GenericElement from './HTMLComponents/HTMLGeneric.js';

document.body.appendChild(
  new GenericElement()
)

// if(!navigator.userAgent.includes("Firefox")){
//     document.body.setHTML(`<h1>HELLO WORLD via .setHTML()</h1>`)
// }
// else{
//   // DEV_NOTE # unless dom.security.sanitizer.enabled returns true, this must be enabled via Firefox about:config (since version 94 and onwards)
//   // @https://developer.mozilla.org/en-US/docs/Web/API/Element/setHTML#browser_compatibility
//   document.body.innerHTML = `<h1>HELLO WORLD via .innerHTML setter</h1>`
// }



