import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import store from '../redux/store/store';
import Sidenav from '../components/Sidenav/Sidenav';

describe("App", () => {
    test("renders Sienav component with div element with id 'sidenav-test-id'", () => {
        render(
            <Router>
                <Provider store={store}>
                    <Sidenav />
                </Provider>
            </Router>
        );

        // Check if the div element with id "app-test-id" is rendered
        const sidenavTestId = screen.getByTestId("sidenav-test-id");
        expect(sidenavTestId).toBeInTheDocument();

        // Check if the h1 element with text "Task Tracker" is rendered
        const h1Element = screen.getByText(/Task Tracker/i);
        expect(h1Element).toBeInTheDocument();

        // Check if h1 element has the specified classNames
        expect(h1Element).toHaveClass("font-bold uppercase text-center mt-8 text-lg tracking-wide hidden xl:block");
    });
});
