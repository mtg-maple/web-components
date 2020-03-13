import { ReactElement } from 'react';

export function containPresenter<P, PP> (
  container: (presenter: (props: PP) => ReactElement, props: P) => ReactElement,
  presenter: (props: PP) => ReactElement
): (props: P) => ReactElement {
  return (props: P): ReactElement => container(presenter, props);
}