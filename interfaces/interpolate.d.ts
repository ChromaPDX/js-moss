declare namespace Expand {
  type Key = '$' | '=';
  type Open = '{' | '(';
  type Terminal = '}' | ')' | ' ' | '__null__';
  type Op = 'replace' | 'shell' | 'math';

  interface State {
    detecting?: Key
    op?: Op
    terminal?: Terminal;
    dirty?: boolean
    escape?: boolean
  }

  interface Elem {
    state: State
    raw: string
    subst: string
  }

  export interface Options {
    replace?: (sub: string) => string
    call?: (sub: any) => any
    shell?: (sub: string) => string
    getStack?: any
  }
}


declare module 'interpolate' {
  export function interpolate(input: any, replace: (sub: string) => string, call: (sub: any) => any): any;
}
