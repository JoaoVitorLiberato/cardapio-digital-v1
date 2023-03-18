<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
      >
        <v-row
          justify="center"
          align="center"
        >
          <v-col
            :cols="$vuetify.breakpoint.smAndDown ? 12 : 5"
            :class="$vuetify.breakpoint.mdAndUp&&'mr-5'"
          >
            <a href="https://storyset.com/people" target="_blank">
              <img src="/img/imagem-confirmacao/img-confirm.svg" alt="People illustrations by Storyset">
            </a>
          </v-col>
          <v-col
            :cols="$vuetify.breakpoint.smAndDown ? 12 : 5"
            :class="$vuetify.breakpoint.xsOnly&&'text-center'"
          >
            <p
              class="my-5"
            >
              Por favor, Confirme o email que irá chegar no endereço:<br> 
              <strong>{{ $route.query.email }}</strong>
            </p>
            <v-btn 
              color="secondary"
              to="/login"
            >
              <span
                v-text="'Voltar a página de Login'"
              />
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>