import React from 'react'
import {render} from '@testing-library/react'
import Landing from '../pages/Landing';

test('LANDING:: Varify initial render', () => {
    const {getByText} = render(<Landing/>);
    expect(getByText("Zeebrands")).toBeInTheDocument()
});