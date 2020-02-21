Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app = new Vue({
  el: '#app',
  data: {
    appTitle: 'Hello Vue!',
    appTitleHoverMessage: "You're hovering over the title aren't you?",
    showMessage: true,
    items: [
      'Item 1',
      'Item 2',
      'Item 3'
    ],
    todos: [
      { text: 'Todo 0', id: 0 },
      { text: 'Todo 1', id: 1 },
      { text: 'Todo 2', id: 2 },
      { text: 'Todo 3', id: 3 }
    ],
    userInput: 'This message will self reverse when you click the button below!',
    reverseUserInput: function() {
      this.userInput = this.userInput.split('').reverse().join('');
    }
  }
});
