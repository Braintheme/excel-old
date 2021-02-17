import {ExcelComponent} from '@core/ExcelComponent'

export class Header extends ExcelComponent {

	static className = 'excel__header'

	toHTML() {
		return '<H1>Header</H1>';
	}
}