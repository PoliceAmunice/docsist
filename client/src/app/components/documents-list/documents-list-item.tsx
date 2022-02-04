import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { Doc } from 'App/entities/document-entity';
import Preview from './document-item-preview';
import ArticleIcon from '@mui/icons-material/Article';

type Props = {
	doc: Doc;
	clickHandler: Function;
};

const DocumentsListItem = ({ doc, clickHandler }: Props) => {

	return (
		<Card sx={{ width: 250, height: 340 }}>
			<CardActionArea
				onClick={() => clickHandler(doc.id)}
			>
				<Preview docContent={doc.content} />
				<CardContent sx={{borderTop: '1px solid #eaeaea'}}>
					<Typography noWrap variant="h6" component="div">
						{doc.name }
					</Typography>
					<Box sx={{display: 'flex'}}>
						<ArticleIcon color="primary" sx={{mr: 1}}/>
						<Typography noWrap variant="body2" color="text.secondary" sx={{lineHeight: '1.675rem'}}>
							{doc.modifiedAtString}
						</Typography>
					</Box>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default DocumentsListItem;