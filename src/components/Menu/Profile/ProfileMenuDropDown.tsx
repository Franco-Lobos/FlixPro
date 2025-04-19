
import Menu from '@mui/material/Menu';
import Header from './ProfileMenuItems/Header';
import Subscription from './ProfileMenuItems/Subscription';
import { HARCODED_VERSION, MENU_SECTION_CLASSES } from '../../../utils/constants';
import ConfigItems from './ProfileMenuItems/ConfigItems';
import LogOut from './ProfileMenuItems/LogOut';
import { useTranslation } from "react-i18next";
import LanguageLabels from "src/languages/en/translationEn.json";

type ProfileMenuDropDownProps = {
    anchorEl: null | HTMLElement;
    open: boolean;
    handleClose: () => void;
};

const ProfileMenuDropDown = ({
    anchorEl,
    open,
    handleClose,
}: ProfileMenuDropDownProps) => {

    const { t } = useTranslation();

    return (
        <Menu
            id="profile-dropdown-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{
                marginTop: "1rem",
            }}
            PaperProps={{
                className: `
                  bg-white text-black 
                  dark:bg-gray-900 dark:text-white
                  shadow-lg rounded-md
                  border border-gray-200 dark:border-gray-700
                `
            }}
        >
            <div
                className={`
                w-80 h-max flex flex-col p-4           
                 }`}
            >
                <Header />

                <Subscription
                    specialClassName={MENU_SECTION_CLASSES}
                />

                <ConfigItems />

                <LogOut
                    specialClassName={MENU_SECTION_CLASSES}
                />

                <p className='text-xs pt-2'>
                    {`${t(LanguageLabels.VERSION)}: ${HARCODED_VERSION}`}
                </p>
            </div >

        </Menu >
    );
};

export default ProfileMenuDropDown;


