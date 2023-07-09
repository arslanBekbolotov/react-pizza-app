import React from "react"
import ContentLoader from "react-content-loader";

interface Props{
    style?:{};
}

const MyLoader:React.FC<Props>= ({style}) => (
    <ContentLoader
        className={'grid__elem'}
        speed={2}
        width={250}
        height={420}
        viewBox="0 0 250 420"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...style}
    >
        <rect x="315" y="119" rx="0" ry="0" width="30" height="7" />
        <rect x="452" y="94" rx="6" ry="6" width="203" height="81" />
        <circle cx="503" cy="359" r="84" />
        <circle cx="127" cy="129" r="123" />
        <rect x="4" y="277" rx="10" ry="10" width="244" height="36" />
        <rect x="5" y="329" rx="10" ry="10" width="242" height="29" />
        <rect x="8" y="377" rx="7" ry="7" width="70" height="25" />
        <rect x="148" y="378" rx="14" ry="14" width="91" height="27" />
    </ContentLoader>
)

export default MyLoader