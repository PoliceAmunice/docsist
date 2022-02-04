import { IDoc } from 'App/entities/document-entity';
import DocumentsStore from 'App/stores/documents-store';
import { createContext, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import 'Styles/main.scss';
import App from './app';
import documents from 'Assets/documents.json';


const initialState = {
	docsStore: new DocumentsStore(documents as IDoc[])
}

type appContext = typeof initialState;

export const AppContext = createContext<appContext>(initialState);

ReactDOM.render(
	<StrictMode>
		<AppContext.Provider value={initialState}>
			<App/>
		</AppContext.Provider>
	</StrictMode>,
	document.getElementById('root')
);
