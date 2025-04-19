import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";
import LanguageLabels from "src/languages/en/translationEn.json";

const Header = () => {
    const { user } = useAuth0();
    const { t } = useTranslation();

    const userEmail: string = user?.email || "";

    return (
        <div className="pb-4">
            <strong >
                {t(LanguageLabels.BRAND_NAME)}
            </strong>

            {userEmail &&
                <p>
                    {userEmail}
                </p>
            }
        </div>
    )



};

export default Header;