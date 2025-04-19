import { useRef, useState } from "react";
import Help from "./Help";
import ProfileMenuDropDown from "./ProfileMenuDropDown";
import { useAuth0 } from "@auth0/auth0-react";
import { USER_NAME } from "../../../utils/constants";

type ProfileMenuProps = {

}

const ProfileMenu = ({

}: ProfileMenuProps) => {

    const { user } = useAuth0();
    const anchorEl = useRef<HTMLDivElement | null>(null);

    const userInitial: string = (user?.name ?? USER_NAME).charAt(0).toUpperCase();
    const imageUrl: string | undefined = user?.picture;

    const [open, setOpen] = useState<boolean>(false);

    const handleClick = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        setOpen(true);
        anchorEl.current = event.currentTarget;
    };

    const handleClose = () => {
        setOpen(false);
        anchorEl.current = null;
    };

    return (
        <div className={`
        border-gray-300 border-2 rounded-md p-2 h-max
            `}>

            <div className="flex flex-row gap-2 items-center">
                <Help
                />

                <div
                    className="w-6 h-6 cursor-pointer"
                    onClick={handleClick}
                >
                    {imageUrl ?
                        <img
                            src={imageUrl}
                            alt="user"
                            className="w-full h-full rounded-full"
                            crossOrigin="anonymous"
                        />

                        : <div
                            className="w-full h-full bg-blue-500 flex items-center justify-center rounded-full "
                            onClick={handleClick}
                        >{userInitial}
                        </div>
                    }
                </div>

            </div>
            <ProfileMenuDropDown
                anchorEl={anchorEl.current}
                open={open}
                handleClose={handleClose}
            />
        </div>
    );


};

export default ProfileMenu;