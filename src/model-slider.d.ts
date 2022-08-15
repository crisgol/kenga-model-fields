import Field from 'kenga-fields/slider';
import Bound from 'kenga/bound';
import Decorator from 'kenga/decorator';
import Widget from 'kenga/widget'

export default class ModelSliderField extends Field implements Bound, Decorator {
  data: any
  field: string

  selector: HTMLElement
  clearer: HTMLElement

  nullable: boolean
  onValueSelect: (source: Widget) => void
}
