

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
                 text-gray-900
                  hover:bg-gray-700 hover:text-white
                dark:text-white dark:bg-gray-900
                rounded-sm
                `}

            onClick={onClick}
        >
            {t(LanguageLabels.HELP)}
        </button>
    )
};


export default Help;