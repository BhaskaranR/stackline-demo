import type { Dispatch, FC, SetStateAction } from 'react'
import { createContext } from 'react'
export const ChosenTheme = createContext<IChosenTheme>({} as IChosenTheme)

interface IProps {
  children: React.ReactNode
}

export const ChosenThemeProvider: FC<IProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeName>('light')
  return <ChosenTheme.Provider value={{ theme, setTheme }}>{children}</ChosenTheme.Provider>
}

type ThemeName = 'dark' | 'light'
interface IChosenTheme {
  theme: ThemeName
  setTheme: Dispatch<SetStateAction<ThemeName>>
}
