

import { useTranslation } from "react-i18next";
import LanguageLabels from "src/languages/en/translationEn.json";
const Help = () => {

    const { t } = useTranslation();

    return (
        <button
            className={` 
                flex items-center gap-2 p-2 text-sm
                 text-gray-700 hover:bg-gray-800
                dark:text-gray-200 dark:hover:bg-gray-700
                rounded-sm
                `}

            onClick={() => {


                console.log("Help button clicked");
            }}
        >
            {t(LanguageLabels.HELP)}
        </button>
    )
};


export default Help;