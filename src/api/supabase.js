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
  if(store.state.user && "user" in store.state) {
    setTimeout(() => {
      router.push({ name: "me" })
    }, 1500)
  }
})

  
export default supabase