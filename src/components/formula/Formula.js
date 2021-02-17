import {ExcelComponent} from '@core/ExcelComponent'

export class Formula extends ExcelComponent {

	static className = 'excel__formula'

	toHTML() {
		return '<H1>Formula</H1>';
	}
}