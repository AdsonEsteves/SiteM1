(function() {
  var app = angular.module('Descript', []);
   
    app.controller('DescriptController', function(){
    this.texto = description;
    });
    
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

  var description = {
            C : "Algum texto sobre C++",
            JAVA : "Algum texto sobre JAVA",
            PHP : "Algum texto sobre PHP",
            LUA: "Algum texto sobre LUA",
            GO : "Algum texto sobre GO",
            Javascript : "Algum texto sobre Javascript",
            HTMLCSS : "Algum texto sobre HTML/CSS",
            Corel: "Algum Texto sobre Corel",
            Photoshop: "Algum texto sobre PS"
  };
})();