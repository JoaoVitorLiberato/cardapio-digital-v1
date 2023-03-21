import supabase from "@/api/supabase";
import store from "@/plugins/store";


export default function userAuthUser() {
  const login = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    
    return store.state.user = data.user;
  };

  const loginWithSocialProvider = async ({ providerName }) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: providerName,
    });
    if (error) throw error;
    return data;
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  const register = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signUp(
      {
        email,
        password,
      },
      {
        redirectTo: `${window.location.origin}/me?fromEmail=registrationConfimation`,
      }
    );

    if (error) throw error;
    return data;
  };

  const update = async (dataUser) => {
    const { data, error } = await supabase.auth.updateUser(dataUser);
    if (error) throw error;
    return data;
  };

  const sendPasswordRestEmail = async (email) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) throw error;
    return data;
  };

  const resetPassword = async (newPassword) => {
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) throw error;

    return data;
  };

  const isLoggedIn = () => {
   switch (store.state) {
    case !store.state.user:
      store.dispatch("setIslogged", false)
      break;

    case store.state.user !== null:
      store.dispatch("setIslogged", true)
      break;
    
    default:
      store.dispatch("setIslogged", false)
      break;
   }

   return false
  }

  return {
    login,
    loginWithSocialProvider,
    logout,
    register,
    sendPasswordRestEmail,
    update,
    resetPassword,
    isLoggedIn
  };
}
