Algoritmo "semnome"

Var
nome: caracter
senha: inteiro
opcao: inteiro
saldo: inteiro
emprestimo: inteiro

Inicio

escreval("----------------------------------------")
escreval("             BANCO KINGS                ")
escreval("----------------------------------------")

    escreval(" ")
    escreval(" ")

escreva("qual o seu nome?: ")
leia (nome)
escreval(" ")
escreval("----------------------------------------")
escreval(" ")

 senha<-1234
 repita
escreva("qual a sua senha?: ")
leia (senha)
se senha <> 1234 entao
escreval(" ")

escreval("não ferra cara, me fale sua senha certa")
escreval(" ")

fimse
ate (senha = 1234)

se senha = 1234 entao


escreval(" ")
escreval("----------------------------------------")
escreval(" ")
escreva ("obrigado pela sua senha ",nome ,"!")
escreval(" ")


fimse
limpatela()


escreval("----------------------------------------")
escreval("escolha o que deseja consultar")
escreval("----------------------------------------")
escreval(" ")
escreval("1 - consultar saldo")
escreval("2 - para empréstimos")
escreval("3 - sair")

  leia(opcao)
  escolha(opcao)
  
  caso 1
 saldo<-127
  escreval(" ")
  escreval("seu saldo é de: R$",saldo,",00")

  
  caso 2
 emprestimo<-1000
  escreval(" ")
  escreval("empréstimo disponível: R$",emprestimo, ",00")

  
  outrocaso

  escreval(" ")
  escreval("obrigado ", nome,", volte sempre!")
  
  
       fimescolha
fimalgoritmo