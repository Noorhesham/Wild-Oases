import supabase, { supabaseUrl } from "./supabase";
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("cabins could not be loaded");
  }
  return data;
}
const URL='https://mzwluaqrsonukztloqjh.supabase.co/storage/v1/object/public/cabinImages'

export async function createCabin(newCabin){
  const hasImagePath=newCabin.image?.startsWith?.(supabaseUrl);
  const imageName=`${Math.random()}-${newCabin.image.name}`.replaceAll("/","")
  const imagePath=hasImagePath?newCabin.image:`${URL}/${imageName}`

  const { data, error } = await supabase.from('cabins').insert([{...newCabin,image:imagePath}]).select()
  if (error) {
  console.error(error);
  throw new Error("cabins could not be created");
  }

  !hasImagePath&& await Storage(imageName, newCabin.image,newCabin.id)
  return data
}

export async function editCabin(editCabin,id){
  const hasImagePath=editCabin.image?.startsWith?.(supabaseUrl);
  const imageName=`${Math.random()}-${editCabin.image.name}`.replaceAll("/","")
  const imagePath=hasImagePath?editCabin.image:`${URL}/${imageName}`

  const {data,error}=await supabase.from("cabins").update({...editCabin,image:imagePath}).eq('id', id).select()
  if (error) {
    console.error(error);
    throw new Error("cabins could not be edited");
  }
  !hasImagePath&& await Storage(imageName, editCabin.image,id)
  return data
}

async function Storage(imageName,cabinImage,id){
  const {error:storageError }=await supabase.storage.from('cabinImages').upload(imageName, cabinImage)
  if(storageError){
   deleteCabin(id)
    console.error(storageError);
    throw new Error("cabin images could not be uploaded");
  }
}
export async function deleteCabin(id){    
  const { data,error } = await supabase.from('cabins').delete().eq('id', id)
  if (error) {
    console.error(error);
    throw new Error("cabins could not be deleted");
  }
}
