import { useContext } from 'react';
import { defaultTheme } from '../ui/ThemeProvider';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
	toggleTheme: (themeName: string) => void;
	theme: Theme;
}

export function useTheme(): UseThemeResult {
	const { theme = defaultTheme, setTheme } = useContext(ThemeContext);

	const toggleTheme = (themeName: string) => {
		if (theme === themeName) return;

		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

		setTheme?.(newTheme);
		document.body.className = newTheme;
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	return { theme, toggleTheme };
}
