


const Downlaod = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {


    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"

            {...props}
            fill="none"
        >
            <path d="M12 4H6C4.89543 4 4 4.89543 4 6V14C4 15.1046 4.89543 16 6 16H18C19.1046 16 20 15.1046 20 14V12" stroke={props.fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.5 3V9M17.5 9L15 6.5M17.5 9L20 6.5" stroke={props.fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 16V20" stroke={props.fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 20H16" stroke={props.fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        </svg>
    );
}

export default Downlaod;
