import { ReactNode, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

// eslint-disable-next-line react-refresh/only-export-components
export const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
	children?: ReactNode;
	initialTheme?: Theme;
}

const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
	const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
	document.body.className = theme;

	const defaultProps = useMemo(
		() => ({
			theme: theme,
			setTheme: setTheme,
		}),
		[theme],
	);

	return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
