import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'
import {$} from '@core/dom'

export class Table extends ExcelComponent {
	static className = 'excel__table'

	constructor($root) {
		super($root, {
			listeners: ['mousedown']
		})
	}

	toHTML() {
		return createTable(200)
	}

	onMousedown(event) {
		if (event.target.dataset.resize) {
			const $resizer = $(event.target)
			// const $parent = $resizer.$el.parentNode
			// const $parent = $resizer.$el.closest('.column')
			const $parent = $resizer.closest('[data-type="resizable"]')
			const cords = $parent.getCords()
			const type = $resizer.data.resize
			const sideProp = type === 'col' ? 'bottom' : 'right'

			let value

			$resizer.css({
				[sideProp]: '-5000px'
			})

			document.onmousemove = e => {
				if (type === 'col') {
					const delta = e.pageX - cords.right
					value = cords.width + delta
					$resizer.css({right: -delta + 'px'})
				} else {
					const delta = e.pageY - cords.bottom
					value = cords.height + delta
					$resizer.css({bottom: -delta + 'px'})
				}
			}

			document.onmouseup = () => {
				document.onmousemove = null
				document.onmouseup = null

				if (type === 'col') {
					$parent.css({width: value + 'px'})
					this.$root.findAll(`[data-col="${$parent.data.col}"]`)
						.forEach(el => el.style.width = value + 'px')
				} else {
					$parent.css({height: value + 'px'})
				}
				$resizer.css({
					right: 0,
					bottom: 0
				})
			}
		}
	}
}
