import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/style.css";
import registerServiceWorker from "./registerServiceWorker";
import { imagesReducer } from "./reducers";
import { createStore } from "redux";
import ImagesContainer from "./containers/ImagesContainer";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const store = createStore(imagesReducer);

ReactDOM.render(
	<Provider store={store}>
		<ImagesContainer />
	</Provider>,
	document.getElementById("root")
);

registerServiceWorker();
