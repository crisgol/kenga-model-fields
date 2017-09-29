define([
    'core/extend',
    '../fields/text-area',
    'ui/bound',
    '../decorator'
], function (
        extend,
        Field,
        Bound,
        Decorator) {
    function ModelTextArea() {
        Field.call(this, document.createElement('div'));
        Bound.call(this);
        Decorator.call(this);
    }
    extend(ModelTextArea, Field);
    return ModelTextArea;
});