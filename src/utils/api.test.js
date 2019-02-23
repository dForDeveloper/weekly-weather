import { fetchData } from './api';

describe('fetchData', () => {
  const mockUrl = 'www.fakeurl.com';

  it('should return data if response is ok', async () => {
    window.fetch = jest.fn(() => Promise.resolve({
      ok: true,
      json: jest.fn(() => Promise.resolve('data'))
    }));
    const result = await fetchData(mockUrl);
    expect(result).toEqual('data');
  });

  it('should throw an error if response is not ok', async () => {
    window.fetch = jest.fn(() => Promise.resolve({
      ok: false,
      json: jest.fn(() => Promise.resolve('No results found'))
    }));
    const expected = new Error('No results found');
    await expect(fetchData(mockUrl)).rejects.toEqual(expected);
  });
});