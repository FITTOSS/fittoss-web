import '../styles/index.css'
import {wrapper, configureStore} from "../redux/store";
import {Provider} from 'react-redux';

function App({ Component, pageProps }) {
    return (
        <Provider store={configureStore()}>  
			<Component {...pageProps} />  
		</Provider>
    )
}

export default wrapper.withRedux(App);
