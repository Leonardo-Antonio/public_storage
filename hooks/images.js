import { useState } from 'react';
import { imageService } from '../services/image.service';


export const useImage = () => {
    const [errorSaveImage, setErrorSaveImage] = useState(false)
    const save = async (data) => {
        const { error } = await imageService.save(data)
        setErrorSaveImage(error)
    }

    return [
        {
            save,
            error: errorSaveImage
        }
    ]
}