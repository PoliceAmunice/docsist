import { Breadcrumbs, Link, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { ROUTE_HOME } from 'Utils/routes';


type Props = {
	current: string
};

const BreadCrumbs = ({current}: Props) => {
	const navigate = useNavigate();

	return (
		<Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
			<Link
				underline="hover"
				color="inherit"
				sx={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}
				onClick={() => navigate(ROUTE_HOME)}
			>
				<HomeIcon sx={{ mr: 0.5 }} fontSize="inherit"/>
				Home
			</Link>
			<Typography color="text.primary">{ current }</Typography>
		</Breadcrumbs>
	);
};

export default BreadCrumbs;
