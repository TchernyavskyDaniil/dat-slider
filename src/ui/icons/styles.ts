import { css } from 'reshadow';

export const styles = css`
  div {
    width: 52px;
    height: 52px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: 9px;
    top: 11px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    padding: 6px;
  }

  div[data-ratio='active'] {
    background-color: white;
    border: 3px solid transparent;
  }

  div[data-ratio='default'] {
    background-color: transparent;
    border: 3px solid #5c5c8a;
  }
`;
