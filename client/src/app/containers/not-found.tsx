import { Alert, AlertTitle, Container } from "@mui/material";

type Props = {
	message?: string
}

const NotFound = ({message}: Props) => {

	return (
		<Container>
			<Alert severity="error" sx={{width: '500px', margin: '50px auto'}}>
				<AlertTitle><strong>404</strong></AlertTitle>
				{ message || "Страница не найдена" }
			</Alert>
		</Container>
	);
};

export default NotFound;
