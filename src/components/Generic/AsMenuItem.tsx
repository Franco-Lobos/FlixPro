import { MenuItem } from "@mui/material";
import { MENU_ICON_CLASSES } from "../../utils/constants";
import colors from 'tailwindcss/colors'



type AsMenuItemProps = {
    title: string | React.ReactNode;
    IconComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
    AuxiliarComponent?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;
    className?: string;
    darkMode?: boolean;
};

const AsMenuItem = ({
    title,
    IconComponent,
    AuxiliarComponent,
    onClick,
    className,
    darkMode = false,
}: AsMenuItemProps) => {

    return (
        <MenuItem
            className={`
            grid grid-cols-[3fr_1fr] gap-2
            py-1 text-sm rounded-sm ${className}
            dark:hover:bg-gray-700 dark:hover:text-white        
            `}
            onClick={onClick}
        >
            <div className="flex items-center gap-2">

                {IconComponent && (
                    <IconComponent
                        className={`${MENU_ICON_CLASSES}`}
                        fill={darkMode ? colors.white : colors.gray[900]}
                    />
                )}

                {title}
            </div>

            {AuxiliarComponent}
        </MenuItem>
    )

};

export default AsMenuItem;