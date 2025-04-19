import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";
import LanguageLabels from "src/languages/en/translationEn.json";
import { SectionProps } from "../../../../utils/types";
import { t } from "i18next";
import { MenuItem } from "@mui/material";
import AsMenuItem from "../../../Generic/AsMenuItem";
import LogOutIcon from "../../../Icons/LogOutIcon";
import { isDarkModeAtom } from "../../../../recoil/theme";
import { useRecoilValue } from "recoil";

const LogOut = ({
    specialClassName
}: SectionProps) => {
    const { logout } = useAuth0();

    const { t } = useTranslation();

    const isDarkMode = useRecoilValue<boolean>(isDarkModeAtom);


    const handleLogout = () => {
        logout({ logoutParams: { returnTo: window.location.origin } });
    };

    return (

        <div className={`${specialClassName} cursor-pointer`} onClick={handleLogout}>
            <AsMenuItem
                title={t(LanguageLabels.LOG_OUT)}
                IconComponent={LogOutIcon}
                darkMode={isDarkMode}
                onClick={handleLogout}
            />
        </div>
    )
};

export default LogOut;