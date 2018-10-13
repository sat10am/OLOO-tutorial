'use strict';

var Module = (function () {
    const Widget = {
        init(tagName, className) {
            this.$elem = document.createElement(tagName);
            this.$elem.className = className;
            return this;
        },
        renderTo(selector) {
            const $target = document.querySelector(selector);
            if (this.$elem && $target) {
                $target.appendChild(this.$elem);
            }
            return this;
        },
    };

    const Obj = {
        Button: {
            create(tagName, className, $view) {
                this.init(tagName, className);
                this.$view = $view;
                return this;
            },
            bindEvent(event) {
                this.$elem.addEventListener(event, this.handler.bind(this));
                return this;
            }
        },
        View: {
            value: 0,
            create(tagName, className) {
                this.init(tagName, className);
                this.update(this.value);
                return this;
            },
            update(value) {
                this.value += value;
                this.$elem.textContent = this.value;
                return this;
            },
        },
        Icon: {
            create(tagName, className) {
                this.init(tagName, className);
                return this;
            },
        }
    };

    for (let object in Obj) {
        Object.setPrototypeOf(Obj[object], Widget);
    }

    return Obj;
})();

!function () {
    const Counter = (function () {
        var PlusButton = {
            handler() {
                this.$view.update(1);
            }
        };

        var MinusButton = {
            handler() {
                this.$view.update(-1);
            }
        };

        Object.setPrototypeOf(PlusButton, Module.Button);
        Object.setPrototypeOf(MinusButton, Module.Button);

        return {
            $plusButton: Object.create(PlusButton),
            $minusButton: Object.create(MinusButton),
            $plusIcon: Object.create(Module.Icon),
            $minusIcon: Object.create(Module.Icon),
            $display: Object.create(Module.View),
        }
    })();

    Counter.$display.create('span', 'display').renderTo('h1');
    Counter.$plusButton.create('button', 'plus', Counter.$display).bindEvent('click').renderTo('.btn-plus');
    Counter.$minusButton.create('button', 'minus', Counter.$display).bindEvent('click').renderTo('.btn-minus');
    Counter.$plusIcon.create('i', 'plus-ico').renderTo('button.plus');
    Counter.$minusIcon.create('i', 'minus-ico').renderTo('button.minus');
}();
