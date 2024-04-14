import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import store from './redux/store/store';
import App from './App';
import { modalActions } from "./redux/slices/modalSlice";

describe("App", () => {
    beforeEach(() => {
        // Create a mock container element
        const portalContainer = document.createElement('div');
        portalContainer.setAttribute('id', 'portal-container');
        document.body.appendChild(portalContainer);
    });

    afterEach(() => {
        // Clean up the mock container after each test
        const portalContainer = document.getElementById('portal-container');
        document.body.removeChild(portalContainer);
    });

    test("renders App component with div element with id 'app-test-id'", () => {
        render(
            <Router>
                <Provider store={store}>
                    <App />
                </Provider>
            </Router>
        );

        // Check if the div element with id "app-test-id" is rendered
        const appTestIdDiv = screen.getByTestId("app-test-id");
        expect(appTestIdDiv).toBeInTheDocument();

        // Check if both Sidenav and Main components are rendered
        const sidenavTestId = screen.getByTestId("sidenav-test-id");
        const mainTestId = screen.getByTestId("main-test-id");

        expect(sidenavTestId).toBeInTheDocument();
        expect(mainTestId).toBeInTheDocument();
    });

    test("renders ModalCreateTask component when modal is opened", () => {
        // Dispatch an action to open the modal
        store.dispatch(modalActions.openModalCreateTask());

        render(
            <Router>
                <Provider store={store}>
                    <App />
                </Provider>
            </Router>
        );

        // Check if the ModalCreateTask component is rendered
        const modalTitle = screen.getByText("Add a task");
        expect(modalTitle).toBeInTheDocument();
    });

    test("does not render ModalCreateTask component when modal is closed", () => {
        // Dispatch an action to close the modal
        store.dispatch(modalActions.closeModalCreateTask());

        render(
            <Router>
                <Provider store={store}>
                    <App />
                </Provider>
            </Router>
        );

        // Check if the ModalCreateTask component is not rendered
        const modalTitle = screen.queryByText("Add a task");
        expect(modalTitle).not.toBeInTheDocument();
    });
});
