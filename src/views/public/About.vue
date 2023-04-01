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
              class="fix-painel-container"
            >
              <v-expansion-panel
                v-for="({title, response}, index) in require('@/data/faqs/about/questions.json')"
                :key="`question-${index}`"
              >
                <v-expansion-panel-header
                  color="#ec973c"
                >
                  <span
                    class="text-uppercase font-weight-bold"
                    v-text="title"
                  />
                </v-expansion-panel-header>
                <v-expansion-panel-content
                  class=" py-2"
                >
                  <span
                    class="font-weight-regular"
                    v-text="response"
                  />
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
  import "@/assets/styles/views/publicViews/about.styl"

  @Component({})

  export default class About extends mixins() {}
</script>