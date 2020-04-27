import { 
  Color,
  Typography
} from './index';
export interface Theme<
ColorType =Color,
TypographyType = Typography
>{
 colors: Readonly<ColorType & Color>;
 typo: Readonly<TypographyType & Typography>; 
}