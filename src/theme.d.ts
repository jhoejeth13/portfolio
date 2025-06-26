// src/theme.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
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