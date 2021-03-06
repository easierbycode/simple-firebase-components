/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/router';


import {
  FbContentEditor as FbContentEditor
} from './components/fb-content-editor/fb-content-editor';

declare global {
  interface HTMLFbContentEditorElement extends FbContentEditor, HTMLElement {
  }
  var HTMLFbContentEditorElement: {
    prototype: HTMLFbContentEditorElement;
    new (): HTMLFbContentEditorElement;
  };
  interface HTMLElementTagNameMap {
    "fb-content-editor": HTMLFbContentEditorElement;
  }
  interface ElementTagNameMap {
    "fb-content-editor": HTMLFbContentEditorElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "fb-content-editor": JSXElements.FbContentEditorAttributes;
    }
  }
  namespace JSXElements {
    export interface FbContentEditorAttributes extends HTMLAttributes {
      
        id?: any,
        key?: any,
        doc?: any
    }
  }
}


import {
  FbString as FbString
} from './components/fb-string/fb-string';

declare global {
  interface HTMLFbStringElement extends FbString, HTMLElement {
  }
  var HTMLFbStringElement: {
    prototype: HTMLFbStringElement;
    new (): HTMLFbStringElement;
  };
  interface HTMLElementTagNameMap {
    "fb-string": HTMLFbStringElement;
  }
  interface ElementTagNameMap {
    "fb-string": HTMLFbStringElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "fb-string": JSXElements.FbStringAttributes;
    }
  }
  namespace JSXElements {
    export interface FbStringAttributes extends HTMLAttributes {
      
        id?: any,
        key?: any,
        item?: string
    }
  }
}

