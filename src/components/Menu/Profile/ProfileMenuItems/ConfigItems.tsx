import { useTranslation } from "react-i18next";
import LanguageLabels from "src/languages/en/translationEn.json";
import { Switch } from "@mui/material";
import AsMenuItem from "../../../Generic/AsMenuItem";
import SettingsIcon from "../../../Icons/MySettings";
import DownlaodIcon from "../../../Icons/DownlaodIcon";
import MoonIcon from "../../../Icons/Moon";
import { useRecoilState } from "recoil";
import { isDarkModeAtom } from "../../../../recoil/theme";

const ConfigItems = () => {

    const { t } = useTranslation();
    const [isDarkMode, setIsDarkMode] = useRecoilState<boolean>(isDarkModeAtom);

    const handleDarkModeChange = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();
        setIsDarkMode((prev: boolean) => !prev);
    };

    return (
        <div>
            <AsMenuItem
                title={t(LanguageLabels.SETTINGS)}
                IconComponent={SettingsIcon}
                darkMode={isDarkMode}
            />
            <AsMenuItem
                title={t(LanguageLabels.DOWNLOAD_APP)}
                IconComponent={DownlaodIcon}
                darkMode={isDarkMode}
            />
            <AsMenuItem
                title={
                    <div>
                        <span>{t(LanguageLabels.DARK_MODE)}</span>
                        <span className="
                            rounded-md
                            bg-gradient-to-r
                            from-blue-200
                            to-teal-100
                            px-1
                            py-0.5
                            uppercase
                            mx-2
                        ">

                            <span className="
                                bg-gradient-to-r
                                from-teal-600
                                to-teal-500
                                bg-clip-text
                                text-transparent
                                text-sm
                                font-extrabold
                            ">
                                {t(LanguageLabels.BETA)}
                            </span>
                        </span>

                    </div>
                }
                IconComponent={MoonIcon}
                onClick={handleDarkModeChange}
                AuxiliarComponent={
                    <Switch
                        checked={isDarkMode}
                        onChange={e => {
                            e.stopPropagation();
                            setIsDarkMode(e.target.checked);
                        }
                        }
                    />

                }
                darkMode={isDarkMode}
            />
        </div>
    )
};

export default ConfigItems;