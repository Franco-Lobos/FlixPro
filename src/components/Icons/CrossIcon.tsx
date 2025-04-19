


const CrossIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {


    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"

            {...props}
            fill="none"
        >

            <path xmlns="http://www.w3.org/2000/svg" d="M 84 14 L 84 546 L 616 546 L 616 14 L 84 14 Z M 502.32 370.16 L 440.16 432.32 L 350 342.16 L 259.84 432.32 L 197.68 370.16 L 287.84 280 L 197.68 189.84 L 259.84 127.68 L 350 217.84 L 440.16 127.68 L 502.32 189.84 L 412.16 280 L 502.32 370.16 Z"
                fill={props.fill}

            />
        </svg >

    );

};

export default CrossIcon;