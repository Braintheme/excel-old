import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
	constructor($root, options = {}) {
		super($root, options.listeners)
		this.name = options.name || ''
		this.emitter = options.emitter
		this.unsubsribers = []

		this.prepare()
	}
	// Set our component before init
	prepare() {

	}

	// return template of component
	toHTML() {
		return ''
	}

	// notify listeners about event
	$emit(event, ...args) {
		this.emitter.emit(event, ...args)
	}

	// follor on event
	$on(event, fn) {
		const unsub = this.emitter.subscribe(event, fn)
		this.unsubsribers.push(unsub)
	}

	// init component
	// add to DOM listeners
	init() {
		this.initDOMListeners()
	}

	// remove components
	// clean listeners
	destroy() {
		this.removeDOMListeners()
		this.unsubsribers.forEach( unsub => unsub() )
	}
}
