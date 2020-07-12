import React from 'react';
import Episodes from './Episodes';
import {render, fireEvent, waitFor} from '@testing-library/react';
import {fetchShow as mockFetchShow} from '../api/fetchShow';
import {Episodes} from './Episodes';


jest.mock('../api/fetchShow')

test('renders episodes from API', async() =>{
    mockFetchShow.mockResolvedValueOnce(episodes);
    const {getByText} = render(<Episodes/>)

    fireEvent.click
    expect(mockFetchShow).toHaveBeenCalledTimes(4);
    await waitFor(() => expect)

})