import supabase from "@/api/supabase";
import store from "@/plugins/store";


export default function userAuthUser() {
  const login = async ({ email, password }) => {
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return user;
  };

  const loginWithSocialProvider = async ({ providerName }) => {
    const { user, error } = await supabase.auth.signInWithOAuth({
      provider: providerName,
    });
    if (error) throw error;
    return user;
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  const isLoggedIn = () => {
    return !!store.state.user;
  };

  const register = async ({ email, password, ...meta }) => {
    const { user, error } = await supabase.auth.signUp(
      {
        email,
        password,
      },
      {
        data: meta,
        redirectTo: `${window.location.origin}/me?fromEmail=registrationConfimation`,
      }
    );

    if (error) throw error;
    return user;
  };

  const update = async (data) => {
    const { user, error } = await supabase.auth.updateUser(data);
    if (error) throw error;
    return user;
  };

  const sendPasswordRestEmail = async (email) => {
    const { user, error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) throw error;
    return user;
  };

  const resetPassword = async (newPassword) => {
    const { user, error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) throw error;

    return user;
  };

  return {
    isLoggedIn,
    login,
    loginWithSocialProvider,
    logout,
    register,
    sendPasswordRestEmail,
    update,
    resetPassword,
  };
}
