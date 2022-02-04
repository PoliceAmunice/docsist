import { CircularProgress, Container } from '@mui/material';
import DocumentsStore from 'App/stores/documents-store';
import { Suspense, lazy } from 'react';


const DocumentList = lazy(() => import('App/components/documents-list/documents-list'));

const Home = () => {
	const docsStore = new DocumentsStore();

	return (
		<Container sx={{display: 'flex', flexDirection: 'column', p: 5, alignContent: 'center'}} >
			<Suspense fallback={<CircularProgress />}>
				<DocumentList documents={docsStore.getAll()}/>
			</Suspense>
		</Container>
	);
};

export default Home;
