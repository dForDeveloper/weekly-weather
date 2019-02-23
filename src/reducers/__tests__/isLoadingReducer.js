import { isLoadingReducer } from '../isLoadingReducer';

describe('isLoadingReducer', () => {
  it('should return initial state by default', () => {
    const result = isLoadingReducer(undefined, {});
    expect(result).toEqual(false);
  });

  it('should return a boolean when the action type is TOGGLE_LOADING', () => {
    const mockAction = {
      type: 'TOGGLE_LOADING',
      isLoading: true
    }
    const result = isLoadingReducer(false, mockAction);
    expect(result).toEqual(true);
  });
});