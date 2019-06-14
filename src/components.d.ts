/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MultiSelect {
    'id': string;
  }
}

declare global {


  interface HTMLMultiSelectElement extends Components.MultiSelect, HTMLStencilElement {}
  var HTMLMultiSelectElement: {
    prototype: HTMLMultiSelectElement;
    new (): HTMLMultiSelectElement;
  };
  interface HTMLElementTagNameMap {
    'multi-select': HTMLMultiSelectElement;
  }
}

declare namespace LocalJSX {
  interface MultiSelect extends JSXBase.HTMLAttributes<HTMLMultiSelectElement> {
    'id'?: string;
  }

  interface IntrinsicElements {
    'multi-select': MultiSelect;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


