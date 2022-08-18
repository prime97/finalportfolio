import tw, {styled} from "twin.macro";


export const Frame = styled.div(() =>[
    tw`max-w-lg w-full text-center m-auto pt-36 pb-10`,
]);

export const Header = styled.div(() =>[
    tw`text-2xl sm:text-4xl`,
]);

export const Button = styled.div(() =>[
    tw`mt-6 inline-block w-auto bg-black font-mono text-white text-base md:text-xl py-4 px-7 cursor-pointer`,
]);

export const ButtonText = styled.div(() =>[
    tw`flex flex-row items-center`,
]);

export const Span = styled.div(() =>[
    tw`mr-3`,
]);

export const ArrowRight = styled.div(() =>[
    tw`text-white`,
]);