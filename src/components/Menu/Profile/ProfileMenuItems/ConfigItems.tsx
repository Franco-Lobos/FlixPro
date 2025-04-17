import { useTranslation } from "react-i18next";
import LanguageLabels from "src/languages/en/translationEn.json";
import { SectionProps } from "../../../../utils/types";
import { MenuItem } from "@mui/material";


const ConfigItems = () => {


    return (
        <div>
            <MenuItem

            >
                {"Config 1"}

            </MenuItem>
            <MenuItem

            >
                {"Config 2"}

            </MenuItem>
            <MenuItem

            >
                {"Config 3"}
            </MenuItem>
        </div>
    )
};

export default ConfigItems;