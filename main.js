var filterInput = document.querySelector(".filterTodo");
var addTodo = document.querySelector(".addTodo");
var btn = document.querySelector(".button");

var listController = (function() {
  var searchList = {
    filterdSearch: ""
  };
  var todoList = [
    {
      todo: "running",
      comepleted: true
    },

    {
      todo: "shop",
      comepleted: false
    }
  ];

  return {
    getTodoList: function() {
      return todoList;
    },

    getSearchList: function() {
      return searchList;
    }
  };
})();

var UIController = (function() {
  return {
    clearInputs: function() {
      addTodo.value = "";
    }
  };
})();

var appController = (function(UIctrl, listCtrl) {
  var renderdTodos = function(todoList, filter) {};

  filterInput.addEventListener("input", function(e) {
    console.log(e);
  });

  document.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
      readTodoValue();
    }
  });

  btn.addEventListener("click", readTodoValue);

  function readTodoValue() {
    console.log(addTodo.value);
    UIController.clearInputs();
  }
})(UIController, listController);
