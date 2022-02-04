import { Tooltip, IconButton as IconButtonMUI } from '@mui/material';
import { MouseEventHandler, ReactNode } from 'react';

type Props = {
	tooltip: string;
	icon: ReactNode,
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

const IconButton = ({tooltip, icon, onClick}: Props) => {
	 return (
		<Tooltip title={tooltip} arrow>
			<IconButtonMUI
				color="primary"
				aria-label={tooltip}
				component="span"
				onClick={onClick}
			>
				{ icon }
			</IconButtonMUI>
		</Tooltip>
	 );
};

export default IconButton;
