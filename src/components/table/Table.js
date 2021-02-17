import {ExcelComponent} from '@core/ExcelComponent'

export class Table extends ExcelComponent {

	static className = 'excel__table'

	toHTML() {
		return '<H1>Table</H1>';
	}
}