import { Doc, IDoc } from 'App/entities/document-entity';

class DocumentsStore {
	private static instanse: DocumentsStore;
	private readonly store = new Map<number, Doc>();
	private idCounter = 1;

	constructor(documents?: IDoc[]) {
		if (DocumentsStore.instanse) {
			return DocumentsStore.instanse;
		}
		DocumentsStore.instanse = this;

		if (!documents) {
			return this;
		}

		documents.forEach(doc => {
			this.store.set(
				this.idCounter,
				new Doc(this.idCounter++, doc.name, doc.content, doc.size, doc.type)
			);
		});
	}

	getAll(): Doc[] {
		return Array.from(this.store.values());
	}

	get(id: number): Doc | undefined {
		return this.store.get(id);
	}

	set(doc: Doc|IDoc): this {
		if (!doc.id) {
			doc = new Doc(this.idCounter++, doc.name, doc.content, doc.size, doc.type);
		} else {
			doc.modifiedAt = Date.now();
		}

		this.store.set(doc.id, doc as Doc);

		return this;
	}

	delete(docId: number): this {
		this.store.delete(docId);

		return this;
	}
}

export default DocumentsStore;
