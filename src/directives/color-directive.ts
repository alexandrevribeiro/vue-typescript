import { DirectiveOptions } from 'vue'

// Declares the "colorDirective" const as the "DirectiveOptions" Type,
// which provides us intellisense.
const colorDirective: DirectiveOptions = {
    inserted(el, node) {
        // Using "modifiers"
        // if (node.modifiers.background) {
        //     el.style.backgroundColor = node.value;
        // } else {
        //     el.style.color = node.value;
        // }

        // Expecting an object as the node value
        el.style.backgroundColor = node.value.background;
        el.style.color = node.value.color;
    }
}

export default colorDirective;