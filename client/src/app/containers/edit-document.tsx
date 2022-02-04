import { Container, TextField } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import InfoIcon from '@mui/icons-material/Info';
import { useParams } from "react-router-dom";
import NotFound from "./not-found";
import BreadCrumbs from "App/components/breadcrumbs";
import { useState } from "react";
import IconButton from "App/components/override/icon-button";
import Popover from "App/components/override/popover";
import DocumentsStore from "App/stores/documents-store";


const EditDocument = () => {
	const { id } = useParams();

	if (!id || !+id) {
		return <NotFound message="Документ не найден"/>
	}

	const docsStore = new DocumentsStore();
	const doc = docsStore.get(+id);

	if (typeof doc === 'undefined') {
		return <NotFound message="Документ не найден"/>
	}

	// Content edit
	const [content, setContent] = useState(doc.content);
	const save = (content: string) => {
		doc.content = content;
		docsStore.set(doc);
	}

	// Popover
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
	const open = !!anchorEl;

	return (
		<Container>
			<BreadCrumbs current={doc.name}/>

			<IconButton
				tooltip="Сохранить документ"
				icon={<SaveIcon />}
				onClick={() => save(content)}
			/>
			<IconButton
				tooltip="О документе"
				icon={<InfoIcon />}
				onClick={(e) => setAnchorEl(e.currentTarget)}
			/>
			<Popover
				id="docInfoPopup"
				open={open}
				anchorEl={anchorEl}
				onClose={() => setAnchorEl(null)}
				content={[
					`Создан: ${doc.createdAtString}`,
					`Обновлён: ${doc.modifiedAtString}`
				]}
			/>

			<TextField
				multiline
				rows={20}
				fullWidth
				defaultValue={content}
				onChange={(e) => setContent(e.target.value)}
			/>
		</Container>
	);
};

export default EditDocument;
