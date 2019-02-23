import { errorReducer } from '../errorReducer';

describe('errorReducer', () => {
  it('should return initial state by default', () => {
    const result = errorReducer(undefined, {});
    expect(result).toEqual('');
  });

  it('should return a string when the action type is SET_ERROR', () => {
    const mockAction = {
      type: 'SET_ERROR',
      message: 'No results found'
    }
    const result = errorReducer('', mockAction);
    expect(result).toEqual('No results found');
  });
});