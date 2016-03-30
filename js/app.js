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
            C : "Conheço a sintaxe e já trabalhei em alguns joguinhos com ele, como um Sudoku e uma AI de Xadrez pequena. Terminei o periodo na faculdade da linguagem já, e posso usar SFML para criar gráficos.",
            JAVA : "Conheço a sintaxe, os melhores trabalhos foram a partir desta linguagem. Como o OPK calculator que permite fazer cálculos numéricos, como o de Gauss, Minimos-Quadrados, Interpolação, entre outros. OPK Photo Filter, que permite colocar filtros em imagens que você tem no computador, e atuamente trabalhnado na atualização do Portugol Studio, que é uma IDE para aprendizado de programação.",
            PHP : "Recentemente li sobre a linguagem, infelizmente ainda não tive nenhuma experiencia em uma aplicação para terceiros, mas em breve terei com um abnco de dados para o laboratorio que trabalho.",
            LUA: "Li sobre a sintaxe, infelizmente ainda não tive nenhuma aplicação real com ela, mas sei que tem grandes possibilidades como extensão de outras.",
            GO : "Em trabalhos para a faculdade usei a linguagem para criação de threads paralelas, por isso tenho um breve conhecimento sobre ela, e sua facilidade com o uso de threads e concorrência.",
            Javascript : "Li sobre a sintaxe dela coomo linguagem, e sei algumas coisas sobre como utiliza-la em conjunto com HTML para criação de sites.",
            HTMLCSS : "Consigo criar sites basicos com a união de HTML e CSS, porém não tenho muita criatividade sobre o assunto.",
            Corel: "Sei as ferramentas basicas para criar objetos, mas não tenho muita experiencia com ela",
            Photoshop: "Conheço relativamente bem sobre a ferramenta, sei editar imagens, porém não tenho muita experiencia em combinação de efeitos."
  };
})();