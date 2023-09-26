declare module '*.png'
declare module '*.ttf'
declare module '*.jpg'
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