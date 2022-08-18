import tw, {styled} from "twin.macro";

export const CardDiv = styled.div(() =>[
    tw`w-full`,
]);

export const CardEdge = styled.div(() =>[
    tw`flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5`,
]);

export const CardInfo = styled.div(() =>[
    tw`text-center mt-5`,
]);

export const Name = styled.div(() =>[
    tw`text-xl sm:text-2xl text-gray-900 font-semibold`,
]);

export const Profession = styled.div(() =>[
    tw`text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2`,
]);

export const Link = styled.div(() =>[
    tw`flex justify-center mt-4`,
]);

export const GithubLogo = styled.a(() =>[
    tw`text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300`,
]);

export const FacebookLogo = styled.a(() =>[
    tw`text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300`,
]);

export const YoutubeLogo = styled.a(() =>[
    tw`text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300`,
]);

export const Envelop = styled.a(() =>[
    tw`text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-green-400 rounded-full hover:text-white transition-colors duration-300`,
]);

export const Span = styled.span(() =>[
    tw`sr-only`,
]);