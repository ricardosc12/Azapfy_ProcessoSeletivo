# The World Map
@ Projeto realizado para processo seletivo  

[![Image!](https://user-images.githubusercontent.com/25700237/116011049-4c459380-a5f9-11eb-8aba-98caa7e9a0f7.png)](https://www.youtube.com/watch?v=2h0RhhukLWI)  
on Youtube

* Listagem de todos países.
* Pesquisa por nome.
* Localização por obtenção de ip ( Clique no botão com o campo de texto vazio ).


# Atualizações

* Adicionado uma função para alterar a forma como os dados do país selecionado é obtido, Memória(preload) / Get: API.
  * Este causará problema quando diversas requisições era feita, isso gera um delay pela api para um resposta    
* Novas animações criadas para a espera de resposta da API, como obtenção de todos os países, país expecífico.
* Tratamento sobre entrada de dados, caso o nome não seja encontrado, uma imagem o alertará.
* Estrutura do código reorganizada, minimizando blocos repetitivos.
* Correção em nomes de países cujo o símbolo " ' " fora encontrado.
* Adicionado texto para mostragem de espera pela api para obter IP regional. (" Getting local contry ")
