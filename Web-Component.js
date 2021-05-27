
class SimpleGreeting extends HTMLElement  {
  static get properties() {
    return { name: { type: String } };
  }
  constructor() {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'module';
    script.src = "https://ebian00.github.io/LitElement/Web-Component.js";
    head.appendChild(script);
    super();
    this.name = "World";
  }
  render() {
    return html`
      <p>Hello, ${this.name}!</p>
    `;
  }
}
customElements.define("simple-greeting", SimpleGreeting);
