import { APIResponse, ResultCodes } from '../api/api';
import { usersAPI } from '../api/usersAPI';
import { follow } from './users-reduser';

jest.mock('../api/usersAPI', () => ({
	usersAPI: {
		follow: jest.fn(),
  }
}));
const userAPIMock = usersAPI;


const result: APIResponse = {
  resultCode: ResultCodes.Success,
  messages: [],
  data: {},
};

(userAPIMock.follow as jest.Mock).mockReturnValue(Promise.resolve(result));

describe('test for usersSlicer thunk', () => {
  it('empty', async () => {
    const thunk = follow(1);
    const dispatchMock = jest.fn();
    const getStateMock = jest.fn();
    const extraArgumentMock = undefined;
    await thunk(dispatchMock, getStateMock, extraArgumentMock);
    expect(dispatchMock).toHaveBeenCalledTimes(2);
  });
});
