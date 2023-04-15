<template>
  <v-dialog
    v-model="dialogSeeMoreCompany"
    width="600"
    class="dialog-top-transition"
    persistent
  >
    <v-card
      class="p-0 m-0"
      max-width="800"
    >
      <v-row
        no-gutters
        justify="center"
        class="text-center text-uppercase font-weight-bold"
        style="color: #EB310CBF;"
      >
        <v-col
          cols="12"
          class="mt-3"
        >
          <h2
            class=""
            v-text="nome"
          />
  
          <span
            class="mr-1"
            v-text="`cnpj: ${cnpj}`"
          />
  
        </v-col>
        <v-col
          cols="12"
        >
          <span
            class="mr-1"
            v-text="endereco"
          />
          <span
            class="mr-1"
            v-text="`nº ${numero}`"
          />
          <span 
            v-text="complemento"
          />
        </v-col>
        <v-col
          cols="12"
        >
          <span
            class="mr-1"
            v-text="cidade"
          />
          <span
            v-text="uf"
          />
        </v-col>
      </v-row>
      <v-card-actions>
        <v-spacer />

          <v-btn
            color="#EB310CBF"
            text
            class="font-weight-bold"
            @click="$emit('closeDialogSeeMoreCompany')"
          >
            Fechar
          </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { mixins } from "vue-class-component"
  import { Component, Prop, Emit } from "vue-property-decorator"

  @Component({})

  export default class dialogSeeMoreProduct extends mixins() {
    @Emit('closeDialogSeeMoreCompany')
    @Prop({ default: false }) dialogSeeMoreCompany
    @Prop({ default: "" }) nome
    @Prop({ default: "" }) cnpj
    @Prop({ default: "" }) cep
    @Prop({ default: "" }) endereco
    @Prop({ default: "" }) numero
    @Prop({ default: "" }) complemento
    @Prop({ default: "" }) bairro
    @Prop({ default: "" }) cidade
    @Prop({ default: "" }) uf
  }
</script>