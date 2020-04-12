import React from 'react';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import HistoryList from './HistoryList';

beforeEach(() => {
  expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
});

it('<HistoryList /> renders correctly', () => {
  const mockMatch = {
    url: '/history',
  };
  const mockSearchHistory = ['Wallpaper', 'Car', 'Sky', 'Miami'];

  expect(
    shallow(
      <HistoryList match={mockMatch} searchHistory={mockSearchHistory} />,
    ),
  ).toMatchInlineSnapshot(`
  <div
    className="history-list d-flex justify-content-around"
  >
    <div
      className="history-list-container-history"
    >
      <span
        className="px-3 history-list-item"
        key="0"
      >
        Miami
      </span>
      <span
        className="px-3 history-list-item"
        key="1"
      >
        Sky
      </span>
      <span
        className="px-3 history-list-item"
        key="2"
      >
        Car
      </span>
      <span
        className="px-3 history-list-item"
        key="3"
      >
        Wallpaper
      </span>
    </div>
  </div>
  `);
});

it('<HistoryList /> renders correctly', () => {
  const mockMatch = {
    url: '/favorites',
  };
  const mockSearchHistory = ['Car', 'Sky'];
  expect(
    shallow(
      <HistoryList match={mockMatch} searchHistory={mockSearchHistory} />,
    ),
  ).toMatchInlineSnapshot(`
  <div
    className="history-list d-flex justify-content-around"
  >
    <div
      className="history-list-container-main"
    >
      <span
        className="px-3 history-list-item"
        key="0"
      >
        Sky
      </span>
      <span
        className="px-3 history-list-item"
        key="1"
      >
        Car
      </span>
    </div>
  </div>
  `);
});
