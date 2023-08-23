import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Settings from './day10-weather7-settings'

beforeAll(() => { })
afterEach(() => { })
afterAll(() => { })

test('loads the Settings component', async () => {
    // Arrange ---------------------------
    const settings = {
        'tempCelsius': true,
        'displayTemp': true,
        'displayWind': true,
        'displayIcon': true,
        'displayHumidity': true
    }
    const handleSettingsChange = jest.fn();
    // Act  --------------------------------
    render(<Settings settings={settings} settingsChangeHandler={handleSettingsChange} />)
    // Assert ------------------------------
    //screen.debug();

    // Make sure it renders
    expect(screen.getByTestId('tempUnit1')).toBeInTheDocument();
    // Make sure the celsius radio is checked
    expect(screen.getByTestId('tempUnit1')).toBeChecked();
    // Make sure the fahrenheit radio is not checked
    expect(screen.getByTestId('tempUnit2')).not.toBeChecked();

    // Fire a click event on the Fahrenheit radio button
    fireEvent.click(screen.getByTestId('tempUnit2'))
    // Check if the event handler for change event has been called 
    expect(handleSettingsChange).toHaveBeenCalledTimes(1);

    // expect(screen.getByTestId('11')).toHaveTextContent('Wind Speed 10')
})

