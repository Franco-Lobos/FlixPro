


const AddIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {


    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"

            {...props}
            fill="none"
        >

            <path xmlns="http://www.w3.org/2000/svg" d="M 84 14 L 84 546 L 616 546 L 616 14 L 84 14 Z M 486.64 319.76 L 389.199 319.76 L 389.199 416.639 L 310.801 416.639 L 310.801 319.76 L 213.922 319.76 L 213.922 240.799 L 310.801 240.799 L 310.801 143.92 L 389.762 143.92 L 389.762 240.799 L 486.641 240.799 L 486.64 319.76 Z"
                fill={props.fill}

            />
        </svg >

    );

};

export default AddIcon;