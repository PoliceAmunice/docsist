import { Popover as PopoverMUI, Typography } from "@mui/material";

type Props = {
	id: string;
	open: boolean;
	anchorEl: HTMLButtonElement | null;
	content: string[];
	onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
};

const Popover = (props: Props) => {
	const { id, open, anchorEl, content, onClose } = props;

	return (
		<PopoverMUI
			id={id}
			open={open}
			anchorEl={anchorEl}
			onClose={onClose}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'left',
			}}
		>
			{content.map((string, index) =>
				<Typography
					key={index}
					sx={{ my: 1, mx: 2 }}
					variant="body2"
				>
					{ string }
				</Typography>
			)}
		</PopoverMUI>
	);
};

export default Popover;
