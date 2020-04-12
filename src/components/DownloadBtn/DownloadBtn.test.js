import React from 'react';
import { screen } from '@testing-library/react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import DownloadBtn from './DownloadBtn';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Render DownloadBtn component with correct properties', () => {
  it('Renders with a className equal to the passed class prop', () => {
    act(() => {
      render(<DownloadBtn itemClass="btn" />, container);
    });
    expect(container.firstChild).toHaveClass('btn');
    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('Renders with href equal to the passed link prop', () => {
    act(() => {
      render(<DownloadBtn link="google.com" />, container);
    });
    expect(screen.getByTestId('download_link')).toHaveAttribute(
      'href',
      'google.com',
    );
  });
  it('Renders with src equal to the passed icon prop', () => {
    act(() => {
      render(<DownloadBtn icon="button.img" />, container);
    });
    expect(screen.getByAltText(/download/gi)).toHaveAttribute(
      'src',
      'button.img',
    );
  });
});
