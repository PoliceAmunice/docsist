import './document-item-preview.scss';
import { Box } from "@mui/material";
import { useState } from "react";

type Props = {
	docContent: string;
}

const Preview = ({docContent}: Props) => {
	const [preview, setPreview] = useState<string>("");
	const blob = new Blob([docContent], {type : 'text/plain; charset=utf-8'});
	const reader = new FileReader();

	const handleLoad = () => {
		const content = reader.result as string;
		setPreview(content);
	}

	reader.onload = handleLoad;
	reader.readAsDataURL(blob);

	return (
		<Box className="preview">
			<object data={preview} type="text/plain"></object>
		</Box>
	);
}

export default Preview;