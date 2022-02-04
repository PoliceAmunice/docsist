import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTE_HOME } from 'Utils/routes';
import env from 'Utils/environment';


const Header = () => {
	return (
		<AppBar position="static" sx={{ mb: 2 }}>
			<Toolbar>
				<Link to={ROUTE_HOME} >
					{ env.APP_NAME }
				</Link>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
