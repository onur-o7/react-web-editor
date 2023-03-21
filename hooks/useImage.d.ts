import React from "react";
interface UseImageProps {
    initialImage?: string;
}
interface UseImageReturns {
    imageSrc: string;
    handleFileChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const useImage: ({ initialImage }: UseImageProps) => UseImageReturns;
export default useImage;
