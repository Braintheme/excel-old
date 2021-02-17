import {ExcelComponent} from '@core/ExcelComponent'

export class Toolbar extends ExcelComponent {

	static className = 'excel__toolbar'

	toHTML() {
		return '<H1>Toolbar</H1>';
	}
}