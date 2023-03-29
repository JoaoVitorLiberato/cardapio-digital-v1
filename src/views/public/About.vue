<template>
  <v-container>
    <v-row
      no-gutters
    >
      <v-col
        cols="12"
      >
        <v-row
          class="mx-2"
          justify="center"
        >
          <v-col
            :cols="$vuetify.breakpoint.xsOnly ? '12' : '6'"
          >
            <h1
              class="mb-3"
            >
              Quem somos?
            </h1>
            <p>
              Somos um site feito de para pessoas que possam divulgar seus trabalhos, ou seja,
              dando visibilidade de forma gratuita para os empreendedores.
              O intuito do nosso site não é apenas facilitar apenas na divulgação e sim, 
              também nas vendas via Wattsapp, para caso o cliente seja da mesma região ou cidade.
            </p>
          </v-col>
          <v-col
            :cols="$vuetify.breakpoint.xsOnly ? '12' : '6'"
          >
          <a href="https://storyset.com/business">
            <img 
              src="/img/about/about1.svg" 
              alt="Business illustrations by Storyset"
            >
          </a>
          </v-col>
        </v-row> 
      </v-col>
      <v-col
        class="mt-8"
        cols="12"
      >
        <v-row
          class="mx-2"
        >
          <v-col
            :cols="$vuetify.breakpoint.xsOnly ? '12' : '6'"
          >
            <h2>
              Perguntas frequentes
            </h2>
            <p>
              Nesta seção estará disponivel para você algumas peguntas onde você
              irá saber um pouco sobre nosso sistema.
            </p>
          </v-col>
          <v-col
            :cols="$vuetify.breakpoint.xsOnly ? '12' : '6'"
          >
            <v-expansion-panels
              focusable
            >
              <v-expansion-panel
                v-for="({title, response}, index) in questions"
                :key="`question-${index}`"
              >
                <v-expansion-panel-header>
                  <strong>
                    {{ title }}
                  </strong>
                </v-expansion-panel-header>
                <v-expansion-panel-content
                  class=" py-2"
                >
                  {{ response }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mixins } from "vue-class-component"
  import { Component } from "vue-property-decorator"

  @Component({})

  export default class About extends mixins() {
    questions = [
      {
        title: "O que necessito para casdastrar meus produtos no site?",
        response: "Você precisar cadastra-se em nosso site, após isso, seja feliz divulgando-os"
      },
      {
        title: "Quero acessar apenas como cliente, preciso me cadastrar?",
        response: "Não, Apenas os empreendedores precisam."
      },
      {
        title: "Quanto custa a divulgação?",
        response: "Nada, é gratuito!!"
      },
      {
        title: "Quando houver erros no sistemas, o que eu faço?",
        response: "em nossa página existe a parte de contato para pessoas não cadastrado, assim como a página de reclamações, apenas preencha o formulario e tente ser bem especifico para nossa equipe possa resolver o problema mais rápido possivel."
      },
            {
        title: "Como irá ser feitas as vendas dos produtos?",
        response: "Será feita diretamente via wattsapp apenas clicando no 'Eu Quero' dos cards onde irá ser direcionado para que você possa fazer sua venda."
      },
    ]
  }
</script>