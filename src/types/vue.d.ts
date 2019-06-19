import Vue, { ComponentOptions, VNode } from 'vue';

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    app?: any
  }
}

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $app: any
  }
}
