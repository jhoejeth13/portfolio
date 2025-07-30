// src/theme.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      borderLight: Interpolation<FastOmit<Omit<HTMLMotionProps<"div">, "ref"> & RefAttributes<HTMLDivElement>, never>>;
      textTertiary: Interpolation<FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, never>>;
      textPrimary: Interpolation<FastOmit<Omit<HTMLMotionProps<"h1">, "ref"> & RefAttributes<HTMLHeadingElement>, never>>;
      backgroundLight: Interpolation<FastOmit<Omit<HTMLMotionProps<"a">, "ref"> & RefAttributes<HTMLAnchorElement>, never>>;
      backgroundLighter: Interpolation<FastOmit<Omit<HTMLMotionProps<"a">, "ref"> & RefAttributes<HTMLAnchorElement>, never>>;
      textPrimary: Interpolation<FastOmit<Omit<HTMLMotionProps<"h1">, "ref"> & RefAttributes<HTMLHeadingElement>, never>>;
      backgroundLight: Interpolation<FastOmit<Omit<HTMLMotionProps<"a">, "ref"> & RefAttributes<HTMLAnchorElement>, never>>;
      backgroundLighter: Interpolation<FastOmit<Omit<HTMLMotionProps<"a">, "ref"> & RefAttributes<HTMLAnchorElement>, never>>;
      backgroundAlt2: Interpolation<FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
      shadowHover: Interpolation<FastOmit<Omit<HTMLMotionProps<"div">, "ref"> & RefAttributes<HTMLDivElement>, never>>;
      shadow: Interpolation<Substitute<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, { $isHovered: boolean; }>>;
      secondary: Interpolation<FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, never>>;
      border: Interpolation<FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, never>>;
      border: Interpolation<FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, never>>;
      primaryLight: Interpolation<FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>, never>>;
      backgroundAlt: Interpolation<FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, never>>;
      primaryDark: Interpolation<Substitute<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, { position: "left" | "right"; }>>;
      background: string;
      text: string;
      primary: string;
      primaryHover: string;
      textSecondary: string;
      borderColor: string;
      inputBg: string;
      cardBg: string;
      techBg: string;
    };
    sectionBg: string;
  }
}
// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: 'light' | 'dark';
    colors: {
      backgroundAlt: string;
      text: string;
      textSecondary: string;
      primary: string;
      secondary: string;
      background: string;
      border: string;
      shadow: string;
    };
  }
}