

import { useTranslation } from "react-i18next";
import LanguageLabels from "src/languages/en/translationEn.json";


type HelpProps = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;
}


const Help = ({ onClick }: HelpProps) => {

    const { t } = useTranslation();

    return (
        <button
            className={` 
                flex items-center gap-2 p-2 text-sm
                 text-black hover:bg-gray-800
                dark:text-gray-200 dark:hover:bg-gray-700
                rounded-sm
                `}

            onClick={onClick}
            onTouchStart={(e: React.TouchEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                e.preventDefault();
                onClick?.(e);
            }}
        >
            {t(LanguageLabels.HELP)}
        </button>
    )
};


export default Help;