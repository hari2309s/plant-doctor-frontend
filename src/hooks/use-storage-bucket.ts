import supabaseClient from "@/lib/supabaseClient";

export const useStorageBucket = () => {
    const getIconUrl = async (fileNameWithExt: string): Promise<string> => {
        const expiresIn = 60 * 60 * 24 * 365;
        const { data } = await supabaseClient.storage
            .from('plant-doctor-icons').createSignedUrl(fileNameWithExt, expiresIn);
        
        return data?.signedUrl ?? ""
    }

    return {
        getIconUrl
    }
}