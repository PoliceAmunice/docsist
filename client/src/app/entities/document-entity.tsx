export interface IDoc {
	readonly id: number;
	name: string;
	content: string;
	readonly createdAt: number;
	modifiedAt: number;
	readonly type: DocType;
	size: number;
}

type DocType = 'text/plain';

export class Doc implements IDoc {
	public readonly createdAt: number;
	public modifiedAt: number;

	constructor(
		public readonly id: number,
		public name: string,
		public content: string,
		public size: number,
		public readonly type: DocType,
	) {
		this.createdAt = this.modifiedAt = Date.now();
	}

	get createdAtString(): string {
		return this.formatDateString(this.createdAt);
	}

	get modifiedAtString(): string {
		return this.formatDateString(this.modifiedAt);
	}

	private formatDateString(timestamp: number) {
		const options: Intl.DateTimeFormatOptions = {
			weekday: 'short', year: 'numeric', month: 'short',
			day: 'numeric', hour: 'numeric', minute: 'numeric'
		};

		const date = new Date(timestamp);
		return new Intl.DateTimeFormat('ru', options).format(date);
	}
}
