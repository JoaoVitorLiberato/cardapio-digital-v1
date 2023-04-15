import { createClient } from "@supabase/supabase-js"
import store from "@/plugins/store"
import router from "@/router" 


const supabase = createClient(
  "https://vjdugaqbsraejmchhsig.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqZHVnYXFic3JhZWptY2hoc2lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU2OTYxNDEsImV4cCI6MTk5MTI3MjE0MX0.B2NeUucsR4A0wlGqdjKxU-E-K1c_U4pSxx-HXxAYw2w",
)

supabase.auth.onAuthStateChange((event, session) => {
  localStorage.setItem('auth-user', session?.user.aud)
  store.dispatch("setUser", session?.user || null)

  // Essa condicional leva o usuario para page 'me' caso ele(a) estaja autenticado
  if(
    [
      /authenticated/i.test(localStorage.getItem("auth-user")),
      store.state.user !== null,
      "user" in store.state,
    ].every(o => !!o)
  ) {
    console.log("Você está logado!")
    setTimeout(() => {
      router.replace({ name: "me" })
    }, 1500)
  }
})

  
export default supabase