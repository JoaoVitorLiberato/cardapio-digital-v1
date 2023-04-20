import supabase from "@/api/supabase"
import store from "@/plugins/store"
import { v4 as uuidv4 } from "uuid"



export const uploadImage = async (storage, file) => {
  const fileName = `${uuidv4()}-${store.getters.getCompany.cnpj.replace(/\D/g,"")}-${file.name}`

  const { data, error } = await supabase.storage
    .from(storage)
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false
    })

  if (error) throw error

  const response = supabase.storage.from(storage).getPublicUrl(data.path)

  return response.data
}


export const listImages = async (storage) => {
 
  const  { data, error } = await supabase.storage
    .from(storage)
    .list()

  if (error) throw error

  return data;
}

export const updateUploadImage = async (storage, fileName, file ) => {
 
  const { data, error } = await supabase.storage
    .from(storage)
    .update(fileName, file, {
      cacheControl: "3600",
      upsert: false
    })

  if (error) throw error

  return data
}