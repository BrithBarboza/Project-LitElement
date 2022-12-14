import {LitElement, html} from 'lit-element';

class MyCounter extends LitElement {

    static get properties() { 
        return {
            counter: { type: Number }
        };
    }

    constructor() {
        super();
        this.counter = 0;
    }
    
    render() {
        return html`
        <style>
        div {
            border: 1px solid #ddd;
        }
        .x {
            background-color: red;
            color: #fff;
        }
        </style>
        <div class = "x">Llevas ${this.counter} clicks!!</div>
        <div>
        <button @click="${this.incrementar}"> +1 </button>
        <button @click="${this.decrementar}"> -1 </button>
        </div>

        <feedback-element id="feedback"></feedback-element>
        `;
    }

    get feedback() {
        return this.shadowRoot.getElementById('feedback')
    }

    incrementar() {
        this.counter ++;
        if(this.counter == 5) {
           this.feedback.open('Has llegado a 5 clicks!!') // aquí utilizo el get feedback() que declaré arriba
        }
    }
    decrementar() {
        this.counter --;
        if(this.counter == 0) {
            this.shadowRoot.getElementById('feedback').open('Has reseteado los clicks!!')
        }
    }
}
customElements.define('my-counter', MyCounter);