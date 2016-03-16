(function() {
  var app = angular.module('Descript', []);

  app.controller('TabController', function(){
    this.tab=1;
    this.setTab = function(setTab)
    {
      this.tab=setTab;
    };
    this.isSet = function(checktab)
    {
      return this.tab === checktab;
    };
  });

  var description = [
        {

        },
        {

        },
        {

        }
    ];
})();