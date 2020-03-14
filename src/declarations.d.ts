declare module '*.scss';

declare namespace JSX {
    interface IntrinsicElements {
        // eslint-disable-next-line
        [elmName]: any;
    }
}