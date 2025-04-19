import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { getUserData } from "../../../../utils/mongo.db";
import { DEFAULT_USER_SUBSCRIPTION } from "../../../../utils/constants";
import LanguageLabels from "src/languages/en/translationEn.json";
import { SectionProps, SubscriptionStatus } from "../../../../utils/types";


const Subscription = ({
    specialClassName
}: SectionProps) => {

    const { user } = useAuth0();
    const { t } = useTranslation();

    const [userSubscription, setUserSubscription] = useState<SubscriptionStatus | undefined>(undefined);

    const asyncGetUserData = async () => {
        if (!user) return;

        const getDataRes: any = await getUserData(user.name);
        const _userSubscription: SubscriptionStatus = getDataRes?.subscription ?? DEFAULT_USER_SUBSCRIPTION;
        setUserSubscription(_userSubscription);
    };

    useEffect(() => {
        asyncGetUserData();
    }, []);

    return (
        userSubscription ?
            <div className={`${specialClassName}`}>
                {t(LanguageLabels[userSubscription])}
            </div>
            : <></>
    )
};

export default Subscription;