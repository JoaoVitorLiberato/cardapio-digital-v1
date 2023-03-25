import supabase from "@/api/supabase";


export default function userAuthUser() {
  const login = async ({ email, password }) => {
    const response = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (response.error) throw response.error;
    
    return response
  };

  const loginWithSocialProvider = async ({ providerName }) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: providerName,
    },
    {
      redirectTo: `${window.location.origin}/auth/me`
    }
    );

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

  const update = async ({ email, senha, dataOpcional }) => {
    const { data, error } = await supabase.auth.updateUser({ email, senha, dataOpcional });
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

  return {
    login,
    loginWithSocialProvider,
    logout,
    register,
    sendPasswordRestEmail,
    update,
    resetPassword,
  };
}
