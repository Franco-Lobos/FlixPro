import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";
import LanguageLabels from "src/languages/en/translationEn.json";
import { SectionProps } from "../../../../utils/types";
import { t } from "i18next";
import { MenuItem } from "@mui/material";

const LogOut = ({
    specialClassName
}: SectionProps) => {
    const { logout } = useAuth0();

    const { t } = useTranslation();

    const handleLogout = () => {
        logout({ logoutParams: { returnTo: window.location.origin } });
    };

    return (

        <div className={`${specialClassName} cursor-pointer`} onClick={handleLogout}>
            <MenuItem>
                {
                    t(LanguageLabels.LOG_OUT)
                }
            </MenuItem>
        </div>
    )
};

export default LogOut;