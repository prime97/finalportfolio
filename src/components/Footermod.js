import tw, {styled} from "twin.macro";


export const FooterFrame = styled.div(() =>[
    tw`py-5 border-t-2`,
]);

export const SocialMediaFrame = styled.div(() =>[
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

export const ShortInfo = styled.div(() =>[
    tw`flex justify-center mt-4`,
]);

export const Paragraph = styled.div(() =>[
    tw`flex justify-center mt-4`,
]);

export const Label = styled.div(() =>[
    tw`mr-2`
])

export const Link = styled.div(() =>[
    tw`text-blue-500 hover:underline`,
]);