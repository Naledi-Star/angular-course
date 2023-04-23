(function () {
    'use strict';
  
    angular.module('ShoppingListCheckOff', [])
      .controller('ToBuyController', ToBuyController)
      .controller('AlreadyBoughtController', AlreadyBoughtController)
      .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var toBuyCtrl = this;
      toBuyCtrl.items = ShoppingListCheckOffService.getToBuyItems();
  
      toBuyCtrl.buyItem = function (index) {
        ShoppingListCheckOffService.buyItem(index);
      };
    }
  
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var alreadyBoughtCtrl = this;
      alreadyBoughtCtrl.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    }
  
    function ShoppingListCheckOffService() {
      var service = this;
      var toBuyItems = [
        { name: "cookies", quantity: 10 },
        { name: "apples", quantity: 5 },
        { name: "chips", quantity: 3 },
        { name: "milk", quantity: 2 },
        { name: "eggs", quantity: 12 }
      ];
      var alreadyBoughtItems = [];
  
      service.buyItem = function (index) {
        var item = toBuyItems.splice(index, 1)[0];
        alreadyBoughtItems.push(item);
      };
  
      service.getToBuyItems = function () {
        return toBuyItems;
      };
  
      service.getAlreadyBoughtItems = function () {
        return alreadyBoughtItems;
      };
    }
  
  })();
  