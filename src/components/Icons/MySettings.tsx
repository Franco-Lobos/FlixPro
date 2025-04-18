


const MySettings = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {


    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"

            {...props}
            fill="none"
        >
            <circle cx="12" cy="9" r="3" stroke={props.fill} strokeWidth="2" />
            <circle cx="12" cy="12" r="10" stroke={props.fill} strokeWidth="2" />
            <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke={props.fill} strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

export default MySettings;
