declare module '*.ttf'

declare module '*.jpg'{
    const path: string;
    export default path;
}

declare module '*.jpeg'{
    const path: string;
    export default path;
}

declare module '*.png' {
    const path: string;
    export default path;
}

declare module '*.svg' {
    import React from 'react';
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export const ReactComponent = SVG;
}

declare module '*.sass' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}