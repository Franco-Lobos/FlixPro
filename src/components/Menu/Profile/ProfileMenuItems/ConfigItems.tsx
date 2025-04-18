import { useTranslation } from "react-i18next";
import LanguageLabels from "src/languages/en/translationEn.json";
import { SectionProps } from "../../../../utils/types";
import { MenuItem } from "@mui/material";
import AsMenuItem from "../../../Generic/AsMenuItem";
import MySettings from "../../../Icons/MySettings";
import Downlaod from "../../../Icons/Download";
import Moon from "../../../Icons/Moon";


const ConfigItems = () => {

    const { t } = useTranslation();

    return (
        <div>
            <AsMenuItem
                title={t(LanguageLabels.SETTINGS)}
                IconComponent={MySettings}
            />
            <AsMenuItem
                title={t(LanguageLabels.DOWNLOAD_APP)}
                IconComponent={Downlaod}
            />
            <AsMenuItem
                title={
                    <div>
                        <span>{t(LanguageLabels.DARK_MODE)}</span>
                        <span>{t(LanguageLabels.BETA)}</span>

                    </div>
                }
                IconComponent={Moon}
                AuxiliarComponent={
                    () =>
                        <>
                            <span>{t(LanguageLabels.ENABLE)}</span>
                        </>
                }
            />
        </div>
    )
};

export default ConfigItems;