(function () {
  const WidgetModule = (function () {
    return {
      Widget: {
        init(htmlTagName, className) {
          this.$elem = document.createElement(htmlTagName);
          this.$elem.className = className;
        },

        renderTo(selector) {
          const $target = document.querySelector(selector);
          if (this.$elem && $target) {
            $target.appendChild(this.$elem);
          }
        }
      },


      CounterButton: {
        create(htmlTagName, className, $view) {
          this.init(htmlTagName, className);
          this.$view = $view;
        },
        setEventToOwnView(domEvent) {
          this.$elem.addEventListener(domEvent, this.handler.bind(this));
        }
      },

      PlusButton: {
        handler() {
          this.$view.update(1);
        },
      },

      MinusButton: {
        handler() {
          this.$view.update(-1);
        }
      },

      View: {
        value: 0,
        create(htmlTagName, className) {
          this.init(htmlTagName, className);
          this.update(this.value);
        },
        update(value) {
          this.value += value;
          this.$elem.textContent = this.value;
        }
      }
    };
  })();


  const main = () => {
    Object.setPrototypeOf(WidgetModule.CounterButton, WidgetModule.Widget);
    Object.setPrototypeOf(WidgetModule.View, WidgetModule.Widget);
    Object.setPrototypeOf(WidgetModule.PlusButton, WidgetModule.CounterButton);
    Object.setPrototypeOf(WidgetModule.MinusButton, WidgetModule.CounterButton);

    const $plusButton = Object.create(WidgetModule.PlusButton);
    const $minusButton = Object.create(WidgetModule.MinusButton);
    const $plusIcon = Object.create(WidgetModule.Widget);
    const $minusIcon = Object.create(WidgetModule.Widget);
    const $counterDisplay = Object.create(WidgetModule.View);

    $counterDisplay.create('span', 'display');
    $counterDisplay.renderTo('h1');

    $plusButton.create('button', 'plus', $counterDisplay);
    $plusButton.setEventToOwnView('click');
    $plusButton.renderTo('.btn-plus');

    $minusButton.create('button', 'minus', $counterDisplay);
    $minusButton.setEventToOwnView('click');
    $minusButton.renderTo('.btn-minus');

    $plusIcon.init('i', 'plus-ico');
    $plusIcon.renderTo('button.plus');

    $minusIcon.init('i', 'minus-ico');
    $minusIcon.renderTo('button.minus');
  };

  main();
})();