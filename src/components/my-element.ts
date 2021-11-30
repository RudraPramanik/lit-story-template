import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { apply, create, cssomSheet, setup } from 'twind';
import { tailwindConfiguration } from '../tailwind.config';

setup(tailwindConfiguration);
const sheet = cssomSheet({ target: new CSSStyleSheet() });
const { tw } = create({ sheet });

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {

  static styles = [sheet.target, css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
  }`];


  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    return html`
    <h1 class="${tw`font-sans font-bold text-lg`}"> Hello, ${this.name}!</h1>
    <button class="${tw`font-sans bg-gray-600 p-4 rounded text-gray-200 hover:bg-gray-700`}" @click = ${this._onClick} part = "button">
      Click Count: ${this.count}
    </button>
    <slot></slot>
    `;
  }

  private _onClick() {
    console.log(tw(apply`max-w-\[800px\] p-4`))

    this.count++;
  }

  foo(): string {
    return 'foo';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
