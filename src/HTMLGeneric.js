/**
 * @description === globalThis.kana = RegExp('\u{3035}').source // # '〵' ===
 * @tutorial === {@link https://unicodeplus.com/U+3035|Kana} ===
 */
class CustomElement〵Generic extends HTMLElement{
    constructor(){
        super()
        console.log("Callee", new.target.name)
    }
}

export default (function(){
    const WC_NAMESPACE = CustomElement〵Generic.name.toLowerCase().replace(RegExp('\u{3035}').source, "-");
    customElements.define(WC_NAMESPACE, CustomElement〵Generic)
    return document.createElement(WC_NAMESPACE)
})