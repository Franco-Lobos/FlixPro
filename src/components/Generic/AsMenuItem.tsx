import { MenuItem } from "@mui/material";
import { COLORS, MENU_ICON_CLASSES } from "../../utils/constants";




type AsMenuItemProps = {
    title: string | React.ReactNode;
    IconComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
    AuxiliarComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
    onClick?: (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;
    className?: string;
};

const AsMenuItem = ({
    title,
    IconComponent,
    AuxiliarComponent,
    onClick,
    className,
}: AsMenuItemProps) => {


    return (
        <MenuItem
            className={`flex items-center gap-2 p-2 text-sm text-black hover:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 rounded-sm ${className}`}
            onClick={onClick}
            onTouchStart={(e: React.TouchEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                e.preventDefault();
                onClick?.(e);
            }}
        >
            {IconComponent && (
                <IconComponent
                    className={MENU_ICON_CLASSES}
                    fill={COLORS.themeBlack}
                />
            )}

            <span className="flex-1">
                {title}
            </span>
            {AuxiliarComponent && (
                <AuxiliarComponent
                    className="w-5 h-5"
                />
            )}
        </MenuItem>
    )

};

export default AsMenuItem;