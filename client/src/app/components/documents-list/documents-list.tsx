import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Doc } from "App/entities/document-entity";
import { ROUTE_DOCS } from "Utils/routes";
import DocumentsListItem from "./documents-list-item";

type Props = {
	documents: Doc[];
}

const DocumentsList = ({documents}: Props) => {
	const navigate = useNavigate();
	const navToDoc = (id: number) => navigate(ROUTE_DOCS + '/' + id);

	return (
		<Grid
			container
			direction="row"
			justifyContent="space-between"
			alignItems="stretch"
			spacing={4}
		>
			{documents.map(doc =>
				<Grid item xs={3} key={doc.id} >
					<DocumentsListItem doc={doc} clickHandler={navToDoc} />
				</Grid>
			)}
		</Grid>
	)
}

export default DocumentsList;